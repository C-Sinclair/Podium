import * as React from 'react'
import { StatelessComponent } from 'react'
import { SidebarProps } from '../types/props'

enum SidebarSelection {
    HOME,
    MIXER
}

const Sidebar: StatelessComponent<SidebarProps> = ({ selected, onSelect }) => {
  return (
    <nav>
        <ul>
            <li key={SidebarSelection.HOME} 
                className={selected == SidebarSelection.HOME ? "selected": ""}
                onClick={_ => onSelect(SidebarSelection.HOME)}>
                    Home
                </li>
            <li key={SidebarSelection.MIXER}
                className={selected == SidebarSelection.MIXER ? "selected": ""}
                onClick={_ => onSelect(SidebarSelection.MIXER)}>
                    Mixer
                </li>
        </ul>
    </nav>
  )
}

export default Sidebar
