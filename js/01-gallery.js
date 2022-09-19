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

galleryEl.addEventListener("click", onGalleryClick);

const instance = basicLightbox.create(`<img class="basicLightbox__img">`, {
	onShow: instance => {
		window.addEventListener("keydown", onEscape);
	},
	onClose: instance => {
		window.removeEventListener("keydown", onEscape);
	},
});

function onGalleryClick(evt) {
	evt.preventDefault();

	if (evt.target.nodeName !== "IMG") {
		return;
	}

	getBasicLightbox(evt.target);
}

function getBasicLightbox(img) {
	instance.show();

	const basicLightboxImg = document.querySelector(".basicLightbox__img");
	basicLightboxImg.src = img.dataset.source;
	basicLightboxImg.alt = img.alt;
}

function onEscape(evt) {
	if (evt.code === "Escape") {
		instance.close();
	}
}
