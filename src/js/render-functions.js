// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");


const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images){
   
    const galleryElement = images.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads})=>
    `<li class="gallery-element">
    <a href="${largeImageURL}">
    <img class="gallery-element-img" src=${webformatURL} alt=${tags}>
    </a>
    <div class="element-description">
    <ul class="description-list">
        <li>
        <p>Likes</p>${likes}
        </li>
        <li>
        <p>Views</p>${views}
        </li>
        <li>
        <p>Comments</p>${comments}
        </li>
        <li>
        <p>Downloads</p>${downloads}
        </li>
    </ul>
    
    </div>
    
    </li>`
    
    );
    gallery.insertAdjacentHTML("beforeend", galleryElement.join(''));
   lightbox.refresh();
};

export function clearGallery(){
    gallery.innerHTML = '';
};

export function showLoader(){
    loader.classList.add('is-active');

};

export function hideLoader(){
     loader.classList.remove('is-active');
}