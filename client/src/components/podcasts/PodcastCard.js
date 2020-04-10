import React from 'react'
import {connect} from 'react-redux'
// import { AddToList, AddToCurrentlyListening } from '/actions/podcasts.js'

const PodcastCard = (podcast) => {
  return (
    <div className="card">
      <img class="thumbnail" src={podcast.podcast.thumbnail} />
      <h4> {podcast.podcast.title} </h4>
      <p> {podcast.podcast.publisher} </p>
      <button> + </button>
      <button> More Details </button>
    </div>
  )
}

export default connect(null)(PodcastCard)
