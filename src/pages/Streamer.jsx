import React from 'react';
import StreamerTop from '../components/StreamerTop';
import StreamerBottom from '../components/StreamerBottom';

const Streamer = () => (
    <div className="body-background">
        <div className="body">
            <StreamerTop></StreamerTop>
            <hr />
            <StreamerBottom></StreamerBottom>
        </div>
    </div>
);

export default Streamer;