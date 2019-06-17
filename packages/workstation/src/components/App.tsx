import React, { FunctionComponent, useState } from 'react'
import Header from './Header'
import Mixer from './Mixer'
import { AppProps, TrackProps } from '../types/props'

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

  // get data on current session from sessionId

  const tracks: TrackProps[] = []

  return (
    <main>
      <Header name={name} onNameChange={onNameChange} />
      <Mixer tracks={tracks} />
    </main>
  )
}

export default App
