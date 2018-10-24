import React, { Component } from 'react';
import './video_search.css';

class VideoSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: this.props.searchTerm };
  }

  render() {
    return (
      <form className="form" onSubmit={(event) => { event.preventDefault(); this.props.onSearchTermChange(this.state.searchTerm)}}>
        <input className="search-bar" onChange={(event) => this.setState({ searchTerm: event.target.value })} />
        <input type="submit" value="Search" className="submit-button"/>
      </form>
    )
  }

}
export default VideoSearch;

