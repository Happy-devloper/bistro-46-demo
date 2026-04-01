# 🍽️ Bistro 46 – Restaurant Website Template

A modern, responsive restaurant website template built using HTML, CSS, and JavaScript.  
Designed to help small restaurants establish an online presence and increase customer engagement through simple and effective design.

---

## 🚀 Features

- 📱 Fully responsive (mobile-friendly)
- 🍔 Menu section with images and descriptions
- 📞 Click‑to‑call buttons (hero section & sticky button)
- 📍 Google Maps integration
- ⭐ Customer reviews section
- ⚡ Fast loading & lightweight
- 🔧 Easy customization – edit only one JavaScript file

---

## 🛠️ Tech Stack

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  
- Font Awesome Icons  
- Google Fonts (Playfair Display & Open Sans)

---

## 📸 Preview

![Website Screenshot](screenshot.png)  
*(Add a screenshot of your live site here – take one and upload it to the repo with this name)*

---

## 🌐 Live Demo

👉 [https://happy-devloper.github.io/bistro-46-demo/](bistro-46.netlify.app)

---

## ⚙️ How to Customize

All content is driven by the `data` object in `script.js`.  
To create your own restaurant website, simply edit this object:

```js
const data = {
  name: "Restaurant Name",
  phone: "+1234567890",
  address: "Your Address",
  map: "https://www.google.com/maps/embed?pb=...", // Google Maps embed URL

  menu: [
    {
      name: "Dish Name",
      price: "$10",
      img: "https://example.com/image.jpg",
      desc: "Short description of the dish"
    },
    // Add more menu items here
  ]
};
