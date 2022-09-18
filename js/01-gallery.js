import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const makeGalleryItemMarkup = ({ original, description, preview }) => {
	return `
  <div class="gallery__item">
		<a class="gallery__link" href="${original}">
			<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
		</a>
	</div>`;
};

const makeGalleryItems = galleryItems.map(item => makeGalleryItemMarkup(item)).join("");

const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("afterbegin", makeGalleryItems);

function onGalleryLinkClick(evt) {
	evt.preventDefault();
}
