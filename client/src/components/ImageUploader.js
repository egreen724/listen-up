import React from 'react'

const ImageUploader = () => {

  return (
    <div className="modal">
      <input type="file" onChange={this.fileChangedHandler} />
      <button onClick={this.uploadHandler}>Upload!</button>
    </div>
  )
}

export default ImageUploader
