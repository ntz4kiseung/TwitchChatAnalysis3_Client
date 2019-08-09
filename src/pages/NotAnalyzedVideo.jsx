import React, {Component} from 'react';
import SubMainLogoBox from '../components/SubMainLogoBox';
import MainContents from '../components/MainContents';
import SorryLogo from '../img/SorryLogo.png';
import {saveVideo} from '../store/actions';

class NotAnalyzedVideo extends Component{
    componentWillMount(){
        saveVideo(this.props.match.params.videoId);
        console.log('이 비디오 세이브함 : ', this.props.match.params.videoId);
    }
    render(){
        
        const desc = `We found not analyzed video(${this.props.match.params.videoId}).<br>We start to analyze but It takes some minutes to analyze.<br>After analyzing, automatically move video page.`;
        return (
            <div className="body-background">
                <SubMainLogoBox 
                    text='Not Analyzed Video'
                    img={SorryLogo} 
                    logoImageBoxClass='submain-logo-img-sorry'    
                ></SubMainLogoBox>
                <MainContents 
                    desc={desc}
                ></MainContents>
            </div>
            )
        }
};

export default NotAnalyzedVideo;