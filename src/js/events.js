import { controls, getMagniviewItems, getMagniviewImagesBox } from './variable.js';
import { closeImageBox } from './close.js';
import { handleKeyboardEvents, handleDoubleClickZoom, downloadFile, goToPreviousImage, goToNextImage, zoomItem, rotateItem } from './functions.js';
import { showImageBox } from './gallery.js';

export function addEventListeners() {
   const magniviewItems = getMagniviewItems();

   magniviewItems.forEach(item => {
      item.addEventListener('click', () => {
         showImageBox(item);
      });
   });

   controls.closeButton?.addEventListener('click', closeImageBox);
   controls.closeArea?.addEventListener('click', closeImageBox);
   
   controls.fullScreenButton?.addEventListener('click', () => {
      const magniviewImagesBox = getMagniviewImagesBox();
      document.fullscreenElement ? document.exitFullscreen() : magniviewImagesBox.requestFullscreen();
   });

   controls.zoomInButton?.addEventListener('click', () => zoomItem(0.1));
   controls.zoomOutButton?.addEventListener('click', () => zoomItem(-0.1));
   controls.downloadButton?.addEventListener('click', downloadFile);
   controls.prevButton?.addEventListener('click', goToPreviousImage);
   controls.nextButton?.addEventListener('click', goToNextImage);
   controls.rotateClockwiseButton?.addEventListener('click', () => rotateItem(true));
   controls.rotateCounterButton?.addEventListener('click', () => rotateItem(false));
   document.addEventListener('keydown', handleKeyboardEvents);
   controls.boxImage.addEventListener('dblclick', handleDoubleClickZoom);
}
