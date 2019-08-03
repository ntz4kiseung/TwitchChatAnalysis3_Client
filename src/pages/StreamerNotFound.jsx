import React from 'react';
import SubMainLogoBox from '../components/SubMainLogoBox';
import MainContents from '../components/MainContents';
import NotFoundLogo from '../img/NotFoundLogo.png';

const StreamerNotFound = () => (
    <div className="body-background">
        <SubMainLogoBox 
            text='Streamer Not Found' 
            img={NotFoundLogo} 
            logoImageBoxClass='submain-logo-img'    
        ></SubMainLogoBox>
        <MainContents desc='There is no streamer. Please check streamer Id.' ></MainContents>
    </div>
);

export default StreamerNotFound;