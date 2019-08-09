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
            const video = await tca3API.call('get', `video/search/${path}`);
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
export const saveVideo = async (path) => {
    // 저장하고 다 되면 비디오 창으로 보내기
    await tca3API.call('get', `video/save/${path}`);
    window.location.href = `http://localhost:3000/video/${path}`;
    // return async dispatch => {
    //     try{
    //         console.log('세이브 액션 호출');
    //         await tca3API.call('get', `video/save/${path}`);c
    //     }catch(err){
    //         console.log('세이브 액션 에러남');
    //         console.log(err);
    //     }
    // }
};