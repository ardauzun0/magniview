import { getCurrentGalleryItems, getCurrentImageIndex, controls } from './variable.js';
import { showPreloader, hidePreloader } from './preloader.js';

// Update the box with the current media (image or video)
export function updateBoxImage() {
    const currentGalleryItems = getCurrentGalleryItems();
    const currentImageIndex = getCurrentImageIndex();

    if (currentGalleryItems && currentGalleryItems.length > 0) {
        const mediaElement = currentGalleryItems[currentImageIndex].querySelector('img') || currentGalleryItems[currentImageIndex].querySelector('video');
        const mediaSrc = getMediaSrc(mediaElement);  

        showPreloader();
        applyImageTransition(mediaSrc);
        updateActiveThumbnailNew(mediaSrc);
    }
}

// Get Media Source (img or video)
export function getMediaSrc(item) {

    const imgElement = item.tagName && item.tagName.toLowerCase() === 'img' ? item : item.querySelector('img');
    const videoElement = item.tagName && item.tagName.toLowerCase() === 'video' ? item.querySelector('source') : item.querySelector('video source');
    const mediaSrc = imgElement ? imgElement.src : videoElement ? videoElement.src : null;
    return mediaSrc;

}

// Update the active thumbnail based on the currently displayed image or video
export function updateActiveThumbnailNew(currentSrc) {
    const thumbnails = document.querySelectorAll('.mini-item img, .mini-item video');

    thumbnails.forEach((thumbnail) => {
        const parentDiv = thumbnail.parentElement;

        const thumbnailSrc = thumbnail.tagName.toLowerCase() === 'img' ? thumbnail.src : thumbnail.querySelector('source').src;
        const isActive = thumbnailSrc === currentSrc; 

        parentDiv.classList.toggle('active', isActive);
    });
}

// Handle media transition between image and video
export function applyImageTransition(mediaSrc) {
    const currentGalleryItems = getCurrentGalleryItems();
    const currentImageIndex = getCurrentImageIndex();

    if (!currentGalleryItems || currentGalleryItems.length === 0) return;

    showPreloader(); 

    controls.magniviewImage.style.transition = controls.magniviewVideo.style.transition = 'opacity 0.5s, transform 0.5s';
    controls.magniviewImage.style.opacity = controls.magniviewVideo.style.opacity = "0";
    controls.magniviewImage.style.transform = controls.magniviewVideo.style.transform = "scale(0.90)";

    setTimeout(() => {
        const isImage = !!currentGalleryItems[currentImageIndex].querySelector('img');
        const isVideo = !!currentGalleryItems[currentImageIndex].querySelector('video');

        if (isImage) {
            const imgElement = controls.magniviewImage.querySelector('img');
            imgElement.src = mediaSrc;
            controls.magniviewImage.style.display = 'flex';
            controls.magniviewVideo.style.display = 'none';

            imgElement.onload = () => {
                setTimeout(() => {
                    hidePreloader();
                }, 50);
                controls.magniviewImage.style.opacity = "1";
                controls.magniviewImage.style.transform = "scale(1)";
            };

            imgElement.onerror = () => {
                hidePreloader();
            };

        } else if (isVideo) {
            const videoElement = controls.magniviewVideo.querySelector('video');
            const sourceElement = controls.magniviewVideo.querySelector('source');
            sourceElement.src = mediaSrc;
            videoElement.load(); 
            controls.magniviewImage.style.display = 'none';
            controls.magniviewVideo.style.display = 'flex';

            videoElement.loop = true;
            videoElement.play(); 

            videoElement.onloadeddata = () => {
                setTimeout(() => {
                    hidePreloader(); 
                }, 50);
                controls.magniviewVideo.style.opacity = "1";
                controls.magniviewVideo.style.transform = "scale(1)";
            };
            
            videoElement.onerror = () => {
                hidePreloader();
            };
        } else {
            hidePreloader();
        }
    }, 150);
}