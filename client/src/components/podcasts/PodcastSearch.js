import React from 'react'
import {connect} from 'react-redux'

const PodcastSearch = () => {

  return (
    <div>
      <input type="text" placeholder="Podcast Search"/>
      <input type="submit" value="Search" />
    </div>

  )
}

export default PodcastSearch
