import React from 'react';
import videoSample from '../img/videoSample.png';

const VideoItem = () => (
    <div className="video-item">
        <div className="video-item-img">
            <img src={videoSample} alt=""/>
        </div>
        <div className="video-item-title">제목 샘플 텍스트입니다.</div>
    </div>
);

export default VideoItem;