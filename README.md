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

![landing](https://github.com/user-attachments/assets/90dd6ae1-2abd-4884-ae83-7bc798bcc085)
![menu](https://github.com/user-attachments/assets/19a780e7-d381-4941-89e9-95d97fe4dbea)
![visit us](https://github.com/user-attachments/assets/dbf76a7e-9bb1-48a2-a6c1-b25f5cba30d6)
![contact us](https://github.com/user-attachments/assets/e8207d54-a96d-47c9-ace1-43e9aadab132)



---

## 🌐 Live Demo

👉 [https://bistro-46.netlify.app/](https://bistro-46.netlify.app/)

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
