import React from 'react'

import './Signup.css'

function Signup() {
  return (
    <form>
      <label>Name:</label><br />
      <input type="text" name="name" /><br />
      <input className="submit-btn" type="submit" value="Sign up" />
    </form>
  )
}

export default Signup;
