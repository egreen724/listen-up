import React from 'react'

const ProfileInfo = (props) => {

  const renderUploader = () => {

  }

  return (
    <div className="profileCard">
      <img className="profileImage" src='#{props.user.img_url}'/>
      <button onClick={renderUploader}>Add or Edit Profile Image</button>
      <h3> {props.user.first_name} {props.user.last_name} </h3>
      <h4> {props.user.bio} </h4>

    </div>
  )
}

export default ProfileInfo
