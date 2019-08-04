import tca3API from '../../services/api';

import {SET_STREAMER} from '../actionTypes';

export const setStreamer = (streamer) => ({
    type: SET_STREAMER,
    streamer
});

export const getStreamer = (userName) => {
    console.log('call getStreamer action, get ', userName);
    return async dispatch => {
        try{
            const streamer = await tca3API.call('get', `streamer/${userName}`, {});
            dispatch(setStreamer(streamer));
        }catch(err){
            console.log(err);
        }
    };
};