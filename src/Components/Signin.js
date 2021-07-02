import React from 'react'

import './Signin.css'

function Signin() {
  return (
    <form>
      <label>Name:</label><br />
      <input type="text" name="name" /><br />
      <input className="submit-btn" type="submit" value="Sign in" />
    </form>
  )
}

export default Signin;
