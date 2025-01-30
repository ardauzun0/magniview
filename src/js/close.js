// Close the media box and reset view
import { getMagniviewImagesBox, getBody, controls } from './variable.js';
import { hidePreloader } from './preloader.js';

export function closeImageBox() {
    const magniviewImagesBox = getMagniviewImagesBox();
    const body = getBody();

    setTimeout(() => {
        magniviewImagesBox.classList.remove('active');
        body.style.overflow = 'auto';

        // Video elementini durdur ve sıfırla
        const videoElement = controls.magniviewVideo.querySelector('video');
        if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0;
            videoElement.loop = false;
        }

        // YouTube iframe'i temizle
        if (controls.magniviewYoutube) {
            controls.magniviewYoutube.innerHTML = '';
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
    controls.magniviewYoutube.style.display = 'none';

    clearGalleryList();
    hidePreloader();
}

// Clear gallery list
export function clearGalleryList() {
    const magniviewImagesBox = getMagniviewImagesBox();
    const galleryList = magniviewImagesBox.querySelector('.magniview-gallery-list');
    galleryList.innerHTML = '';
}