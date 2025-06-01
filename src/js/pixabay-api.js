import axios from 'axios';

const api_key = "50385354-3e4bea1f358fcf603a5420cc4";
const baseURL = "https://pixabay.com/api/";
axios.defaults.baseURL= baseURL;

export function getImagesByQuery(query){
    return axios.get(`${baseURL}`, {
        params:{
            key: api_key,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true
        }
    })
}