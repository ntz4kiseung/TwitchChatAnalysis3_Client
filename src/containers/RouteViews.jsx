import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from '../pages/Main';
import StreamerNotFound from '../pages/StreamerNotFound';
import VideoNotFound from '../pages/VideoNotFound';
import NotAnalyzedVideo from '../pages/NotAnalyzedVideo';
import Streamer from '../pages/Streamer';
import Video from '../pages/Video';

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
                path='/streamer/:userName'
                render={(props)=>(
                    <Streamer {...props}></Streamer>
                )}
            ></Route>
            <Route
                exact
                path='/video/:videoId'
                render={(props)=>(
                    <Video {...props}></Video>
                )}
            ></Route>
            <Route
                exact
                path='/streamernotfound/:userName'
                render={(props)=>(
                    <StreamerNotFound {...props}></StreamerNotFound>
                )}
            ></Route>
            <Route
                exact
                path='/videonotfound/:videoId'
                render={(props)=>(
                    <VideoNotFound {...props}></VideoNotFound>
                )}
            ></Route>
            <Route
                exact
                path='/notanalyzedvideo/:videoId'
                render={(props)=>(
                    <NotAnalyzedVideo {...props}></NotAnalyzedVideo>
                )}
            ></Route>                                                                                
        </Switch>
    </div>
);

export default RouteViews;