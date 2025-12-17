// DOM Elements
const productsGrid = document.querySelector('.products-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const filterTabs = document.querySelector('.filter-tabs-wrapper');

// Product Data with real images from Unsplash
const products = [
    // Shirts
    {
        id: 1,
        name: "Campus Sutra | Men Comfort Fit Textured Button-Down Collar Cotton Casual Shirt",
        price: 419,
        originalPrice: 749,
        category: "shirts",
        image: "https://i.ibb.co/tPctQxSL/shirt01.webp",
        icon: "",
        affiliateLink: "https://myntr.it/swBfMoB",
        color: ""
    },

    // Pants
    {
        id: 1,
        name: "glitchez | Men Mid-Rise Relaxed Fit Chinos",
        price: 519,
        originalPrice: 719,
        category: "pants",
        image: "https://i.ibb.co/sLDYwJq/pants01.png",
        icon: "",
        affiliateLink: "https://myntr.it/2gyI9pp",
        color: ""
    },
    
    // Footwear
    {
        id: 1,
        name: "Roadster | The Lifestyle Co. Men Lace-Ups Round Toe Sneakers",
        price: 888,
        originalPrice: 1299,
        category: "footwear",
        image: "https://i.ibb.co/VcFHwp1K/footwear01.png",
        icon: "",
        affiliateLink: "https://myntr.it/Bads7I4",
        color: ""
    }
   ];

// Initialize the website
document.addEventListener('DOMContentLoaded', function () {
    // Load all products initially
    displayProducts(products);

    // Set up event listeners
    setupEventListeners();

    // Add animation delay to product cards
    animateProductCards();
});

// Display products in the grid
function displayProducts(productsToDisplay) {
    productsGrid.innerHTML = '';

    // Shuffle products for more natural display
    const shuffledProducts = [...productsToDisplay].sort(() => Math.random() - 0.5);

    shuffledProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.category = product.category;

        // Add animation delay based on index
        productCard.style.animationDelay = `${index * 0.05}s`;

        productCard.innerHTML = `
            <div class="product-img" style="background-color: ${product.color}20">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <i class="${product.icon}" style="color: ${product.color}"></i>
            </div>
            <div class="product-content">
                <span class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">₹${product.price} <span>₹${product.originalPrice}</span></div>
                <button class="btn-buy" data-link="${product.affiliateLink}">Buy Now</button>
            </div>
        `;

        productsGrid.appendChild(productCard);
    });

    // Add event listeners to Buy Now buttons
    const buyButtons = document.querySelectorAll('.btn-buy');
    buyButtons.forEach(button => {
        button.addEventListener('click', function () {
            const affiliateLink = this.getAttribute('data-link');
            window.open(affiliateLink, '_blank');
        });
    });
}

// Filter products by category
function filterProducts(category) {
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Filter products
            const filter = this.getAttribute('data-filter');
            filterProducts(filter);

            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.getAttribute('data-filter')) {
                e.preventDefault();
                const filter = this.getAttribute('data-filter');

                // Update filter buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                document.querySelector(`[data-filter="${filter}"]`).classList.add('active');

                // Filter products
                filterProducts(filter);

                // Scroll to products section
                document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            }

            // Update active nav link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');

            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if it's a filter link (handled above)
            if (href === '#products' && this.getAttribute('data-filter')) {
                return;
            }

            if (href !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        hamburger.classList.remove('active');
                    }
                }
            }
        });
    });

    // Add scroll effect to header
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
        }
    });
}

// Animate product cards on load
function animateProductCards() {
    const productCards = document.querySelectorAll('.product-card');

    // Using Intersection Observer to animate cards when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    productCards.forEach(card => {
        observer.observe(card);
    });
}

// Initialize smooth scrolling for filter tabs on mobile
if (window.innerWidth <= 768) {
    filterTabs.addEventListener('wheel', function (e) {
        e.preventDefault();
        this.scrollLeft += e.deltaY;
    });
}

// Preload hero image for better performance
window.addEventListener('load', function () {
    const heroBg = document.querySelector('.hero-background');
    if (heroBg) {
        heroBg.style.opacity = '1';
    }
});





