import { setMagniviewImagesBox } from './variable.js';

export function createMagniviewHTML() {
  const magniviewImagesBox = document.createElement('div');
  magniviewImagesBox.className = 'magniview';
  magniviewImagesBox.innerHTML = `
      <div class="magniview-close-area"></div>
      <div class="magniview-tools-field">
          ${createButton('magniview-fullscreen', toggleFullScreen())}
          <div class="magniview-rotate-field">
              ${createButton('magniview-rotate-counter', rotateSVG(false))}
              ${createButton('magniview-rotate-clockwise', rotateSVG(true))}
          </div>
          ${createButton('magniview-in-image', zoomInSVG())}
          ${createButton('magniview-out-image', zoomOutSVG())}
          ${createButton('magniview-download', downloadImageSVG())}
          ${createButton('magniview-close', closeSVG())}
      </div>
      ${createArrowButton('magniview-prev-button', showPreviousImage())}
      ${createArrowButton('magniview-next-button', showNextImage())}
      <div class="magniview-image"><img src="" alt=""></div>
      <div class="magniview-video"><video><source src=""></video></div>
      <div class="magniview-youtube"></div>
      <div class="magniview-gallery-list"></div>
  `;
  document.body.appendChild(magniviewImagesBox);

  setMagniviewImagesBox(magniviewImagesBox);
}

function toggleFullScreen() {
  return `
    <svg fill="#000" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
     <path d="M0,0v512h512V0H0z M477.867,477.867H34.133V34.133h443.733V477.867z" />
     <polygon points="126.533,102.4 199.111,102.4 199.111,68.267 68.267,68.267 68.267,199.111 102.4,199.111 102.4,126.538 198.422,222.558 222.556,198.423" />
     <polygon points="222.557,313.581 198.422,289.445 102.4,385.467 102.4,312.889 68.267,312.889 68.267,443.733 199.111,443.733 199.111,409.6 126.538,409.6" />
     <polygon points="409.6,312.889 409.6,385.467 313.578,289.444 289.444,313.578 385.462,409.6 312.889,409.6 312.889,443.733 443.733,443.733 443.733,312.889" />
     <polygon points="312.889,68.267 312.889,102.4 385.467,102.4 289.444,198.423 313.578,222.558 409.6,126.538 409.6,199.111 443.733,199.111 443.733,68.267" />
 </svg>
    `;
}

function zoomInSVG() {
  return `
      <svg fill="#000" height="18px" width="18px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
         <path d="M505.508,475.582l-163.48-163.48c26.405-32.888,42.214-74.647,42.214-120.102c0-106.033-85.967-192-192-192 s-192,85.967-192,192s85.967,192,192,192c45.207,0,86.759-15.635,119.563-41.78l163.532,163.532 c8.331,8.331,21.839,8.331,30.17,0C513.84,497.42,513.84,483.913,505.508,475.582z M42.91,192 c0-82.469,66.865-149.333,149.333-149.333S341.577,109.531,341.577,192c0,41.134-16.637,78.385-43.547,105.394 c-0.152,0.143-0.313,0.269-0.462,0.417c-0.117,0.117-0.215,0.245-0.329,0.364c-26.977,26.679-64.061,43.158-104.995,43.158 C109.775,341.333,42.91,274.469,42.91,192z" />
         <path d="M255.757,170.667H213.09V128c0-11.782-9.551-21.333-21.333-21.333s-21.333,9.551-21.333,21.333v42.667h-42.667 c-11.782,0-21.333,9.551-21.333,21.333s9.551,21.333,21.333,21.333h42.667V256c0,11.782,9.551,21.333,21.333,21.333 S213.09,267.782,213.09,256v-42.667h42.667c11.782,0,21.333-9.551,21.333-21.333S267.539,170.667,255.757,170.667z" />
      </svg>
    `;
}

