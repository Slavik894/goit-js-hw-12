import { getImagesByQuery } from './js/pixabay-api.js';
import {clearGallery, createGallery, showLoader, hideLoader} from './js/render-functions.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = form.elements['search-text'].value.trim();
  if (!query) return;

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(response => {
      const images = response.data.hits;
      if (images.length > 0) {
        createGallery(images);
      }
      else{
        iziToast.show({
        message: "Sorry, there are no images matching your search query. Please try again!",
        class: 'custom-toast',
      })
      }
    })
    .catch(error => iziToast.show({message: error,  class: 'custom-toast'}))
    .finally(()=>{
      hideLoader();
    });
   form.elements['search-text'].value = '';
    
  
});
