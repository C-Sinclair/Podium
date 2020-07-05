<script>
  import { onDestroy } from 'svelte'
  import { Router, Route } from 'svelte-routing'
  import { Home, Chat, Admin, Login } from './pages'
  import { Header } from './components'
  import { User } from './state'

  export let url = ""

  let user
  const user$ = User.subscribe(v => user = v)
  onDestroy(user$)

  $: loggedIn = !!user
</script>

<Router {url}>
  <main>
    <Header />
    {#if loggedIn}
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