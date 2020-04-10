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
    fetch('https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=100&page=2&region=us&safe_mode=0', {
      method: 'GET',
      headers: {
        "X-ListenAPI-Key": '6df38566398142a3a0c025e711760376'
      },
      body: JSON.stringify()
    })
    .then(r => r.json())
    .then( response => {
      this.setState({podcasts: response.podcasts} )
    }
    )
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
        <div class='scroll-box'>
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
