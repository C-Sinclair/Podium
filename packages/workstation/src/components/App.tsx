import React, { FunctionComponent, useState } from 'react'
import Header from './Header'
import Mixer from './Mixer'
import { AppProps } from '../types/props';

const getNewSession = () => 1

const App: FunctionComponent<AppProps> = ({ 
  user = {
    name: "",
    id: 0,
    token: ""
  },
  sessionId = getNewSession() 
}) => {
  const [ name, setName ] = useState(user.name)
  const onNameChange = (name: string) => setName(name)

  const initialMixerProps = {}
  return (
    <main>
      <Header 
        name={name} 
        onNameChange={onNameChange}/>
      <Mixer props={initialMixerProps}/>
    </main>
  )
}

export default App
