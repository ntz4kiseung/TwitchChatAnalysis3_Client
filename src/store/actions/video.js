import tca3API from '../../services/api';

import {SET_VIDEO} from '../actionTypes';

export const setVideo = video => ({
    type: SET_VIDEO,
    video
});

// path = video/search/:videoId
export const getVideo = (path) => {
    return async dispatch => {
        try{
            const video = await tca3API.call('get', path);
            dispatch(setVideo(video));
        }catch(err){
            console.log(err);
        }
    }
};

// path = video/search/:videoId/:keyowrd
export const getVideoWithKeyword = (path) => {
    return async dispatch => {
        try{
            const video = await tca3API.call('get', path);
            dispatch(setVideo(video));
        }catch(err){
            console.log(err);
        }
    }
};

// path = video/save/:videoId
export const saveVideo = (path) => {
    return async dispatch => {
        try{
            await tca3API.call('get', path);
        }catch(err){
            console.log(err);
        }
    }
};