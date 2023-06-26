import { galleryItems } from "./gallery-items.js";

const galleryPlace = document.querySelector(".gallery");

  const markup = galleryItems
    .map((item) => {
      return `
          <li class="gallery__item">
            <figure>
              <a class="gallery__link" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" title="${item.description}"/>
              </a>
              <figcapture class="gallery__item--description">${item.description}</figcapture>
            </figure>
          </li>
      `;
    })
    .join("");


    galleryPlace.insertAdjacentHTML("beforeend", markup);
    
    let lightbox = new SimpleLightbox(".gallery a", {
      fadeSpeed: 250,
      doubleTapZoom: 2,
      showCounter: false,
      captions: true,
    });
    

