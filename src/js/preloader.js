import { controls } from './variable.js';  

// Show preloader
export function showPreloader() {
    hidePreloader();

    const preloader = document.createElement('div');
    preloader.className = 'magniview-preloader';
    preloader.innerHTML = `<div class="spinner"></div>`;

    controls.magniviewImage.style.display === 'flex'
        ? controls.magniviewImage.appendChild(preloader)
        : controls.magniviewVideo.appendChild(preloader);
}

// Hide preloader
export function hidePreloader() {
    const preloader = document.querySelector('.magniview-preloader');
    if (preloader) {
        preloader.remove();  
    } 
}
