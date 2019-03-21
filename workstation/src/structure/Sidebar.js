import React, { Component } from 'react'

const SidebarMenu = (props) => {
    const items = props.items.map((item, key) => (
        <li key={key} className="menuItem">
            <strong>{item.label}</strong>
        </li>
    ))
    return (
        <div className="menu">
            <ul>{items}</ul>
        </div>
    )
}

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
                <SidebarMenu items={menuItems}/>
            </nav>
        )
    }

}

export default Sidebar