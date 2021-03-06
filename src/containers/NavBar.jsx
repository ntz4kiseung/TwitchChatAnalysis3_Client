import React from 'react';
import Logo1 from '../img/Logo1.png';
import {Link} from 'react-router-dom';
import tca3Search from '../js/tca3';

const NavBar = () => (
    <div className="navbar">
        <Link className="onClickLink" to="/main">
            <div className="navbar-logo-box"  onClick='loacation.href="/main'>
                <div className="navbar-logo-img">
                    <img src={Logo1} alt="" />
                </div>
                <div className="navbar-logo-text font-arial font-bold font-italic">
                    Twitch Chat Analysis
                </div>
            </div>
        </Link>
        <div className="navbar-search">
            <form className="input-group">
                <input type="text" name="searchInput" className="form-control" placeholder="Streamer Id or Video Id" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-light" type="button" id="button-addon2" onClick={tca3Search.bind(this)}>Search</button>
                </div>
            </form>
        </div>
    </div>
)

export default NavBar;