function zoomOutSVG() {
  return `
      <svg width="18px" height="18px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
         <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-360.000000, -1139.000000)" fill="#000">
             <path d="M373.46,1163.45 C367.17,1163.45 362.071,1158.44 362.071,1152.25 C362.071,1146.06 367.17,1141.04 373.46,1141.04 C379.75,1141.04 384.85,1146.06 384.85,1152.25 C384.85,1158.44 379.75,1163.45 373.46,1163.45 L373.46,1163.45 Z M391.688,1169.25 L383.429,1161.12 C385.592,1158.77 386.92,1155.67 386.92,1152.25 C386.92,1144.93 380.894,1139 373.46,1139 C366.026,1139 360,1144.93 360,1152.25 C360,1159.56 366.026,1165.49 373.46,1165.49 C376.672,1165.49 379.618,1164.38 381.932,1162.53 L390.225,1170.69 C390.629,1171.09 391.284,1171.09 391.688,1170.69 C392.093,1170.3 392.093,1169.65 391.688,1169.25 L391.688,1169.25 Z M378.689,1151.41 L368.643,1151.41 C368.102,1151.41 367.663,1151.84 367.663,1152.37 C367.663,1152.9 368.102,1153.33 368.643,1153.33 L378.689,1153.33 C379.23,1153.33 379.669,1152.9 379.669,1152.37 C379.669,1151.84 379.23,1151.41 378.689,1151.41 L378.689,1151.41 Z" id="zoom-out" sketch:type="MSShapeGroup"></path>
         </g>
      </svg>
    `;
}

function downloadImageSVG() {
  return `
      <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M5 12V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V12" stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
         <path d="M12 3L12 15M12 15L16 11M12 15L8 11" stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    `;
}

function closeSVG() {
  return `
      <svg width="22px" height="22px" vaiewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path class="size-5" fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0F1729" />
      </svg>
    `;
}

function showPreviousImage() {
  return `
      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3165 19.0976 14.6834 19.0976 14.2929 18.7071L8.46963 12.8839C7.98148 12.3957 7.98148 11.6043 8.46963 11.1161L14.2929 5.29289C14.6834 4.90237 15.3165 4.90237 15.7071 5.29289Z" fill="#000" />
      </svg>
    `;
}

function showNextImage() {
  return `
      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.5303 11.1161C16.0185 11.6043 16.0185 12.3957 15.5303 12.8839L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" fill="#000" />
      </svg>
    `;
}

function rotateSVG(clockwise) {
  return clockwise ? `
        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.4898 14.9907C19.8414 16.831 18.6124 18.4108 16.9879 19.492C15.3635 20.5732 13.4316 21.0972 11.4835 20.9851C9.5353 20.873 7.67634 20.1308 6.18668 18.8704C4.69703 17.61 3.65738 15.8996 3.22438 13.997C2.79138 12.0944 2.98849 10.1026 3.78602 8.32177C4.58354 6.54091 5.93827 5.06746 7.64608 4.12343C9.35389 3.17941 11.3223 2.81593 13.2546 3.08779C16.5171 3.54676 18.6725 5.91142 21 8M21 8V2M21 8H15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
       </svg>`
    : `
        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.51018 14.9907C4.15862 16.831 5.38765 18.4108 7.01208 19.492C8.63652 20.5732 10.5684 21.0972 12.5165 20.9851C14.4647 20.873 16.3237 20.1308 17.8133 18.8704C19.303 17.61 20.3426 15.8996 20.7756 13.997C21.2086 12.0944 21.0115 10.1026 20.214 8.32177C19.4165 6.54091 18.0617 5.06746 16.3539 4.12343C14.6461 3.17941 12.6777 2.81593 10.7454 3.08779C7.48292 3.54676 5.32746 5.91142 3 8M3 8V2M3 8H9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
       </svg>`;
}

function createButton(className, svg) {
  return `<div class="${className}">${svg}</div>`;
}

function createArrowButton(className, svg) {
  return `<div class="${className}">${svg}</div>`;
}