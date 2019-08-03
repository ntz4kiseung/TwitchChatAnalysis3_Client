import React from 'react';
import Logo2 from '../img/Logo2.png';

const MainLogoBox = () => (
    <div className="main-logo-box">
        <div className="main-logo-img">
            <img src={Logo2} alt="" />
        </div>
        <div className="main-logo-text font-arial font-bold font-italic">
            Twitch Chat Anaylsis
        </div>
    </div>
);

export default MainLogoBox;