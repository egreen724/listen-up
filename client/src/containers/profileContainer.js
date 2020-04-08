import React from 'react';
import {connect} from 'react-redux'
import ProfileInfo from '../components/ProfileInfo.js'


class ProfileContainer extends React.Component {

   renderProfile = () => {
    if (this.props.currentUser != null) {
      return (
       <ProfileInfo user={this.props.currentUser} />
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderProfile()}
      </div>

    );
  }

}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}


export default connect(mapStateToProps, null)(ProfileContainer);
