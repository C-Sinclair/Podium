import React, { FunctionComponent, useState } from 'react'
import Header from './Header'
import Mixer from './Mixer'
import Sidebar from './Sidebar'
import Plugins from './Plugins'
import Workspace from './Workspace'
import { AppProps } from '../types/props'

const getNewSession = () => 1

const App: FunctionComponent<AppProps> = ({ 
  user = {
    name: "",
    id: 0,
    token: ""
  },
  sessionId = getNewSession() 
}) => {
  // load from sessionId
  const [ name, setName ] = useState(user.name)
  const onNameChange = (name: string) => setName(name)
  const [ selected, onSelect ] = useState(0)

  return (
    <main>
      <Header 
        name={name} 
        onNameChange={onNameChange}/>
      <Sidebar 
        onSelect={onSelect} />
      <Plugins />
      <Workspace />
      <Mixer />
    </main>
  )
}

export default App
