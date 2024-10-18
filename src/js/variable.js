import { createMagniviewHTML } from './createMagniview.js';

let magniviewImagesBox = null;
let body = null;
let magniviewItems = [];
let currentImageIndex = 0;
let currentGalleryItems = [];
export const controls = {}; 

document.addEventListener('DOMContentLoaded', () => {
  body = document.querySelector('body');
  magniviewItems = document.querySelectorAll('[data-magniview]');
  
  createMagniviewHTML();
  cacheControls();
});
export function setMagniviewImagesBox(value) {
  magniviewImagesBox = value;
}

export function getMagniviewImagesBox() {
  return magniviewImagesBox;
}

export function setCurrentGalleryItems(value) {
  currentGalleryItems = value;
}

export function getCurrentGalleryItems() {
  return currentGalleryItems;
}

export function setCurrentImageIndex(value) {
  currentImageIndex = value;
}

export function getCurrentImageIndex() {
  return currentImageIndex;
}

export function getBody() {
  return body;
}

export function getMagniviewItems() {
  return magniviewItems;
}

export function getRotationDegree() {
  return rotationDegree;
}

export function getCurrentScale() {
  return currentScale;
}

export function cacheControls() {
  const magniviewImagesBox = getMagniviewImagesBox();
  const querySelector = selector => magniviewImagesBox.querySelector(selector);

  controls.closeButton = querySelector('.magniview-close');
  controls.magniviewImage = querySelector('.magniview-image');
  controls.boxImage = controls.magniviewImage ? controls.magniviewImage.querySelector('img') : null;
  controls.magniviewVideo = querySelector('.magniview-video');
  controls.video = controls.magniviewVideo ? controls.magniviewVideo.querySelector('video') : null;
  controls.closeArea = querySelector('.magniview-close-area');
  controls.fullScreenButton = querySelector('.magniview-fullscreen');
  controls.zoomInButton = querySelector('.magniview-in-image');
  controls.zoomOutButton = querySelector('.magniview-out-image');
  controls.downloadButton = querySelector('.magniview-download');
  controls.prevButton = querySelector('.magniview-prev-button');
  controls.nextButton = querySelector('.magniview-next-button');
  controls.rotateClockwiseButton = querySelector('.magniview-rotate-clockwise');
  controls.rotateCounterButton = querySelector('.magniview-rotate-counter');
}