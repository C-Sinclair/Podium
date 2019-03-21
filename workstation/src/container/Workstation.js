import React, { Component } from 'react'
import Mixer from './Mixer'

class Workstation extends Component {

    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        console.log("Station Mounting")
    }

    render() {
        return (
            <div id="content">
                <Mixer />
            </div>
        )
    }
}

export default Workstation