import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser.js'

const Login = (props) => {

  const handleInputChange = event => {
    const {name, value} = event.target
    const updatedFormInfo = {
      ...props.loginFormData,
      [name]: value
    }
    props.updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.login(props.loginFormData)
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" type='text' name='email' value={props.loginFormData.email} onChange={handleInputChange} />
        <input placeholder="Password" type='text' name='password' value={props.loginFormData.password} onChange={handleInputChange} />
        <input type="submit" value="Log In" />
      </form>

      <p>New user? Sign up! </p>
    </div>
  )
}

//look up controlled components
const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, {updateLoginForm, login})(Login)
