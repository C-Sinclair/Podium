import React, { Component } from 'react'
import Header from '../structure/Header'
import Sidebar from '../structure/Sidebar'
import Workstation from './Workstation.js'
import './styles/main.css'

class App extends Component {

    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        console.log("App Mounting")
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Sidebar />
                <Workstation />
            </div>
        )
    }
}

export default App