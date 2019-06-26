import * as React from 'react'
import { StatelessComponent } from 'react'
import { Link } from 'react-router-dom'
import { SidebarProps } from '../types/props'

const Sidebar: StatelessComponent<SidebarProps> = ({ open, setOpen }) => {
  return (
    <nav className={open ? 'open' : 'closed'}>
      <ul>
        <li>
          <Link to="/feed">Feed</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
      </ul>
      <button onClick={_ => setOpen(!open)}></button>
    </nav>
  )
}

export default Sidebar
