<script>
  import { Router, Route } from 'svelte-routing'
  import { Home, Chat, Admin } from './pages'
  import { Header } from './components'

  export let url = ""
</script>

<Router {url}>
  <main>
    <Header />
    <Route path="/c/:code" let:params>
      <Chat code="{params.code}" />
    </Route>
    <Route path="/admin" component="{Admin}" />
    <Route path="/"><Home /></Route>
  </main>
</Router>