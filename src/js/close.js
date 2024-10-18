// Close the media box and reset view
import { getMagniviewImagesBox, getBody, controls } from './variable.js';
import { hidePreloader } from './preloader.js';

export function closeImageBox() {
    const magniviewImagesBox = getMagniviewImagesBox();
    const body = getBody();

    setTimeout(() => {

        magniviewImagesBox.classList.remove('active');
        body.style.overflow = 'auto';

        const videoElement = controls.magniviewVideo.querySelector('video');
        if (videoElement.style.display === 'flex') {
            videoElement.pause();
            videoElement.currentTime = 0;
        }
        resetView();

        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    }, 300);
}

// Reset view to initial state
export function resetView() {
    controls.boxImage.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

    controls.magniviewImage.style.display = 'flex';
    controls.magniviewVideo.style.display = 'none';

    clearGalleryList();
    hidePreloader();
}

// Clear gallery list
export function clearGalleryList() {
    const magniviewImagesBox = getMagniviewImagesBox();
    const galleryList = magniviewImagesBox.querySelector('.magniview-gallery-list');
    galleryList.innerHTML = '';
}