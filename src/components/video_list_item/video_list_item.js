import React from 'react';
import './video_list_item.css';

const videoListItem = ({ video, onVideoSelect }) => {
  return (
      <div className="video-item" onClick={() => { onVideoSelect(video) }}>
        <img className="video-item-image" src={video.thumbnails.default.url} alt="youtube" />
        <div className="video-item-title" >{video.title}</div>
      </div>
  );
}
export default videoListItem;
