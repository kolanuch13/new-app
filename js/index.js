import { galleryItems } from "./gallery-items.js";

const galleryPlace = document.querySelector(".gallery");

const markup = galleryItems
  .map((item) => {
    return `
      <li class="gallery__item">
        <figure>
          <a class="gallery__link" href="${item.jpgFull}">
            <div class="blurred-img" style="background-image: url(${item.small})">
              <picture class="gallery__image">
                <source srcset="${item.webp} 1x, ${item.webpFull} 2x" type="image/webp" />
                <source srcset="${item.jpg} 1x, ${item.jpgFull} 2x" type="image/jpeg" />
                <img class="gallery__image" src="${item.jpg}" title="${item.description}" loading="laizy"/>
              </picture>
            </div>
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

