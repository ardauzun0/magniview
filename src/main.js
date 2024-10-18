// import './main.css';
import { createMagniviewHTML } from './js/createMagniview.js';
import { cacheControls } from './js/variable.js';
import { addEventListeners } from './js/events.js';

export function initializeMagniview() {
   createMagniviewHTML();
   cacheControls();
   addEventListeners();
}

document.addEventListener('DOMContentLoaded', initializeMagniview);