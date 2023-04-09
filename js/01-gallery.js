import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
let modalIsOpen;

galleryEl.addEventListener('click', onGalleryItemClick);
window.addEventListener('keydown', onGalleryItemClickEsc);
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItemMarkup(item) {
return `
    <li class="gallery__item">
    <a
        class="gallery__link"
        href="${item.original}"
    >
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
    </a>
    </li>
`;
}
function createGalleryMarkup(items) {
return items.map(item => createGalleryItemMarkup(item)).join('');
}
 function onGalleryItemClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    modalIsOpen = true;
    const largeImageUrl = event.target.dataset.source;
    const instance = basicLightbox.create(
        `<img src="${largeImageUrl}" width="800" height="600">`,
    );
    instance.show();
}
function onGalleryItemClickEsc(event) {
if (event.code === 'Escape') {
    if (modalIsOpen) {
        document.querySelector(".basicLightbox--visible").classList.remove("basicLightbox--visible");
        modalIsOpen = false;
    }
    }
}
  