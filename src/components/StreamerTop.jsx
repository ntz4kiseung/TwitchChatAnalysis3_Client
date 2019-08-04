import React from 'react';
import StreamerStatusItem from './StreamerStatusItem';
import {connect} from 'react-redux';

const StreamerTop = ({desc, displayName, followers, logo, name, totalViews}) => (
    <div className="streamer-top">
        <div className="streamer-profile">
            <div className="streamer-logo">
                <img src={logo} alt="" />
            </div>
            <div className="streamer-profile-text">
                <div className="streamer-profile-name">
                    <div>
                        {displayName}
                    </div>
                    <div>
                        &nbsp;&nbsp; {name}
                    </div>
                </div>
                <div className="streamer-profile-desc">
                    {desc}
                </div>
            </div>
        </div>
        <div className="streamer-status">
            <StreamerStatusItem title='Followers' value={followers} ></StreamerStatusItem>
            <StreamerStatusItem title='Total Hours Streamed' value='-,---' ></StreamerStatusItem>
            <StreamerStatusItem title='Total Views' value={totalViews} ></StreamerStatusItem>
            <StreamerStatusItem title='Highest Viewer Count' value='--,---' ></StreamerStatusItem>
        </div>
    </div>
);

export default connect(
    store => ({
        desc: store.streamer.desc,
        displayName: store.streamer.displayName,
        followers: store.streamer.followers,
        logo: store.streamer.logo,
        name: store.streamer.name,
        totalViews: store.streamer.totalViews,
        userId: store.streamer.userId
    }),{}
)(StreamerTop);

// react-redux의 함수 connect(MapStateToProps, MapDispatchToProps)(Component) 에 대한 설명
// 일단 요약하자면 역할은 React 컴포넌트가 Redux에 엮이게 해주는거임
// 맨 처음 변수 MapStateToProps는 redux store가 가지고 있는 state를 react의 컴포넌트의 props에 주는 함수
// 두번째 변수 MapDispatchToProps는 action이 일어났을때 영향받을 dispatch들을 props에 엮어주는 건데
// 이건 더 이해햐아 할듯
// https://medium.com/@ca3rot/%EC%95%84%EB%A7%88-%EC%9D%B4%EA%B2%8C-%EC%A0%9C%EC%9D%BC-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%AC%EC%9A%B8%EA%B1%B8%EC%9A%94-react-redux-%ED%94%8C%EB%A1%9C%EC%9A%B0%EC%9D%98-%EC%9D%B4%ED%95%B4-1585e911a0a6