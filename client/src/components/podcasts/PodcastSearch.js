import React from 'react'
import {connect} from 'react-redux'
import PodcastCard from './PodcastCard.js'


class PodcastSearch extends React.Component {

  state = {
    searchTerm: "",
    results: []
  }

 handleInputChange = (event) => {
    const {name, value} = event.target
    console.log(value)
  this.setState({searchTerm: value})
  }

 searchFetchCall = () => {
    let query = this.state.searchTerm.split(' ').join('%20')

    fetch('https://listen-api.listennotes.com/api/v2/search?q=' + query + '&sort_by_date=0&type=podcast&offset=0&len_min=10&published_before=0&published_after=0&language=English&safe_mode=0', {
      method: 'GET',
      headers: {
        "X-ListenAPI-Key": '6df38566398142a3a0c025e711760376'
      },
      body: JSON.stringify()
    })
    .then(r => r.json())
    .then( response => {
      this.setState({results: response.results} )
      // debugger;
      // response.results.map((podcast) => {
      //   return <PodcastCard podcast={podcast} />
      // })
    })
  
  }

 renderResults = () => {
    return this.state.results.map((podcast) => {
      return <PodcastCard podcast={podcast} />
    })
  }

  render() {
    return (
      <div>
        <input type="text" name="search" placeholder="Podcast Search" onChange={this.handleInputChange}/>
        <input onClick={this.searchFetchCall} type="submit" value="Search" />
        <div class='scroll-box'>
          {this.renderResults()}
        </div>
      </div>

    )
  }
}

export default PodcastSearch
