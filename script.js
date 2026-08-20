/* Juja South Estates — interactivity */

const listings = [
  {
    id: "p1",
    name: "Greenview Two-Bedroom Apartment",
    location: "Juja South",
    type: "Apartment",
    deal: "rent",
    price: 20000,
    priceLabel: "KSh 20,000/month",
    bedrooms: 2,
    bathrooms: 1,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    short:
      "Bright apartment near Kenyatta Road with reliable water and a gated compound.",
    description:
      "This two-bedroom unit in Juja South suits a small family or sharing professionals. It sits in a quiet court with parking for one car, a shared drying area, and a caretaker on site. Walking distance to matatus along Kenyatta Road.",
    features: [
      "Gated court",
      "Parking for 1 car",
      "Borehole water",
      "Tiled floors",
      "Close to shops",
    ],
  },
  {
    id: "p2",
    name: "Sunrise Bedsitter — Juja Town",
    location: "Juja",
    type: "Bedsitter",
    deal: "rent",
    price: 12000,
    priceLabel: "KSh 12,000/month",
    bedrooms: 0,
    bathrooms: 1,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    short: "Secure bedsitter popular with JKUAT students, five minutes from campus matatus.",
    description:
      "A compact, well-kept bedsitter in Juja town. The block has CCTV at the gate, a water tank, and shops on the ground floor. Ideal if you want a simple, affordable start without leaving Juja.",
    features: ["CCTV gate", "Student-friendly", "Shops downstairs", "Water tank"],
  },
  {
    id: "p3",
    name: "Witeithie Family Maisonette",
    location: "Witeithie",
    type: "Maisonette",
    deal: "rent",
    price: 25000,
    priceLabel: "KSh 25,000/month",
    bedrooms: 3,
    bathrooms: 2,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    short: "Three-bedroom maisonette with a small garden, suitable for a growing family.",
    description:
      "Set in a residential pocket of Witeithie, this maisonette offers a lounge, kitchen with pantry space, and an upstairs balcony. Neighbours are mostly families. Easy access back to Juja South via Kenyatta Road.",
    features: ["Private garden", "Balcony", "DSQ option nearby", "Tarmac access"],
  },
  {
    id: "p4",
    name: "Kalimoni Court Three-Bedroom",
    location: "Kalimoni",
    type: "Apartment",
    deal: "rent",
    price: 35000,
    priceLabel: "KSh 35,000/month",
    bedrooms: 3,
    bathrooms: 2,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    short: "Spacious rental in Kalimoni with two bathrooms and backup water.",
    description:
      "A third-floor apartment with good airflow and views towards the highway. Rent includes garbage collection. Suitable for professionals who commute to Thika or Nairobi but want Kiambu County living costs.",
    features: ["Two bathrooms", "Backup water", "Lift", "Visitor parking"],
  },
  {
    id: "p5",
    name: "Juja South Bungalow for Sale",
    location: "Juja South",
    type: "Bungalow",
    deal: "sale",
    price: 4500000,
    priceLabel: "KSh 4,500,000",
    bedrooms: 3,
    bathrooms: 2,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    short: "All-on-one-level family bungalow on an eighth of an acre.",
    description:
      "This bungalow is ready to occupy, with a perimeter wall, steel gate, and fruit trees at the back. Title is available for inspection at our Juja South office. A practical first home if you want to stop paying rent.",
    features: ["1/8 acre", "Perimeter wall", "Title available", "Fruit trees"],
  },
  {
    id: "p6",
    name: "Kalimoni Four-Bedroom Maisonette",
    location: "Kalimoni",
    type: "Maisonette",
    deal: "sale",
    price: 6500000,
    priceLabel: "KSh 6,500,000",
    bedrooms: 4,
    bathrooms: 3,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    short: "Modern maisonette in a quiet Kalimoni court, close to schools and churches.",
    description:
      "Four bedrooms (master en suite), a separate dining area, and a DSQ. The court has murram that is graded yearly. Serious buyers can view with 24 hours’ notice. Price is negotiable for a clean cash sale.",
    features: ["Master en suite", "DSQ", "Quiet court", "Near schools"],
  },
  {
    id: "p7",
    name: "Theta Gated Five-Bedroom Home",
    location: "Theta",
    type: "Maisonette",
    deal: "sale",
    price: 8000000,
    priceLabel: "KSh 8,000,000",
    bedrooms: 5,
    bathrooms: 4,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    short: "Large family home in Theta with room for a home office and guests.",
    description:
      "Built for a bigger household or for someone who hosts relatives from upcountry. The compound fits two cars and a small kitchen garden. Theta is growing steadily, which makes this a comfortable live-in or rental investment.",
    features: ["Five bedrooms", "Two-car parking", "Kitchen garden", "Gated access"],
  },
  {
    id: "p8",
    name: "Residential Plot — Juja South",
    location: "Juja South",
    type: "Plot",
    deal: "sale",
    price: 1800000,
    priceLabel: "KSh 1,800,000",
    bedrooms: 0,
    bathrooms: 0,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    short: "50 by 100 plot with access road, suitable for a future family house.",
    description:
      "Level land with beacons in place. Electricity is on the neighbouring plots. We can walk the site with you and share the mutation and search. Ideal if you want to build in phases rather than buy a finished house.",
    features: ["50 x 100", "Beacons in place", "Power nearby", "Access road"],
  },
];

