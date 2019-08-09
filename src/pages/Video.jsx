import React, {Component} from 'react';
import {getVideo} from '../store/actions';
import {connect} from 'react-redux';
import VideoTop from '../components/VideoTop'
import VideoBottom from '../components/VideoBottom';

class Video extends Component{
    
    async componentWillMount(){
        const {getVideo} = this.props;
        await getVideo(this.props.match.params.videoId);
        var {type, videoId} =this.props;
        if(type==='FoundVideo'){
            console.log('비디오 찾음');
        }else if(type==='NotFoundVideo'){
            window.location.href=`http://localhost:3000/videonotfound/${videoId}`;
        }else if(type==='NotAnalyedVideo'){
            window.location.href=`http://localhost:3000/notanalyzedvideo/${videoId}`;
        }else if(type==='SearchKeyword'){
            console.log('얘는 어떻게 해야됨');
        }
    }

    render(){
        
        return (
            <div className="body-background">
                <div className="body">
                    <VideoTop></VideoTop>
                    <hr />
                    <VideoBottom></VideoBottom>
                </div>
            </div>
        )
    }
}

export default connect((store)=>{
        if(store.video.video){
            var videoId = store.video.video.videoId 
        }
    return ({
        type: store.video.type,
        videoId: videoId
    })
}, {getVideo})(Video);