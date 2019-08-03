import React from 'react';
import VideoItem from './VideoItem';

const StreamerBottom = () => (
    <div className="streamer-bottom">
        <div className="streamer-bottom-text">
            Analyzed Video
        </div>
        <div className="streamer-bottom-videoList">

            <VideoItem></VideoItem>
            <VideoItem></VideoItem>
            <VideoItem></VideoItem>
            <VideoItem></VideoItem>
            <VideoItem></VideoItem>
            <VideoItem></VideoItem>

        </div>
    </div>
);

export default StreamerBottom;