import React,{Component} from 'react';
import SubMainLogoBox from '../components/SubMainLogoBox';
import MainContents from '../components/MainContents';
import NotFoundLogo from '../img/NotFoundLogo.png';

class VideoNotFound extends Component{
    
    render(){
        const desc = `There is no video like '${this.props.match.params.videoId}'. Please check video Id.`
        return (
            <div className="body-background">
                <SubMainLogoBox 
                    text='Video Not Found' 
                    img={NotFoundLogo} 
                    logoImageBoxClass='submain-logo-img'    
                ></SubMainLogoBox>
                <MainContents desc={desc} ></MainContents>
            </div>
        )
    }
};

export default VideoNotFound;