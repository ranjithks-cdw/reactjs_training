import axios from 'axios';
export const axiosAPI = {
    places: axios.create({
        baseURL: 'https://nijin-server.vercel.app/api/explorer'
    }),
    temperature: axios.create({
        baseURL: `https://api.weatherapi.com/v1/current.json?key=5d18d19ccebb4f13abe133700231804&q=`
    })
};
