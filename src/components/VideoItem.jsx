import React from 'react';
import {Link} from 'react-router-dom';

const VideoItem = ({thumbnail, title, videoId}) => {
    var video = {videoId}.videoId;
    if(video[0]==='v'){
        video = video.slice(1);
    }
    const link = `../video/${video}`;
    return(
    <Link className="onClickLink" to={link} >
        <div className="video-item">
            <div className="video-item-img">
                <img src={thumbnail} alt=""/>
            </div>
            <div className="video-item-title">{title}</div>
        </div>
    </Link>
)};

export default VideoItem;