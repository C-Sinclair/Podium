import React, { Component } from 'react'
// import Channel from '../components/Channel'

class Mixer extends Component {

    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        console.log("Mixer Mounting")
    }

    render() {
        return (
            <div id="mixer"></div>
        )
    }
}

export default Mixer