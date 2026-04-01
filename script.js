// ===== EDIT THIS ONLY =====
const data = {
  name: "Bistro 46",
  phone: "+16465900612",
  address: "46 Market Street, New York, NY 10002",
  map: "https://www.google.com/maps/embed?pb=...", // Replace with actual embed URL
  menu: [
    {
      name: "Grilled Octopus",
      price: "$24",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      desc: "Char-grilled octopus, lemon, olive oil, oregano, served with roasted potatoes."
    },
    {
      name: "Lamb Chops",
      price: "$32",
      img: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      desc: "Herb-marinated lamb chops, served with tzatziki and grilled vegetables."
    },
    {
      name: "Moussaka",
      price: "$21",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      desc: "Layers of eggplant, spiced meat, béchamel sauce. A classic."
    },
    {
      name: "Greek Salad",
      price: "$14",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      desc: "Tomatoes, cucumber, red onion, feta, olives, oregano, extra virgin olive oil."
    }
  ]
};

// ===== AUTO APPLY (do not edit below unless you know what you're doing) =====

// Basic info
document.title = `${data.name} | Mediterranean Cuisine in NYC`;
const logoDiv = document.querySelector(".logo");
if (logoDiv) logoDiv.innerHTML = `${data.name}`; // keeps span optional

// Hero title
const heroTitle = document.querySelector(".hero h1");
if (heroTitle) heroTitle.innerHTML = `Welcome to ${data.name}`;

// Address & Phone
const addressEl = document.getElementById("address");
if (addressEl) addressEl.textContent = data.address;

const phoneLink = document.getElementById("phone");
if (phoneLink) {
  phoneLink.textContent = data.phone;
  phoneLink.href = `tel:${data.phone}`;
}

// Call buttons
const callBtn = document.getElementById("callBtn");
if (callBtn) callBtn.href = `tel:${data.phone}`;
const stickyCall = document.getElementById("stickyCall");
if (stickyCall) stickyCall.href = `tel:${data.phone}`;

// Menu rendering
const menuContainer = document.getElementById("menuItems");
if (menuContainer) {
  menuContainer.innerHTML = "";
  data.menu.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";
    menuItem.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="menu-item-content">
        <h3>${item.name}</h3>
        <p>${item.desc || ""}</p>
        <div class="price">${item.price}</div>
      </div>
    `;
    menuContainer.appendChild(menuItem);
  });
}

// Map (if you add an iframe later, you can set its src here)
// Example: if you have <iframe id="map"> in your HTML
const mapIframe = document.getElementById("map");
if (mapIframe && data.map) mapIframe.src = data.map;

// Contact form demo alert
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for reaching out! (Demo – your message would be sent to the restaurant.)");
    contactForm.reset();
  });
}

// Mobile menu toggle
const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.getElementById("navLinks");
if (mobileMenu && navLinks) {
  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      if (navLinks) navLinks.classList.remove("active");
    }
  });
});
