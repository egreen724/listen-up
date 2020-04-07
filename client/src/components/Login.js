import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'

const Login = (props) => {

  const handleInputChange = event => {
    const {name, value} = event.target
    const updatedFormInfo = {
      ...props.loginForm,
      [name]: value
    }
    props.updateLoginForm(updatedFormInfo)
  }

  return (
    <form onSubmit={undefined}>
      <input placeholder="Email" type='text' name='email' value={props.email} onChange={handleInputChange} />
      <input placeholder="Password" type='text' name='password' value={props.password} onChange={handleInputChange} />
      <input type="submit" value="Log In" />
    </form>
  )
}

//look up controlled components
const mapStateToProps = state => {
  return {
    loginForm: state.loginForm
  }
}

export default connect(mapStateToProps, {updateLoginForm})(Login)
