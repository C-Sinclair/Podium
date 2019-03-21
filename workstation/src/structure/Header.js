import React, { Component } from 'react'
import Logo from '../assets/podium-text.png'

class Header extends Component {

    componentDidMount() {
        // console.log("Header Mounting")
    }

    render() {
        return (
            <header>
                <img id="textLogo" src={Logo} />
                <strong id="areaTitle">Workstation</strong>
            </header>
        )
    }

}

export default Header