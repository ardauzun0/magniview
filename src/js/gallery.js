import { controls, getMagniviewImagesBox, setCurrentGalleryItems, getMagniviewItems, setCurrentImageIndex, getBody } from './variable.js';
import { updateBoxImage, getMediaSrc } from './update.js';
import { clearGalleryList } from './close.js';

export function showImageBox(item) {
    const galleryName = item.getAttribute('data-magniview');
    const magniviewImagesBox = getMagniviewImagesBox();
    const body = getBody();

    let currentGalleryItems = galleryName
        ? Array.from(getMagniviewItems()).filter(el => el.getAttribute('data-magniview') === galleryName)
        : [item];

    setCurrentGalleryItems(currentGalleryItems);

    const currentImageIndex = currentGalleryItems.indexOf(item);
    setCurrentImageIndex(currentImageIndex);

    toggleNavigationButtons(currentGalleryItems.length > 1);

    if (galleryName && currentGalleryItems.length > 1) {
        populateGalleryList(currentGalleryItems);
    } else {
        clearGalleryList();
    }

    magniviewImagesBox.classList.add('active');
    body.style.overflow = 'hidden';

    updateBoxImage();
}


// Update the gallery list class name and variable
export function populateGalleryList(items) {
    const galleryList = getMagniviewImagesBox().querySelector('.magniview-gallery-list');
    galleryList.innerHTML = '';

    items.forEach((item, index) => {
        const mediaSrc = getMediaSrc(item);
        const isImage = item.querySelector('img') ? true : false;
        const isVideo = item.querySelector('video') ? true : false;

        const thumbnail = document.createElement('div');
        thumbnail.className = 'mini-item';

        if (isImage) {
            thumbnail.innerHTML = `<img src="${mediaSrc}" alt="Thumbnail">`;
        } else if (isVideo) {
            thumbnail.innerHTML = `<video><source src="${mediaSrc}" alt="Video Thumbnail"></video>`;
        }

        thumbnail.addEventListener('click', () => {
            setCurrentImageIndex(index);
            updateBoxImage();
        });

        galleryList.appendChild(thumbnail);
    });
}

// Toggle navigation buttons visibility
export function toggleNavigationButtons(show) {
    const displayValue = show ? 'flex' : 'none';
    controls.prevButton.style.display = controls.nextButton.style.display = displayValue;
}
