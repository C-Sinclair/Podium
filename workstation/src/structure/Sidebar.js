import React, { Component } from 'react'

class Sidebar extends Component {

    componentDidMount() {
        console.log("Header Mounting")
    }

    render() {
        return (
            <header>
                <div>Header content will go here!</div>
            </header>
        )
    }

}

export default Sidebar