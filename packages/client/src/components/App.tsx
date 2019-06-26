import React, { FunctionComponent, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo-hooks'
import Header from './Header'
import Sidebar from './Sidebar'
import Routes from './Routes'

const client = new ApolloClient({
  uri: 'localhost:3000/graphql',
  resolvers: {}
})

const App: FunctionComponent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  return (
    <ApolloProvider client={client}>
      <main>
        <Router>
          <Header />
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          {...Routes}
        </Router>
      </main>
    </ApolloProvider>
  )
}

export default App
