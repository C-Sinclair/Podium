import React, { Component } from 'react'
import Header from './structure/Header'
import Sidebar from './structure/Sidebar'
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
                <div id="content">Content will go here!</div>
            </div>
        )
    }
}

export default App