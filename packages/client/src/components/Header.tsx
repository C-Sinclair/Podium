import React, { StatelessComponent } from 'react'
import { Link } from 'react-router-dom'

const Header: StatelessComponent = () => {
  return (
    <header>
      <button>
        <Link to="/">Home</Link>
      </button>
      <h1>PODIUM</h1>
      <button>
        <Link to="/login">Login</Link>
      </button>
      <button>
        <Link to="/register">Sign up</Link>
      </button>
    </header>
  )
}

export default Header
