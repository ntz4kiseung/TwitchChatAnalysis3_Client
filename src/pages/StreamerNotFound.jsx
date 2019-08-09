import React, {Component} from 'react';
import SubMainLogoBox from '../components/SubMainLogoBox';
import MainContents from '../components/MainContents';
import NotFoundLogo from '../img/NotFoundLogo.png';

class StreamerNotFound extends Component{

    render(){
        const desc = `There is no streamer like '${this.props.match.params.userName}'. Please check streamer Id.`
        return(
            <div className="body-background">
            <SubMainLogoBox 
                text='Streamer Not Found' 
                img={NotFoundLogo} 
                logoImageBoxClass='submain-logo-img'    
            ></SubMainLogoBox>
            <MainContents desc={desc} ></MainContents>
        </div>
        )
    }
};

export default StreamerNotFound;