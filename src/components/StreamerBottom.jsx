import React from 'react';
import VideoItem from './VideoItem';
import {connect} from 'react-redux';
import store from '../store';

const StreamerBottom = ({videoThumbnails}) => {
    if(videoThumbnails!=null){
        if(videoThumbnails.length==0){
            var thumnnailList = '분석된 영상이 없습니다.'
        }else{
            var thumnnailList = videoThumbnails.map(thumbnail => 
                <VideoItem 
                    thumbnail={thumbnail.thumbnail} 
                    title={thumbnail.title} 
                    videoId={thumbnail.videoId} 
                    key={thumbnail._id}
                ></VideoItem>
            )
        }
    }

    return(
        <div className="streamer-bottom">
            <div className="streamer-bottom-text">
                Analyzed Video
            </div>
            <div className="streamer-bottom-videoList">
                {thumnnailList}
            </div>
        </div>
    )
}

export default connect(
    store=>({
        videoThumbnails: store.streamer.videoThumbnails
    }),{}
)(StreamerBottom);