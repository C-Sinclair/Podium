import React from 'react'
import { Route } from 'react-router-dom'
import Welcome from './Welcome'
import Docs from './Docs'
import Login from './Login'
import Register from './Register'
import Feed from './Feed'

const Routes = [
  <Route exact path="/" component={Welcome} />,
  <Route path="/docs" component={Docs} />,
  <Route path="/login" component={Login} />,
  <Route path="/register" component={Register} />,
  <Route path="/feed" component={Feed} />
]

export default Routes
