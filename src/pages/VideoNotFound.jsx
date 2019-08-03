import React from 'react';
import SubMainLogoBox from '../components/SubMainLogoBox';
import MainContents from '../components/MainContents';
import NotFoundLogo from '../img/NotFoundLogo.png';

const VideoNotFound = () => (
    <div className="body-background">
        <SubMainLogoBox 
            text='Video Not Found' 
            img={NotFoundLogo} 
            logoImageBoxClass='submain-logo-img'    
        ></SubMainLogoBox>
        <MainContents desc='There is no video. Please check video Id.' ></MainContents>
    </div>
);

export default VideoNotFound;