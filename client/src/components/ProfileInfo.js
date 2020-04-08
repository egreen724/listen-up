import React from 'react'
import ImageUploader from './ImageUploader.js'

const ProfileInfo = (user) => {

  const renderUploader = (event) => {
    event.preventDefault()
    return <div> <ImageUploader /> </div>
  }

  return (
    <div className="profileCard">
      <h2>Your Profile</h2>
      <img alt="profileImg" className="profileImage" src='https://listen-up.s3.us-east-2.amazonaws.com/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'/>
      <button onClick={renderUploader()}>Add or Edit Profile Image</button>
      <h3> {user.user.first_name} {user.user.last_name} </h3>
      <h4> {user.user.bio} </h4>

    </div>
  )
}

export default ProfileInfo