const grid = document.getElementById("propertyGrid");
const emptyState = document.getElementById("emptyState");
const searchForm = document.getElementById("searchForm");
const searchStatus = document.getElementById("searchStatus");
const modal = document.getElementById("propertyModal");
const modalBody = document.getElementById("modalBody");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function bedroomLabel(count) {
  if (count === 0) return "Bedsitter / studio";
  if (count === 1) return "1 bedroom";
  return count + " bedrooms";
}

function bathroomLabel(count) {
  if (count === 0) return "Open land";
  if (count === 1) return "1 bathroom";
  return count + " bathrooms";
}

function matchesFilters(property, filters) {
  if (filters.location !== "all" && property.location !== filters.location) {
    return false;
  }
  if (filters.type !== "all" && property.type !== filters.type) {
    return false;
  }
  if (filters.bedrooms !== "all") {
    const wanted = Number(filters.bedrooms);
    if (wanted === 4) {
      if (property.bedrooms < 4) return false;
    } else if (property.bedrooms !== wanted) {
      return false;
    }
  }
  if (filters.price === "rent-low") {
    return property.deal === "rent" && property.price <= 25000;
  }
  if (filters.price === "rent-mid") {
    return property.deal === "rent" && property.price > 25000 && property.price <= 40000;
  }
  if (filters.price === "sale-low") {
    return property.deal === "sale" && property.price <= 5000000;
  }
  if (filters.price === "sale-high") {
    return property.deal === "sale" && property.price > 5000000;
  }
  return true;
}

function renderCards(items) {
  grid.innerHTML = "";
  emptyState.hidden = items.length > 0;

  items.forEach(function (property) {
    const card = document.createElement("article");
    card.className = "property-card reveal visible";
    card.tabIndex = 0;
    card.dataset.id = property.id;
    card.innerHTML =
      '<img src="' +
      property.image +
      '" alt="' +
      property.name +
      " in " +
      property.location +
      '" width="600" height="400" />' +
      '<div class="body">' +
      '<span class="badge">' +
      property.type +
      " · " +
      property.location +
      "</span>" +
      "<h3>" +
      property.name +
      "</h3>" +
      '<p class="price">' +
      property.priceLabel +
      "</p>" +
      '<p class="meta">' +
      bedroomLabel(property.bedrooms) +
      " · " +
      bathroomLabel(property.bathrooms) +
      "</p>" +
      "<p>" +
      property.short +
      "</p>" +
      '<button class="btn btn-ghost" type="button">View Details</button>' +
      "</div>";

    card.addEventListener("click", function (event) {
      if (event.target.closest("button") || event.currentTarget === card) {
        openModal(property.id);
      }
    });
    card.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(property.id);
      }
    });
    const img = card.querySelector("img");
    img.addEventListener("error", function () {
      img.src =
        "data:image/svg+xml," +
        encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect fill="#1b4d3e" width="600" height="400"/><text x="50%" y="50%" fill="#c4a35a" text-anchor="middle" font-family="sans-serif" font-size="22">Juja South Estates</text></svg>'
        );
    });
    grid.appendChild(card);
  });
}

