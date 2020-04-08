import React from 'react';
import {connect} from 'react-redux'
import PodcastSearch from '../components/podcasts/PodcastSearch.js'
import PodcastCard from '../components/podcasts/PodcastCard.js'

class PodcastContainer extends React.Component {

  state = {
    podcasts: [ {
      title: "Radiolab",
      media_company: "WNYC Studios",
      description: "Science for the modern world"
    },
    {
      title: "Pod Save the World",
      media_company: "Crooked Media",
      description: "Science for the modern world"
    }
    ]
  }

  componentDidMount() {
    // fetch call for top 10 podcasts
  }

   renderPodcasts = () => {
     return this.state.podcasts.map((podcast) => {
       return <PodcastCard podcast={podcast} />
     })
  }

  render() {
    return (
      <div>
      <h2> Podcasts </h2>
        <PodcastSearch />
        <h3>Trending </h3>
        <div>
          {this.renderPodcasts()}
        </div>
      </div>

    );
  }

}

const mapStateToProps = state => {
  return {

  }
}


export default connect(mapStateToProps, null)(PodcastContainer);
