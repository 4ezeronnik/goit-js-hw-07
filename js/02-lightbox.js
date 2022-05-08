import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// galleryContainer.addEventListener('click', onGalleryContainerClick);


function createGalleryMarkup(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
  }).join('');
}
const ligthBox = new SimpleLightbox('.gallery a', { /* options */ });
