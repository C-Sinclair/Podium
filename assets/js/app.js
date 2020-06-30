import "../css/app.scss"
import "phoenix_html"
import {Socket} from "phoenix"
import NProgress from "nprogress"
import {LiveSocket} from "phoenix_live_view"

const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
const liveSocket = new LiveSocket("/live", Socket, {params: {_csrf_token: csrfToken}})

// Show progress bar on live navigation and form submits
window.addEventListener("phx:page-loading-start", info => NProgress.start())
window.addEventListener("phx:page-loading-stop", info => NProgress.done())

// connect if there are any LiveViews on the page
liveSocket.connect()

// expose liveSocket on window for web console debug logs and latency simulation:
// >> liveSocket.enableDebug()
// >> liveSocket.enableLatencySim(1000)
window.liveSocket = liveSocket

const socket = new Socket('/socket', { token: window.userToken })
socket.connect()

const channel = socket.channel("video:peer2peer", {})
channel
  .join()
  .receive("ok", res => { 
    console.log("Joined successfully ", res) 
  })
  .receive("error", () => { 
    console.log("Unable to join") 
  })

function pushPeerMessage(type, content) {
  channel.push('peer-message', {
    body: JSON.stringify({
      type,
      content,
    }),
  });
}

const mediaConstraints = {
  audio: true,
  video: {
    width: 4096,
    height: 2160
  }
};

const devices = navigator.mediaDevices;

const connectButton = document.getElementById('connect');
const callButton = document.getElementById('call');
const disconnectButton = document.getElementById('disconnect');

const remoteVideo = document.getElementById('remote-stream');
const localVideo = document.getElementById('local-stream');

let peerConnection;
let remoteStream = new MediaStream();

setVideoStream(remoteVideo, remoteStream);

disconnectButton.disabled = true;
callButton.disabled = true;
connectButton.onclick = connect;
callButton.onclick = call;
disconnectButton.onclick = disconnect;

async function connect() {
  console.log('connect')
  connectButton.disabled = true;
  disconnectButton.disabled = false;
  callButton.disabled = false;  
  try {
    const localStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    console.log('localStream', localStream)
    setVideoStream(localVideo, localStream);
    peerConnection = createPeerConnection(localStream);
  } catch (err) {
    console.error(err)
  }
}

async function call() {
  let offer = await peerConnection.createOffer();
  peerConnection.setLocalDescription(offer);
  pushPeerMessage('video-offer', offer);
}

function createPeerConnection(stream) {
  console.log('createPeerConnection')
  let pc = new RTCPeerConnection({
    iceServers: [
      // Information about ICE servers - Use your own!
      {
        urls: 'stun:stun.stunprotocol.org',
      },
    ],
  });
  pc.ontrack = handleOnTrack;
  pc.onicecandidate = handleIceCandidate;
  stream.getTracks().forEach(pc.addTrack);
  return pc;
}

function handleOnTrack(event) {
  console.log('handleOnTrack', event)
  remoteStream.addTrack(event.track);
}

function handleIceCandidate(event) {
  console.log('handleIceCandidate', event)
  if (!!event.candidate) {
    pushPeerMessage('ice-candidate', event.candidate);
  }
}

function disconnect() {
  console.log('disconnect')
  connectButton.disabled = false;
  disconnectButton.disabled = true;
  callButton.disabled = true;
  unsetVideoStream(localVideo);
  unsetVideoStream(remoteVideo);
  peerConnection.close();
  peerConnection = null;
  remoteStream = new MediaStream();
  setVideoStream(remoteVideo, remoteStream);
  pushPeerMessage('disconnect', {});
}

function receiveRemote(offer) {
  console.log('receiveRemote', offer)
  let remoteDescription = new RTCSessionDescription(offer);
  peerConnection.setRemoteDescription(remoteDescription);
}

async function answerCall(offer) {
  console.log('answerCall', offer)
  receiveRemote(offer);
  let answer = await peerConnection.createAnswer();
  peerConnection
    .setLocalDescription(answer)
    .then(() =>
      pushPeerMessage('video-answer', peerConnection.localDescription)
    );
}

channel.on('peer-message', payload => {
  const message = JSON.parse(payload.body);
  switch (message.type) {
    case 'video-offer':
      console.log('offered: ', message.content);
      answerCall(message.content);
      break;
    case 'video-answer':
      console.log('answered: ', message.content);
      receiveRemote(message.content);
      break;
    case 'ice-candidate':
      console.log('candidate: ', message.content);
      let candidate = new RTCIceCandidate(message.content);
      peerConnection
        .addIceCandidate(candidate)
        .catch(reportError('adding and ice candidate'));
      break;
    case 'disconnect':
      disconnect();
      break;
    default:
      console.error('unhandled message type', message.type);
  }
});

function setVideoStream(videoElement, stream) {
  console.log('setVideoStream', videoElement, stream)
  videoElement.srcObject = stream;
}

function unsetVideoStream(videoElement) {
  console.log('unsetVideoStream', videoElement)
  if (videoElement.srcObject) {
    videoElement.srcObject.getTracks().forEach(track => track.stop());
  }
  videoElement.removeAttribute('src');
  videoElement.removeAttribute('srcObject');
}
