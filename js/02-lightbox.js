import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
let lightbox;


galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);


function createGalleryMarkup(gallery){
const markup = gallery.map(({preview, original, description}) => {
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}).join('')
return markup;
};

  lightbox = new SimpleLightbox('.gallery a', {captions: true, captionsData: 'alt', 
  captionPosition:'bottom', captionDelay: 250, showCounter: false});
  lightbox.on('closed.simplelightbox', evt => lightbox.destroy(evt));