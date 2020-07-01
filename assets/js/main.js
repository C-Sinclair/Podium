import 'phoenix_html'
import phx from "phoenix"
import App from './App.svelte'
import NProgress from "nprogress"
import '../css/app.scss'

window.addEventListener("phx:page-loading-start", NProgress.start)
window.addEventListener("phx:page-loading-stop", NProgress.done)

const socket = new phx.Socket('/socket', { token: window.userToken })
socket.connect()

const channel = socket.channel('video:peer2peer', {})
channel.join()
    .receive("ok", res => { 
        console.log("Joined successfully ", res) 
    })
    .receive("error", () => { 
        console.log("Unable to join") 
    })

new App({
    target: document.body,
    props: {
        name: 'World',
        channel
    }
})