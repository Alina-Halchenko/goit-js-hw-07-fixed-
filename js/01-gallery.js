import { galleryItems } from './gallery-items.js';


// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
let instance;

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(gallery){
const markup = gallery.map(({preview, original, description}) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}).join('')
return markup;
}

galleryContainer.addEventListener('click', onOpenModal);

function onOpenModal(evt){
  if(evt.target.classList.contains('gallery')){
    return
  };

  evt.preventDefault();

  instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" height="600">
`)
  instance.show();

  window.addEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(evt){
  
  if(evt.code === 'Escape'){
    window.removeEventListener('keydown', onEscKeyPress);
    instance.close();
  }
}