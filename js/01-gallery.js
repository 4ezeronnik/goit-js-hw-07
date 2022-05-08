import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);


function createGalleryMarkup(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
  }).join('');
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();

  const isGalleryImage = evt.target.classList.contains('gallery__image');
  if (!isGalleryImage) {
    return
  }
  console.log(evt.target);

  const galleryEl = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${galleryEl}" width="800" height="600">
`)

  instance.show();
 
}











