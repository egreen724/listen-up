import React from 'react'

const ProfileInfo = (user) => {

  const renderUploader = () => {

  }

  return (
    <div className="profileCard">
      <h2>Your Profile</h2>
      <img className="profileImage" src='https://listen-up.s3.us-east-2.amazonaws.com/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'/>
      <button onClick={renderUploader}>Add or Edit Profile Image</button>
      <h3> {user.user.first_name} {user.user.last_name} </h3>
      <h4> {user.user.bio} </h4>

    </div>
  )
}

export default ProfileInfo
