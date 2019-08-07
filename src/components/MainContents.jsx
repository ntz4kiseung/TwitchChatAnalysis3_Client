import React from 'react';
import tca3Search from '../js/tca3';

const MainContents = ({desc}) => (
    <div className="main-contents">
        <div className="main-contents-text font-arial font-italic">
            {desc.split('<br>').map( line => {
            return (<span>{line}<br/></span>)
            })}
        </div>
        <div className="main-contents-input">
            <div className="input-group input-group-lg">
                <input type="text" name="searchInput"  className="form-control" placeholder="Streamer Id or Video Id" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-purple" onClick={tca3Search} type="button" id="button-addon2">Search</button>
                </div>
            </div>
        </div>
    </div>
);

export default MainContents;

