import { galleryItems } from "./gallery-items.js";

const galleryPlace = document.querySelector(".gallery");

  const markup = galleryItems
    .map((item) => {
      return `
          <li class="gallery__item">
            <a href="${item.original}"> 
              <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
            </a>
          </li>
          `;
    })
    .join("");


galleryPlace.insertAdjacentHTML("beforeend", markup);

let lightbox = new SimpleLightbox(".gallery a", {
  fadeSpeed: 250,
  doubleTapZoom: 2,
  showCounter: false,
});


