import axios from 'axios';

const server = process.env.SERVER || 'http://192.168.99.100:3000/'

const api = axios.create({
    baseURL: server,
})

export const CancelToken = axios.CancelToken

export default api;