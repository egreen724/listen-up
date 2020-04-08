import React from 'react';
import {connect} from 'react-redux'
import PodcastSearch from '../components/podcasts/PodcastSearch.js'
import PodcastCard from '../components/podcasts/PodcastCard.js'

class PodcastContainer extends React.Component {

  componentDidMount() {
    // fetch call for top 10 podcasts
  }

   renderPodcasts = () => {

  }

  render() {
    return (
      <div>
        <PodcastSearch />
        <h2>Trending Podcasts </h2>

      </div>

    );
  }

}

const mapStateToProps = state => {
  return {

  }
}


export default connect(mapStateToProps, null)(PodcastContainer);
