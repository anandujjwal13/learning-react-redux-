import React from 'react';
import './video_embed.css';

const videoEmbed = ({ video }) => {
  let videoUrl = `https://www.youtube.com/embed/${video.id}`;
  return (
    <div className="video-embed">
     <iframe className="i-frame" title={video.title} src={videoUrl} />
      <div className="selected-video-title">{video.title}</div>
      <div className="selected-video-description">{video.description}</div>
    </div>);
}
export default videoEmbed;
