import { controls, getMagniviewImagesBox, getBody, getMagniviewItems, setCurrentGalleryItems, getCurrentGalleryItems, setCurrentImageIndex, getCurrentImageIndex } from './variable.js';
import { updateBoxImage, getMediaSrc } from './update.js';
import { clearGalleryList } from './close.js';

export function showImageBox(item) {
    const galleryName = item.getAttribute('data-magniview');
    const magniviewImagesBox = getMagniviewImagesBox();
    const body = getBody();

    let currentGalleryItems = galleryName && galleryName !== ''
        ? Array.from(getMagniviewItems()).filter(el => el.getAttribute('data-magniview') === galleryName)
        : [item];

    setCurrentGalleryItems(currentGalleryItems);

    const currentImageIndex = currentGalleryItems.indexOf(item);
    setCurrentImageIndex(currentImageIndex);

    toggleNavigationButtons(currentGalleryItems.length > 1);

    if (galleryName && galleryName !== '' && currentGalleryItems.length > 1) {
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
        const youtubeId = item.getAttribute('data-youtube');
        const thumbnail = document.createElement('div');
        thumbnail.className = 'mini-item';

        // Önce img elementini kontrol et
        const imgElement = item.querySelector('img');
        if (imgElement) {
            thumbnail.innerHTML = `<img src="${imgElement.src}" alt="Thumbnail">`;
        } 
        // Eğer img yoksa ve video varsa
        else {
            const videoElement = item.querySelector('video');
            if (videoElement) {
                // Video için poster attribute'u varsa onu kullan
                if (videoElement.poster) {
                    thumbnail.innerHTML = `<img src="${videoElement.poster}" alt="Video Thumbnail">`;
                } else {
                    // Poster yoksa video elementini klonla ve thumbnail olarak kullan
                    const videoClone = videoElement.cloneNode(true);
                    videoClone.removeAttribute('autoplay');
                    videoClone.removeAttribute('controls');
                    videoClone.style.pointerEvents = 'none';
                    thumbnail.appendChild(videoClone);
                }
            }
        }

        // YouTube ID'sini attribute olarak ekle
        if (youtubeId) {
            thumbnail.setAttribute('data-youtube', youtubeId);
        }

        thumbnail.addEventListener('click', () => {
            setCurrentImageIndex(index);
            updateBoxImage();
            // Tüm mini-itemlardan active class'ını kaldır
            document.querySelectorAll('.mini-item').forEach(item => item.classList.remove('active'));
            // Tıklanan mini-item'a active class'ı ekle
            thumbnail.classList.add('active');
        });

        if (index === getCurrentImageIndex()) {
            thumbnail.classList.add('active');
        }

        galleryList.appendChild(thumbnail);
    });
}

// Toggle navigation buttons visibility
export function toggleNavigationButtons(show) {
    const displayValue = show ? 'flex' : 'none';
    controls.prevButton.style.display = controls.nextButton.style.display = displayValue;
}
