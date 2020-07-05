import 'phoenix_html'
import phx from "phoenix"
import App from './App.svelte'
import NProgress from "nprogress"
import '../css/app.scss'

window.addEventListener("phx:page-loading-start", NProgress.start)
window.addEventListener("phx:page-loading-stop", NProgress.done)

const socket = new phx.Socket('/socket', { token: window.userToken })
socket.connect()

new App({
    target: document.getElementById('svelte-content'),
    props: {
        socket
    },
})