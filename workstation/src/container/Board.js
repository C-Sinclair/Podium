import React, { Component } from 'react'
// import Track from '../components/Track'

class Board extends Component {

    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        console.log("Board Mounting")
    }

    render() {
        return (
            <div id="mixer"></div>
        )
    }
}

export default Board