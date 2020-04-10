import React from 'react'
import {connect} from 'react-redux'

const PodcastCard = (podcast) => {
  return (
    <div className="card">
      <img class="thumbnail" src={podcast.podcast.thumbnail} />
      <h4> {podcast.podcast.title} </h4>
      <a> {podcast.podcast.publisher} </a>
    </div>
  )
}

export default PodcastCard
