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

function onGalleryClick(evt) {
	if (evt.target.nodeName !== "IMG") {
		return;
	}
	evt.preventDefault();

	const urlOriginalImg = evt.target.dataset.source;

	onBasicLightbox(urlOriginalImg);
}

function onBasicLightbox(url) {
	const instance = basicLightbox.create(
		`
    <img src="${url}" width="800" height="600">
`,
		{
			onShow: instance => {
				window.addEventListener("keydown", onEscape);
			},
		},
	);

	instance.show();
}

function onEscape(evt) {
	if (evt.code === "Escape") {
		const instance = document.querySelector(".basicLightbox");
		instance.remove();
		window.removeEventListener("keydown", onEscape);
	}
}
