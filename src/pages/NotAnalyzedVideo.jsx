import React from 'react';
import SubMainLogoBox from '../components/SubMainLogoBox';
import MainContents from '../components/MainContents';
import SorryLogo from '../img/SorryLogo.png';

const NotAnalyzedVideo = () => (
    <div className="body-background">
        <SubMainLogoBox 
            text='Not Analyzed Video' 
            img={SorryLogo} 
            logoImageBoxClass='submain-logo-img-sorry'    
        ></SubMainLogoBox>
        <MainContents 
            desc='We found not analyzed video.<br>
            We start to analyze but It takes some minutes to analyze.<br>
            Please search again after some minutes.' 
        ></MainContents>
    </div>
);

export default NotAnalyzedVideo;