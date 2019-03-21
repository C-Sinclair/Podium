import React, { Component } from 'react'

class Sidebar extends Component {

    componentDidMount() {
        console.log("Sidebar Mounting")
    }

    render() {
        return (
            <header>
                <div>Sidebar content will go here!</div>
            </header>
        )
    }

}

export default Sidebar