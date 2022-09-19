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

const instance = basicLightbox.create(
	`
    <img width="800" height="600">
`,
	{
		onShow: instance => {
			window.addEventListener("keydown", onEscape);
		},
		onClose: instance => {
			window.removeEventListener("keydown", onEscape);
		},
	},
);

function onGalleryClick(evt) {
	evt.preventDefault();

	if (evt.target.nodeName !== "IMG") {
		return;
	}

	instance.show();

	const basicLightboxImg = document.querySelector(".basicLightbox__placeholder > img");
	basicLightboxImg.src = evt.target.dataset.source;
	basicLightboxImg.alt = evt.target.alt;
}

function onEscape(evt) {
	if (evt.code === "Escape") {
		instance.close();
	}
}
