# Magniview

**Magniview** is a lightweight JavaScript lightbox library that provides zoom, fullscreen, gallery support, and more. With a user-friendly interface, it ensures a modern and captivating display of images. It is easy to integrate and performance-focused, offering high-quality and smooth visual experiences in your projects.

**Magniview**, resimlere yakınlaştırma, tam ekran, galeri desteği ve daha fazlasını sağlayan hafif bir JavaScript lightbox kütüphanesidir. Kullanıcı dostu arayüzüyle görsellerin modern ve etkileyici bir şekilde sergilenmesini sağlar. Entegrasyonu kolaydır ve performans odaklıdır, bu yüzden projelerinizde yüksek kalite ve akıcı görsel deneyimler sunar.

---

## **Features / Özellikler**

- **Image Zooming:**  
  Users can zoom in and out on images to examine them in detail.

- **Galeri desteği / Gallery Support:**  
  Displays multiple images within a gallery with next/previous navigation support.

- **Image Download Support / Resim indirme desteği:**  
  Users can easily download images to their devices.

- **Fullscreen Mode / Tam Ekran Modu:**  
  Allows users to view images in fullscreen for a better viewing experience.

- **Animated Transitions / Animasyonlu Geçişler:**  
  Provides smooth transitions between images, giving a professional appearance.

- **Minimal and Performance-Focused / Minimal ve Performans Odaklı:**  
  Fast loading times thanks to its lightweight design.

- **Customizable Interface / Özelleştirilebilir Arayüz:**  
  Easily adaptable for quick integration into your projects.

---

## **Why Magniview? / Neden Magniview?**

- **Enhanced Visual Experience / Gelişmiş Görsel Deneyimi:**  
  Allows users to explore images in detail.

- **Lightweight and Fast / Hafif ve Performanslı:**  
  Provides modern functionality without bulky libraries.

- **Easy Integration / Kolay Entegrasyon:**  
  Quick setup and seamless integration into projects.

- **User-Friendly Navigation / Kullanıcı Dostu Navigasyon:**  
  Improves user experience with gallery and transition animations.

---

## **Installation / Kurulum**

### **With NPM / NPM ile Kurulum**

```bash
npm install magniview
```

### **With Yarn / Yarn ile Kurulum**

```bash
yarn add magniview
```

---

## **Usage / Kullanım**

After installing the package, import the **JavaScript** and **CSS** files into your project:

Paket kurulumundan sonra, proje içine **JavaScript** ve **CSS** dosyalarını şu şekilde dahil edin:

### **JavaScript and CSS Imports / JavaScript ve CSS Dosyalarını Dahil Etme**

#### **Option 1 / Seçenek 1**  
Add the JavaScript to your project’s footer and CSS inside your main CSS file:

Footer’a ekleyin:

```html
<script src="../../node_modules/magniview/dist/magniview-min.js"></script>
```

CSS dosyanıza ekleyin:

```css
@import '../../node_modules/magniview/dist/magniview-min.css';
```

#### **Option 2 / Seçenek 2**  
Alternatively, import the files directly in your JavaScript module:

Alternatif olarak, dosyaları JavaScript modülünüze şu şekilde import edebilirsiniz:

```javascript
import 'magniview/dist/magniview-min.js';
import 'magniview/dist/magniview-min.css';
```

---

## **Examples / Örnekler**

### **Single Image Example / Tek Görsel Örneği**

```html
<div data-magniview="">
    <img src="example-image.jpg" alt="">
</div>
```

### **Gallery Example / Galeri Örneği**

```html
<div data-magniview="galleryExamp">
    <img src="image1.jpg" alt="">
</div>
<div data-magniview="galleryExamp">
    <img src="image2.jpg" alt="">
</div>
<div data-magniview="galleryExamp">
    <img src="image3.jpg" alt="">
</div>
```

---

## **Conclusion / Sonuç**

With its fast, customizable, and user-friendly structure, **Magniview** ensures a professional image display solution in your projects.

**Magniview**, hızlı, özelleştirilebilir ve kullanıcı dostu yapısıyla projelerinizde profesyonel bir görsel sunum çözümü sunar.
