import {SET_VIDEO} from '../actionTypes';

export const video = (state={}, action) => {
    switch(action.type){
        case SET_VIDEO:
            return action.video;
        default:
            return state;
    }
}