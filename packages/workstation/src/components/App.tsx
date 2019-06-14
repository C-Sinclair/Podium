import * as React from 'react'

interface Props {
  name: String
  id: number
}

const App: React.FunctionComponent<Props> = props => {
  const { name, id } = props
  return (
    <main>
      <h1>Welcome back {name}</h1>
      <p>{id}</p>
    </main>
  )
}

export default App
