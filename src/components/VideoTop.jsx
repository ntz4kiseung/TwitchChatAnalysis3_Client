import React from 'react';
import {connect} from 'react-redux';

const VideoTop = ({videoId}) => (
    <div className="video-top">
        {videoId}
    </div>
)

export default connect(store=>({
    videoId : store.type
}), {})(VideoTop);