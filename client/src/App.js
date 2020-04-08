import React from 'react';
import './App.css';
import Login from './components/Login.js'
import ProfileContainer from './containers/profileContainer.js'
import {connect} from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div>
        <Login />
        <ProfileContainer user={this.props.getCurrentUser}/>
      </div>

    );
  }

}


export default connect(null, {getCurrentUser})(App);
