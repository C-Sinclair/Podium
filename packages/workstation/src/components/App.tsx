import * as React from 'react'
import { FunctionComponent, useState } from 'react'
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
  const headerProps = {
    name,
    onNameChange
  }
  const initialMixerProps = {}
  return (
    <main>
      <Header props={headerProps} />
      <Mixer props={initialMixerProps}/>
    </main>
  )
}

export default App
