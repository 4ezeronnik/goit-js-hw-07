import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(createGalleryMarkup(galleryItems));

function createGalleryMarkup(gallery) {
    const markup = gallery.map(gallery => {
        
    })
    `
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>
`
}




console.log(galleryItems);

