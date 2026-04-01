// ===== EDIT THIS ONLY =====
const data = {
  name: "Bistro 46",
  phone: "+16465900612",
  address: "46 Market Street, New York, NY",
  map: "https://www.google.com/maps?q=46+Market+Street+New+York&output=embed",

  menu: [
    {
      name: "Grilled Octopus",
      price: "$24",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
    },
    {
      name: "Lamb Chops",
      price: "$32",
      img: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590"
    },
    {
      name: "Moussaka",
      price: "$21",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947"
    },
    {
      name: "Greek Salad",
      price: "$14",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
    }
  ]
};

// ===== AUTO APPLY =====
document.getElementById("title").innerText = data.name;
document.getElementById("logo").innerText = data.name;
document.getElementById("hero-title").innerText = data.name;

document.getElementById("address").innerText = data.address;

const phoneEl = document.getElementById("phone");
phoneEl.innerText = data.phone;
phoneEl.href = "tel:" + data.phone;

document.getElementById("callBtn").href = "tel:" + data.phone;
document.getElementById("stickyCall").href = "tel:" + data.phone;

document.getElementById("map").src = data.map;

// MENU RENDER
const container = document.getElementById("menuItems");

data.menu.forEach(item => {
  const div = document.createElement("div");
  div.className = "menu-item";

  div.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>${item.price}</p>
  `;

  container.appendChild(div);
});

// MOBILE MENU
const menuBtn = document.getElementById("mobileMenu");
const nav = document.getElementById("navLinks");

menuBtn.onclick = () => {
  nav.classList.toggle("active");
};
