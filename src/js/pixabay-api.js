import axios from 'axios';

const api_key = "50385354-3e4bea1f358fcf603a5420cc4";
const baseURL = "https://pixabay.com/api/";
export const per_page = 15;



axios.defaults.baseURL= baseURL;

export async function getImagesByQuery(query, page){
    const response = await axios.get(`${baseURL}`, {
        params:{
            key: api_key,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: page,
            per_page: per_page

        }
    });
    return{
        images: response.data.hits,
        totalHits: response.data.totalHits
    };
};