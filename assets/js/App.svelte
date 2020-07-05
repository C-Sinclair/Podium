<script>
  import { Router, Route } from 'svelte-routing'
  import { Home, Chat, Admin, Login } from './pages'
  import { Header } from './components'
  import { user } from './state'

  export let url = ""
</script>

<Router {url}>
  <main>
    <Header />
    {#if $user}
      <Route path="/c/:code" let:params>
        <Chat code="{params.code}" />
      </Route>
      <Route path="/admin" component="{Admin}" />
      <Route path="/"><Home /></Route>
    {:else}
      <Route path="/"><Login /></Route>
    {/if}
  </main>
</Router>