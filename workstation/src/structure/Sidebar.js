import React, { Component } from 'react'

class Sidebar extends Component {

    componentDidMount() {
        console.log("Sidebar Mounting")
    }

    render() {
        const menuItems = [
            { label : "Exports" },
            { label : "Library" },
            { label : "Resources" }
        ]
        return (
            <nav>
                <div>Sidebar content will go here!</div>
            </nav>
        )
    }

}

export default Sidebar