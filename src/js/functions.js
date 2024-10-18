import { controls, getCurrentImageIndex, setCurrentImageIndex, getCurrentGalleryItems, getMagniviewImagesBox } from './variable.js';
import { closeImageBox } from './close.js';
import { updateBoxImage } from './update.js';
let rotationDegree = 0;
let currentScale = 1;

// Handle keyboard events
export function handleKeyboardEvents(event) {
    const magniviewImagesBox = getMagniviewImagesBox();
    const currentGalleryItems = getCurrentGalleryItems();

    if (!magniviewImagesBox.classList.contains('active')) return;

    const actions = {
        'ArrowRight': () => { if (currentGalleryItems.length > 1) goToNextImage(); },
        'ArrowLeft': () => { if (currentGalleryItems.length > 1) goToPreviousImage(); },
        'Escape': closeImageBox
    };

    actions[event.key]?.();
}

// Navigate to previous image
export function goToPreviousImage() {
    const currentGalleryItems = getCurrentGalleryItems();
    let currentImageIndex = getCurrentImageIndex();

    currentImageIndex = (currentImageIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;

    setCurrentImageIndex(currentImageIndex);
    updateBoxImage();
}

// Navigate to next image
export function goToNextImage() {
    const currentGalleryItems = getCurrentGalleryItems();
    let currentImageIndex = getCurrentImageIndex();

    currentImageIndex = (currentImageIndex + 1) % currentGalleryItems.length;

    setCurrentImageIndex(currentImageIndex);
    updateBoxImage();
}

// Double click to zoom the image or video
export function handleDoubleClickZoom() {
    currentScale = currentScale === 1 ? 2 : 1;
    
    if (controls.boxImage.style.display === 'flex') {
        controls.boxImage.style.transform = `scale(${currentScale}) rotate(${rotationDegree}deg)`;
    } else if (controls.magniviewVideo.style.display === 'flex') {
        controls.magniviewVideo.querySelector('video').style.transform = `scale(${currentScale}) rotate(${rotationDegree}deg)`;
    }
}

// Zoom in/out the image or video
export function zoomItem(amount) {
    currentScale = Math.min(Math.max(currentScale + amount, 1), 2);

    const imgElement = controls.boxImage;
    const videoElement = controls.magniviewVideo.querySelector('video');

    if (controls.magniviewImage.style.display === 'flex' && imgElement) {
        imgElement.style.transform = `scale(${currentScale}) rotate(${rotationDegree}deg)`;
    } 
    else if (controls.magniviewVideo.style.display === 'flex' && videoElement) {
        videoElement.style.transform = `scale(${currentScale}) rotate(${rotationDegree}deg)`;
    }
}

// Rotate image or video
export function rotateItem(clockwise = true) {
    rotationDegree = (rotationDegree + (clockwise ? 90 : -90)) % 360;

    const imgElement = controls.boxImage;
    const videoElement = controls.magniviewVideo.querySelector('video');

    if (controls.magniviewImage.style.display === 'flex' && imgElement) {
        imgElement.style.transform = `rotate(${rotationDegree}deg) scale(${currentScale})`;
    } 
    else if (controls.magniviewVideo.style.display === 'flex' && videoElement) {
        videoElement.style.transform = `rotate(${rotationDegree}deg) scale(${currentScale})`;
    }
}

// Download image or video
export function downloadFile() {
    let mediaSrc = '';

    if (controls.magniviewImage.style.display === 'flex' && controls.boxImage) {
        mediaSrc = controls.boxImage.src;
    } 
    else if (controls.magniviewVideo.style.display === 'flex' && controls.magniviewVideo.querySelector('source')) {
        mediaSrc = controls.magniviewVideo.querySelector('source').src;
    }

    if (mediaSrc) {
        const fileName = mediaSrc.split('/').pop();
        const link = document.createElement('a');

        link.href = mediaSrc;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
