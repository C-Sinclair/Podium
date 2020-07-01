<script>
  export let name
  export let channel

  channel.on('message', console.log)
</script>

<style>
  h1 { color: teal; }
</style>

<h1>Hello {name}!</h1>