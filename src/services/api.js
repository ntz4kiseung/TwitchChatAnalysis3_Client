import axios from 'axios';

const host = 'http://localhost:4000';

export const call = async(method, path, data) => {
    console.log('call api');
    const response = await axios[method](`${host}/${path}`, data);
    console.log('api response.data : ', response.data);
    return response.data;
};

export default {call};