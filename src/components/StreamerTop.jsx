import React from 'react';
import StreamerStatusItem from './StreamerStatusItem';

import SampleWakDoo from '../img/SampleWakDoo.png';

const StreamerTop = () => (
    <div className="streamer-top">
        <div className="streamer-profile">
            <div className="streamer-logo">
                <img src={SampleWakDoo} alt="" />
            </div>
            <div className="streamer-profile-text">
                <div className="streamer-profile-name">
                    <div>
                        우왁굳
                    </div>
                    <div >
                        woowakgood
                    </div>
                </div>
                <div className="streamer-profile-desc">
                    안녕하세요 2008년부터 종합게임 방송을 하고 있는 우왁굳이라고 합니다.이번에 트위치에서 본격적으로 방송을 시작하게 되었습니다. 많은 사랑 부탁드려요~ 앙 트위띠
                </div>
            </div>
        </div>
        <div className="streamer-status">
            <StreamerStatusItem title='Followers' value='369,670' ></StreamerStatusItem>
            <StreamerStatusItem title='Total Hours Streamed' value='6,216' ></StreamerStatusItem>
            <StreamerStatusItem title='Total Views' value='27,073,670' ></StreamerStatusItem>
            <StreamerStatusItem title='Highest Viewer Count' value='30,280' ></StreamerStatusItem>
        </div>
    </div>
);

export default StreamerTop;