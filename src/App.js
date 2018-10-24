import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import VideoList from './components/video_list/video_list';
import VideoSearch from './components/video_search/video_search';
import VideoEmbed from './components/video_embed/video_embed';
import search from 'youtube-search';
const API_KEY = `AIzaSyAEkKq4hUhUOqoBhSF-lgP1KAVm2nX08O0`;
const options = {
  maxResults: 10,
  key: API_KEY
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      searchTerm: ' ',
      selectedVideo: null
    }
    this.onVideoSelect()
  }

  onVideoSelect(searchTerm) {
    search(searchTerm, options, (err, videos) => {
      if (err) return console.log(err);
      videos = _.filter(videos, video => (video.kind === 'youtube#video'))
      this.setState({ videos, selectedVideo: videos[0], searchTerm })
    });
  }

  render() {
    if (!this.state.selectedVideo) {
      return <div> Loading ... </div>
    }
    return (
      <div className="app">
        <div className="search-bar-container">
          <VideoSearch searchTerm={this.state.searchTerm} onSearchTermChange={(searchTerm) => { this.onVideoSelect(searchTerm) }} />
        </div>
        <div className="app-body">
          <VideoEmbed video={this.state.selectedVideo} />
          <VideoList videos={this.state.videos} onVideoSelect={(selectedVideo) => { this.setState({ selectedVideo }) }} />
        </div>
      </div>
    )
  }
}

export default App;
