import { archItems, houseItems, interiorItems, kitchenItems } from "./gallery-items.js";

const galleryArch = document.querySelector("#arch");
const galleryHouse = document.querySelector("#house");
const galleryInt = document.querySelector("#int");
const galleryKitchen = document.querySelector("#kitchen");


const markupElement = (preview, original, description) => {
  return `
    <li class="item__card">
      <a href="${original}">
        <img src="${preview}" alt="${description}" class="item__image">
      </a>
    </li>
  `;
}

const archMarkup = archItems
  .map((item) => {
    return markupElement(item.preview, item.original, item.description)
  })
  .join("");

const houseMarkup = houseItems
  .map((item) => {
    return markupElement(item.preview, item.original, item.description);
  })
  .join("");

const intMarkup = interiorItems
  .map((item) => {
    return markupElement(item.preview, item.original, item.description);
  })
  .join("");

const kitchenMarkup = kitchenItems
  .map((item) => {
    return markupElement(item.preview, item.original, item.description);
  })
  .join("");

galleryArch.insertAdjacentHTML("beforeend", archMarkup);
galleryHouse.insertAdjacentHTML("beforeend", houseMarkup);
galleryInt.insertAdjacentHTML("beforeend", intMarkup);
galleryKitchen.insertAdjacentHTML("beforeend", kitchenMarkup);

let lightbox = new SimpleLightbox(".item__card a", {
  fadeSpeed: 250,
  doubleTapZoom: 2,
  showCounter: false,
});

// =====================================================================
// let lightbox = new SimpleLightbox(".gallery a", {
//   fadeSpeed: 250,
//   doubleTapZoom: 2,
//   showCounter: false,
// });

// return `
// <li class="gallery__item">
//     <ul class="item__list">
//       <li class="item__card">
//         <img src="${item[0].preview}" alt="${item[0].description}" class="item__image">
//       </li>
//       <li class="item__card">
//         <img src="${item[1].preview}" alt="${item[1].description}" class="item__image">
//       </li>
//       <li class="item__card">
//         <img src="${item[2].preview}" alt="${item[2].description}" class="item__image">
//       </li>
//       <li class="item__card">
//         <img src="${item[3].preview}" alt="${item[3].description}" class="item__image">
//       </li>
//     </ul>
// </li>
// `;