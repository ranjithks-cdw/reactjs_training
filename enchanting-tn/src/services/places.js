import axios from 'axios';
const axiosAPI = axios.create({
    baseURL: 'https://nijin-server.vercel.app/api/explorer'
});

export default axiosAPI;