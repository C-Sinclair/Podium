import React, { Component } from 'react'

class Header extends Component {

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

export default Header