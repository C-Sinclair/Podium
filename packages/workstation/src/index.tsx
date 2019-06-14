import * as React from 'react'
import { render } from 'react-dom'
import App from './components/App'

const props = {
  name: 'Conor'
}

render(<App props />, document.getElementById('root'))