function currentFilters() {
  return {
    location: document.getElementById("filterLocation").value,
    type: document.getElementById("filterType").value,
    price: document.getElementById("filterPrice").value,
    bedrooms: document.getElementById("filterBedrooms").value,
  };
}

function runSearch(event) {
  if (event) event.preventDefault();
  const filters = currentFilters();
  const results = listings.filter(function (item) {
    return matchesFilters(item, filters);
  });
  renderCards(results);
  searchStatus.textContent =
    results.length === 1
      ? "Showing 1 property."
      : "Showing " + results.length + " properties.";
}

function openModal(id) {
  const property = listings.find(function (item) {
    return item.id === id;
  });
  if (!property) return;

  const features = property.features
    .map(function (feature) {
      return "<li>" + feature + "</li>";
    })
    .join("");

  modalBody.innerHTML =
    '<img src="' +
    property.image +
    '" alt="' +
    property.name +
    '" />' +
    '<div class="modal-content">' +
    "<h2 id=\"modalTitle\">" +
    property.name +
    "</h2>" +
    "<p><strong>Location:</strong> " +
    property.location +
    ", Kenya</p>" +
    "<p class=\"price\">" +
    property.priceLabel +
    "</p>" +
    "<p>" +
    bedroomLabel(property.bedrooms) +
    " · " +
    bathroomLabel(property.bathrooms) +
    " · " +
    property.type +
    "</p>" +
    "<p>" +
    property.description +
    "</p>" +
    "<h3>Property features</h3>" +
    '<ul class="features">' +
    features +
    "</ul>" +
    '<p style="margin-top:18px"><a class="btn btn-primary" href="#contact" data-close-modal>Contact / Inquiry</a></p>' +
    "</div>";

  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

modal.addEventListener("click", function (event) {
  if (event.target.closest("[data-close-modal]")) {
    closeModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.hidden) {
    closeModal();
  }
});

searchForm.addEventListener("submit", runSearch);

/* Mobile menu */
menuToggle.addEventListener("click", function () {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

/* Highlight current section in the nav */
const sections = document.querySelectorAll("main section[id]");
const navAnchors = navLinks.querySelectorAll("a");

function updateActiveNav() {
  let current = "home";
  sections.forEach(function (section) {
    if (window.scrollY >= section.offsetTop - 90) {
      current = section.id;
    }
  });
  navAnchors.forEach(function (anchor) {
    const href = anchor.getAttribute("href").slice(1);
    anchor.classList.toggle("active", href === current);
  });
}

window.addEventListener("scroll", updateActiveNav);

/* Contact form validation */
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

function isKenyanPhone(value) {
  const compact = value.replace(/\s+/g, "");
  return /^(\+254|0)7\d{8}$/.test(compact);
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  formFeedback.className = "form-feedback";

  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const phone = document.getElementById("contactPhone").value.trim();
  const type = document.getElementById("contactPropertyType").value;
  const message = document.getElementById("contactMessage").value.trim();

  if (!name || !email || !phone || !type || !message) {
    formFeedback.textContent = "Please fill in every field before sending.";
    formFeedback.classList.add("error");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    formFeedback.textContent = "Enter a valid email address.";
    formFeedback.classList.add("error");
    return;
  }

  if (!isKenyanPhone(phone)) {
    formFeedback.textContent =
      "Use a Kenyan mobile format such as +254 743 667 190 or 0743667190.";
    formFeedback.classList.add("error");
    return;
  }

  formFeedback.textContent =
    "Thank you, " +
    name +
    ". Your inquiry about a " +
    type.toLowerCase() +
    " has been noted. Our Juja South desk will reply at " +
    email +
    ".";
  formFeedback.classList.add("success");
  contactForm.reset();
});

/* Scroll-in animations */
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach(function (el) {
  observer.observe(el);
});

renderCards(listings);
searchStatus.textContent = "Showing all " + listings.length + " properties.";
updateActiveNav();
