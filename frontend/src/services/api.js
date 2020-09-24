import axios from 'axios';

const protocol = process.env.REACT_APP_PROTOCOL  || 'http'
const server = process.env.REACT_APP_SERVER || '3.16.40.249'
const port = process.env.REACT_APP_PORT || 3000

const api = axios.create({
    baseURL: `${protocol}://${server}:${port}/`,
})

export const CancelToken = axios.CancelToken

export default api;
