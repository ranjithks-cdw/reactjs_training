import axios from 'axios';

export const axiosAPI = axios.create({
    baseURL: 'https://jsonmockserver.vercel.app/api/shopping/furniture'
});

export const retrieveCategoryData = async() => {
    try {
        const data = await axiosAPI.get('/categories');
        return data.data;
    } catch (error) {
        return [];
    }
};
