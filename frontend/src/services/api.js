import axios from 'axios';

const SERVER_URI = process.env.REACT_APP_SERVER_URI

const api = axios.create({
    baseURL: SERVER_URI,
})

export const CancelToken = axios.CancelToken

export default api;
