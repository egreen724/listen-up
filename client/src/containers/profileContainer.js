import React from 'react';
import {connect} from 'react-redux'
import ProfileInfo from '../components/ProfileInfo.js'


class ProfileContainer extends React.Component {
  debugger; 
  render() {
    return (
     <ProfileInfo props={this.props.currentUser} />
    );
  }

}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}


export default connect(mapStateToProps, null)(ProfileContainer);
