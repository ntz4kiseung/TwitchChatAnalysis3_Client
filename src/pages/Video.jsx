import React, {Component} from 'react';
import {getVideo} from '../store/actions';
import {connect} from 'react-redux';
import VideoTop from '../components/VideoTop'

class Video extends Component{
    
    async componentWillMount(){
        this.setState({ready : 'already..'});
        console.log('will mount');
        const {getVideo} = this.props;
        await getVideo(this.props.match.params.videoId).then((result) => (this.setState({ready : 'on'})));
    }

    

    render(){
        const {videoId} = this.props;
        return (
            <div className="body-background">
                <div className="body">
                    <VideoTop></VideoTop>
                    {videoId}
                    <hr />

                    <div className="video-bottom">
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(store=>({}), {getVideo})(Video);