import React, { FunctionComponent, useState } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo-hooks'
import Header from './Header'
import Side from './Side'
import Mixer from './Mixer'
import { AppProps, TrackProps } from '../types/props'

const client = new ApolloClient({
  uri: 'localhost:3000/graphql',
  resolvers: {}
})

// from window.location.href || new unique hash
const getNewSession = () => 1

const App: FunctionComponent<AppProps> = ({
  user = {
    name: '',
    id: 0,
    token: ''
  },
  sessionId = getNewSession()
}) => {
  const [name, setName] = useState(user.name)
  const onNameChange = (name: string) => setName(name)
  const [selected, onSelect] = useState(0)

  // get data on current session from sessionId

  const tracks: TrackProps[] = []
  const selectedTrack: TrackProps = null

  return (
    <ApolloProvider client={client}>
      <main>
        <Header name={name} onNameChange={onNameChange} />
        <Side open={true} track={selectedTrack} />
        <Mixer tracks={tracks} />
      </main>
    </ApolloProvider>
  )
}

export default App
