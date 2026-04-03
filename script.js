// ===== EDIT THIS ONLY =====
const data = {
  name: "Bistro 46",
  phone: "+16465900612",
  whatsapp: "16465900612", // without + for WhatsApp API
  address: "46 Market Street, New York, NY 10002",
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.70512937933058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3166c2e2c3%3A0xb2f5b6b9b9b9b9b9!2s46%20Market%20St%2C%20New%20York%2C%20NY%2010002!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus",
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
  ],
  reviews: [
    { name: "John D.", text: "Amazing food and atmosphere! The octopus was incredible.", rating: 5 },
    { name: "Maria S.", text: "Best Mediterranean in NYC. Great service and cozy vibe.", rating: 5 },
    { name: "Alex P.", text: "Loved the lamb chops. Will definitely come back!", rating: 4 }
  ]
};

// ===== AUTO APPLY (do not edit below unless you know what you're doing) =====

// Basic info
document.title = `${data.name} | Mediterranean Cuisine in NYC`;
const logoDiv = document.querySelector(".logo");
if (logoDiv) logoDiv.innerHTML = data.name;

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

// Call buttons (hero, sticky)
const callBtn = document.getElementById("callBtn");
if (callBtn) callBtn.href = `tel:${data.phone}`;
const stickyCall = document.getElementById("stickyCall");
if (stickyCall) stickyCall.href = `tel:${data.phone}`;

// WhatsApp buttons
const whatsappUrl = `https://wa.me/${data.whatsapp}?text=Hello%2C%20I%27d%20like%20to%20order%20online.`;
const whatsappBtn = document.getElementById("whatsappBtn");
if (whatsappBtn) whatsappBtn.href = whatsappUrl;
const whatsappContactBtn = document.getElementById("whatsappContactBtn");
if (whatsappContactBtn) whatsappContactBtn.href = whatsappUrl;

// Map
const mapIframe = document.getElementById("map");
if (mapIframe && data.map) mapIframe.src = data.map;

// Menu rendering with lazy loading
const menuContainer = document.getElementById("menuItems");
if (menuContainer) {
  menuContainer.innerHTML = "";
  data.menu.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";
    menuItem.innerHTML = `
      <img src="${item.img}" alt="${item.name}" loading="lazy">
      <div class="menu-item-content">
        <h3>${item.name}</h3>
        <p>${item.desc || ""}</p>
        <div class="price">${item.price}</div>
      </div>
    `;
    menuContainer.appendChild(menuItem);
  });
}

// Reviews rendering
const reviewsContainer = document.getElementById("reviewsContainer");
if (reviewsContainer && data.reviews) {
  reviewsContainer.innerHTML = "";
  data.reviews.forEach(review => {
    const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
    const reviewCard = document.createElement("div");
    reviewCard.className = "review-card";
    reviewCard.innerHTML = `
      <div class="review-stars">${stars}</div>
      <div class="review-text">“${review.text}”</div>
      <div class="review-name">- ${review.name}</div>
    `;
    reviewsContainer.appendChild(reviewCard);
  });
}

// Contact form with inline success message (no alert)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    // Simulate sending (demo)
    formStatus.innerHTML = "✅ Thank you! Your message has been sent (demo).";
    formStatus.className = "form-status success";
    contactForm.reset();
    setTimeout(() => {
      formStatus.innerHTML = "";
      formStatus.className = "form-status";
    }, 4000);
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
