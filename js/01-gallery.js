import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const makeGalleryItemMarkup = ({ original, description }) => {
	return `
  <div class="gallery__item">
		<a class="gallery__link" href="${original}">
			<img class="gallery__image" src="small-image.jpg" data-source="${original}" alt="${description}" />
		</a>
	</div>`;
};

const makeGalleryItems = galleryItems.map(makeGalleryItemMarkup).join("");

const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("afterbegin", makeGalleryItems);
