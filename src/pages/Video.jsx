import React, {Component} from 'react';
import {getVideo} from '../store/actions';
import {connect} from 'react-redux';
import VideoTop from '../components/VideoTop'
import VideoBottom from '../components/VideoBottom';

class Video extends Component{
    
    async componentWillMount(){
        const {getVideo} = this.props;
        getVideo(this.props.match.params.videoId);
        var {type} =this.props;
        if(type==='FoundVideo'){
            console.log('비디오 찾음')
        }else if(type==='NotFoundVideo'){
            console.log('비디오 없으니 페이지 이동');
        }else if(type==='NotAnalyedVideo'){
            console.log('비디오 분석 안됨 페이지 이동');
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

export default connect(store=>({
    type: store.video.type
}), {getVideo})(Video);