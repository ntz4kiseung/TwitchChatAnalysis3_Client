import React from 'react';
import MainLogoBox from '../components/MainLogoBox';
import MainContents from '../components/MainContents';

const Main = () => (
    <div className="body-background">
        <MainLogoBox></MainLogoBox>
        <MainContents desc='Search Streamer Id or Video Id'></MainContents>
    </div>
);

export default Main;