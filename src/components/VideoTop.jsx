import React from 'react';
import {connect} from 'react-redux';

const VideoTop = ({video}) => {
    const data = {video};

    if(data.video.video){
        if(data.video.type==='FoundVideo'){
            var videoId = data.video.video.videoId;
            var url = `https://player.twitch.tv/?autoplay=false&video=${videoId}`;
        }
    }

    return (
    <div className="video-top">
        <iframe title='title' src={url} frameBorder="0" allowFullScreen="true" scrolling="no" height="650px" width="100%"></iframe>
    </div>
)}

export default connect(store=>({
    video : store.video
}), {})(VideoTop);