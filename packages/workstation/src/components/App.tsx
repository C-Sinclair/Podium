import React, { FunctionComponent, useState } from 'react'
import Header from './Header'
import Side from './Side'
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
  const [ selected, onSelect ] = useState(0)

  // get data on current session from sessionId

  const tracks: TrackProps[] = []
  const selectedTrack: TrackProps = null

  return (
    <main>
      <Header name={name} onNameChange={onNameChange} />
      <Side open={true} track={selectedTrack} />
      <Mixer tracks={tracks} />
    </main>
  )
}

export default App
