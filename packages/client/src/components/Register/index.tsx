import React, { FunctionComponent } from 'react'

const Register: FunctionComponent = () => {
  return (
    <section>
      <h4>Register for an account</h4>
      <form>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <label>
          Repeat Password
          <input type="password" name="passwordRepeat" />
        </label>
      </form>
    </section>
  )
}

export default Register
