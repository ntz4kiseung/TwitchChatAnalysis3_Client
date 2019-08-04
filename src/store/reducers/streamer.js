import {SET_STREAMER} from '../actionTypes';

export const streamer = (state={}, action) => {
    switch(action.type){
        case SET_STREAMER:
            return action.streamer;
        default:
            return state;
    }
};