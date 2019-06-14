import * as React from 'react'
import { StatelessComponent } from 'react'
import { HeaderProps } from '../types/props';

const Header: StatelessComponent<HeaderProps> = ({ user, onNameChange }) => {
  return (
    <header>
      <h1>
        Welcome back 
        <input 
          onChange={e => onNameChange(e.target.value)} 
          value={user.name} />
      </h1>
    </header>
  )
}

export default Header
