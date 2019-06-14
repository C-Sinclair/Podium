import * as React from 'react'
import { render } from 'react-dom'
import App from './components/App'

const props = {
  user: {
    name: 'Conor',
    id: 1,
    token: 'testToken'
  },
  sessionId: 'ds'
}

render(<App props={props} />, document.getElementById('root'))
