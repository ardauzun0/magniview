
# Magniview

**Magniview** is a lightweight JavaScript lightbox library that provides zoom, fullscreen, gallery support, and more. With a user-friendly interface, it ensures a modern and captivating display of images and videos. It is easy to integrate and performance-focused, offering high-quality and smooth visual experiences in your projects.

---

## Features

- **Image and Video Zooming:**  
  Users can zoom in and out on both images and videos to examine them in detail.

- **Gallery Support:**  
  Displays multiple images and videos within a gallery with next/previous navigation support.

- **Image and Video Download Support:**  
  Users can easily download both images and videos to their devices.

- **Fullscreen Mode:**  
  Allows users to view images and videos in fullscreen for a better viewing experience.

- **Animated Transitions:**  
  Provides smooth transitions between images and videos, giving a professional appearance.

- **Minimal and Performance-Focused:**  
  Fast loading times thanks to its lightweight design.

- **Customizable Interface:**  
  Easily adaptable for quick integration into your projects.

---

## Why Magniview?

- **Enhanced Visual Experience:**  
  Allows users to explore images and videos in detail.

- **Lightweight and Fast:**  
  Provides modern functionality without bulky libraries.

- **Easy Integration:**  
  Quick setup and seamless integration into projects.

- **User-Friendly Navigation:**  
  Improves user experience with gallery and transition animations.

---

## Installation

### With NPM

```bash
npm install magniview
```

### With Yarn

```bash
yarn add magniview
```

---

## Usage

After installing the package, import the **JavaScript** and **CSS** files into your project:

### JavaScript and CSS Imports

#### Option 1  
Add the JavaScript to your project’s footer and CSS inside your main CSS file:

```html
<script src="../../node_modules/magniview/dist/magniview-min.js"></script>
```

```css
@import '../../node_modules/magniview/dist/magniview-min.css';
```

#### Option 2  
Alternatively, import the files directly in your JavaScript module:

```javascript
import 'magniview/dist/magniview-min.js';
import 'magniview/dist/magniview-min.css';
```

---

## Examples

### Single Image & Video Example

```html
<div data-magniview="">
    <img src="example-image.jpg" alt="">
</div>
<div data-magniview="">
    <video>
        <source src="example-video.mp4">
    </video>
</div>
```

### Gallery & Video Example

```html
<div data-magniview="galleryExamp">
    <img src="image1.jpg" alt="">
</div>
<div data-magniview="galleryExamp">
    <video>
        <source src="example-video.mp4">
    </video>
</div>
<div data-magniview="galleryExamp">
    <img src="image3.jpg" alt="">
</div>
```

### Youtube Example
<div data-magniview="" data-youtube="YtSECdCxgNI">
    <img src="image3.jpg" alt="">
</div>

---

## Conclusion

With its fast, customizable, and user-friendly structure, **Magniview** ensures a professional image and video display solution in your projects.