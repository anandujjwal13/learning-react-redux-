import React from 'react';
import './video_list.css';
import VideoListItem from './../video_list_item/video_list_item';
import _ from 'lodash';

const videoList = ({ videos, onVideoSelect }) => {
  const videoList = _.map(videos, (video) => <VideoListItem className="video-list-item" key={video.id} video={video} onVideoSelect={onVideoSelect} />)
  return (<div className="video-list">
    {videoList}
  </div>
  )
}
export default videoList;
