import 'phoenix_html'
import App from './App.svelte'
import '../css/app.sass'

window.addEventListener("phx:page-loading-start", () => console.log('phx:page-loading-start'))
window.addEventListener("phx:page-loading-stop", () => console.log('phx:page-loading-stop'))

new App({
    target: document.getElementById('svelte-content')
})