import axios from 'axios';

export const axiosAPI = axios.create({
    baseURL: 'https://jsonmockserver.vercel.app/api/shopping/furniture'
});
