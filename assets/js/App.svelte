<script>
  import Header from './components/Header.svelte'

  export let name
  export let channel

  channel.on('message', console.log)

  function sendMessage() {
    channel.push('message', {
      body: 'text to send'
    })
  }
</script>

<style>
  h1 { color: teal; }
</style>

<main>
  <Header></Header>
  <h1>Hello {name}!</h1>

  <button on:click={sendMessage}>Send a message</button>
</main>

