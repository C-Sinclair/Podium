import React, { Component } from 'react'
import logo from './assets/podium-text.png'
import './compiled/styles/main.css'

class App extends Component {

    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        console.log("Mounting")
        this.callApi()
            .then(res => this.setState(res))
            .catch(console.error)
    }

    callApi = async () => {
        const response = await fetch('/api')
        window._response = response

        let text = await response.text()
        let data = null
        try {
            data = JSON.parse(text)
        } catch (e) {
            console.error(`Invalid json\n${e}`)
        }

        if (response.status !== 200) {
            throw Error(data ? data.message : 'No data!')
        }
        return data
    }

    render() {
        return (
            <div className="App">
                <header>
                    <img src={logo}  className="podium-logo" />
                </header>
                <div id="content">Content will go here!</div>
            </div>
        )
    }
}

export default App