import React, { FunctionComponent } from 'react'

const Login: FunctionComponent = () => {
  return (
    <section>
      <h4>Welcome back</h4>
      <form>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
      </form>
    </section>
  )
}

export default Login
