import React, {Component} from 'react';
import StreamerTop from '../components/StreamerTop';
import StreamerBottom from '../components/StreamerBottom';
import {connect} from 'react-redux';
import {getStreamer} from '../store/actions';

// match는 예약어인가? 다른거 쓰니까 오류나네
class Streamer extends Component{
    componentWillMount(){
        console.log('전');
        console.log('userName: ', this.props.match.params.userName);
        const {getStreamer} = this.props;
        getStreamer(this.props.match.params.userName);
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

export default connect(store=>({}), {getStreamer})(Streamer);