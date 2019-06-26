import React, { FunctionComponent, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Welcome from './Welcome'
import Docs from './Docs'
import Login from './Login'
import Register from './Register'
import Feed from './Feed'

const App: FunctionComponent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  return (
    <main>
      <Router>
        <Header />
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <Route exact path="/" component={Welcome} />
        <Route path="/docs" component={Docs} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/feed" component={Feed} />
      </Router>
    </main>
  )
}

export default App
