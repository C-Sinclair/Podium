import React, { useState, FunctionComponent } from 'react'
import { PluginsProps } from '../types/props'

enum PluginsOptions {
    MENU,
    EQ
}

const Plugins: FunctionComponent<PluginsProps> = () => {
    const [ selected, setSelected ] = useState(PluginsOptions.MENU)

    return selected == PluginsOptions.MENU 
        ? (
            <h4>Plugins </h4>
            <ul></ul>
        )
        : (
            <h4></h4>
        )
}

export default Plugins
