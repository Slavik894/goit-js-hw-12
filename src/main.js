import { getImagesByQuery, per_page } from './js/pixabay-api.js';
import {clearGallery, createGallery, showLoader, hideLoader} from './js/render-functions.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const load_more_btn = document.querySelector(".load-more-btn");

let userValue;
let currentPage = 1;
let totalPages = 0;

load_more_btn.classList.remove('is-active');

form.addEventListener('submit', async event => {
  event.preventDefault();
   userValue = form.elements['search-text'].value.trim();
  if (!userValue) { 
    load_more_btn.classList.remove('is-active');
    return;
  }

  currentPage = 1;
  totalPages = 0;
  clearGallery();
  showLoader();

    try{
      const response = await getImagesByQuery(userValue, currentPage)
      const images = response.data.hits;
      const totalHits = response.data.totalHits;
      if (images.length > 0) {
        createGallery(images);

        setTimeout(() => {
        const firstCard = document.querySelector(".gallery-element");
        if (firstCard) {
          const cardHeight = firstCard.getBoundingClientRect().height;
          window.scrollBy({
            top: cardHeight * 2,
            behavior: 'smooth'
          });
        }
      }, 0);


        totalPages = Math.ceil(totalHits / per_page);
        if(currentPage<totalPages){
          load_more_btn.classList.add('is-active');
        }
        else{
          load_more_btn.classList.remove('is-active');
        }
 
      }
      else{
        iziToast.show({
        message: "Sorry, there are no images matching your search query. Please try again!",
        class: 'custom-toast',
      });
      load_more_btn.classList.remove('is-active');
      }
    }
    catch(error){
      iziToast.show({
        message: error,  
        class: 'custom-toast'
      });
      load_more_btn.classList.remove('is-active');
    }  
    finally{
      hideLoader();
    };
   form.elements['search-text'].value = '';
    
});

load_more_btn.addEventListener('click', async ()=>{
  showLoader();
  try{
    currentPage++;
    const response = await getImagesByQuery(userValue, currentPage);
    const images = response.data.hits;

    if(images.length>0){
      createGallery(images);

      setTimeout(() => {
        const firstCard = document.querySelector(".gallery-element");
        if (firstCard) {
          const cardHeight = firstCard.getBoundingClientRect().height;
          window.scrollBy({
            top: cardHeight * 2,
            behavior: 'smooth'
          });
        }
      }, 0);
    }
    if(currentPage< totalPages){
      load_more_btn.classList.add('is-active');
    }
    else{
      iziToast.show({
      message: "We're sorry, but you've reached the end of search results.",
      class: 'custom-toast'
    });
      load_more_btn.classList.remove('is-active');
    }
  }
  catch(error){
    iziToast.show({
      message: "We're sorry, but you've reached the end of search results.",
      class: 'custom-toast'
    });
    load_more_btn.classList.remove('is-active');
  }
  finally{
    hideLoader();
    
  }

});
