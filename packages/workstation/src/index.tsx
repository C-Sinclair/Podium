import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

const user = {
    name: 'Conor',
    id: 1,
    token: 'testToken'
}

render(<App user={user}/>, document.getElementById('root'))
