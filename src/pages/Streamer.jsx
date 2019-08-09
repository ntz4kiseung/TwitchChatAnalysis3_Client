import React, {Component} from 'react';
import StreamerTop from '../components/StreamerTop';
import StreamerBottom from '../components/StreamerBottom';
import {connect} from 'react-redux';
import {getStreamer} from '../store/actions';

// match는 예약어인가? 다른거 쓰니까 오류나네
class Streamer extends Component{
    async componentWillMount(){
        const {getStreamer} = this.props;
        await getStreamer(this.props.match.params.userName);

        const {name, userName} = this.props;
        if(name==='StreamerNotFound'){
            window.location.href=`http://localhost:3000/streamernotfound/${this.props.match.params.userName}`;
        } 
    }
    
    render(){
        
        console.log('this.props :', this.props);
        return (
            <div className="body-background">
                <div className="body">
                    <StreamerTop></StreamerTop>
                    <hr />
                    <StreamerBottom></StreamerBottom>
                </div>
            </div>
        )      
    }
}

export default connect(store=>{
    return {
        name: store.streamer.name
    }
}, {getStreamer})(Streamer);