import {combineReducers} from 'redux';

import {streamer} from './streamer';
import {video } from './video';

export default combineReducers({
    streamer, 
    video
});