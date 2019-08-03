import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from '../pages/Main';
import StreamerNotFound from '../pages/StreamerNotFound';
import VideoNotFound from '../pages/VideoNotFound';
import NotAnalyzedVideo from '../pages/NotAnalyzedVideo';
import Streamer from '../pages/Streamer';

const RouteViews = () => (
    <div className="canvas">
        <Switch>
            <Route
                exact
                path='/main'
                render={()=>(
                    <Main></Main>
                )}
            ></Route>
            <Route
                exact
                path='/streamer'
                render={()=>(
                    <Streamer></Streamer>
                )}
            ></Route>
            <Route
                exact
                path='/video'
                render={()=>(<div>video</div>)}
            ></Route>
            <Route
                exact
                path='/streamernotfound'
                render={()=>(
                    <StreamerNotFound></StreamerNotFound>
                )}
            ></Route>
            <Route
                exact
                path='/videonotfound'
                render={()=>(
                    <VideoNotFound></VideoNotFound>
                )}
            ></Route>
            <Route
                exact
                path='/notanalyzedvideo'
                render={()=>(
                    <NotAnalyzedVideo></NotAnalyzedVideo>
                )}
            ></Route>                                                                                
        </Switch>
    </div>
);

export default RouteViews;