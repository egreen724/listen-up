import React from 'react'
import {connect} from 'react-redux'

const PodcastCard = (podcast) => {
  return (
    <div className="card">
      <h3> {podcast.podcast.title} </h3>
      <p> {podcast.podcast.media_company} </p>
      <p> {podcast.podcast.description} </p>
    </div>
  )
}

export default PodcastCard
