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
        affiliateLink: "https://www.myntra.com/36177409?skuId=115596731&sellerPartnerId=4214&orderDate=1762917479000&orderId=5670726335&productName=Campus%20Sutra%20Men%20Comfort%20Fit%20Textured%20Button-Down%20Collar%20Cotton%20Casual%20Shirt&itemId=10798951478&orderStatusName=Delivered&deliveredDate=1763450107000&size=40",
        color: ""
    },
    {
        id: 2,
        name: "THE BEAR HOUSE | Men Slim Fit Checkered Spread Collar Casual Shirt",
        price: 999,
        originalPrice: 2495,
        category: "shirts",
        image: "https://i.ibb.co/xtVkX83V/shirt02.webp",
        icon: "",
        affiliateLink: "https://www.flipkart.com/bear-house-men-checkered-casual-blue-shirt/p/itm5e387b19b8ac0?pid=SHTGR829QN59VJXX&lid=LSTSHTGR829QN59VJXXIBRDOU&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=en_Xma_GT6W_uy-VsG4Uh1NywGO4ozbf2Hi5Xij_rcVbYw713ARyzwRwnEgZr2kderljwf_TSWuoY6zFBCqCKUNwQ%3D%3D&ppt=pp&ppn=pp&ssid=n7hxz70iog0000001765851899623&otracker=pp_reco_Similar%2BProducts_3_34.productCard.PMU_HORIZONTAL_THE%2BBEAR%2BHOUSE%2BMen%2BCheckered%2BCasual%2BBlue%2BShirt_-1_productRecommendation%2Fsimilar_2&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_3_NA_view-all&cid=-1",
        color: ""
    },
    {
        id: 3,
        name: "THE BEAR HOUSE | Men Slim Fit Checkered Button Down Collar Casual Shirtt",
        price: 773,
        originalPrice: 2495,
        category: "shirts",
        image: "https://i.ibb.co/jvYxNtgG/shirt01.webp",
        icon: "",
        affiliateLink: "https://www.flipkart.com/bear-house-men-checkered-casual-green-white-beige-shirt/p/itm8a83de1fcd244?pid=SHTGR8286C5RDGHH&lid=LSTSHTGR8286C5RDGHHTKFRLF&marketplace=FLIPKART&q=snitch+shirts&store=clo%2Fash%2Faxc%2Fmmk&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=en_YKgv_TTuSXD_Ww5hBeGOgZNEcJ9oQxqhyjDiS-nvKN0LK0zMDb6_m4I8xcwetlav_LcKxhrGo8E-YfJYmZL1lfUFjCTyOHoHZs-Z5_PS_w0%3D&ppt=sp&ppn=sp&ssid=n7hxz70iog0000001765851899623&qH=c2d18b5d7eae2778",
        color: ""
    },
    {
        id: 4,
        name: "THE BEAR HOUSE | Men Slim Fit Checkered Spread Collar Casual Shirt",
        price: 999,
        originalPrice: 2495,
        category: "shirts",
        image: "https://i.ibb.co/xtVkX83V/shirt02.webp",
        icon: "",
        affiliateLink: "https://www.flipkart.com/bear-house-men-checkered-casual-blue-shirt/p/itm5e387b19b8ac0?pid=SHTGR829QN59VJXX&lid=LSTSHTGR829QN59VJXXIBRDOU&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=en_Xma_GT6W_uy-VsG4Uh1NywGO4ozbf2Hi5Xij_rcVbYw713ARyzwRwnEgZr2kderljwf_TSWuoY6zFBCqCKUNwQ%3D%3D&ppt=pp&ppn=pp&ssid=n7hxz70iog0000001765851899623&otracker=pp_reco_Similar%2BProducts_3_34.productCard.PMU_HORIZONTAL_THE%2BBEAR%2BHOUSE%2BMen%2BCheckered%2BCasual%2BBlue%2BShirt_-1_productRecommendation%2Fsimilar_2&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_3_NA_view-all&cid=-1",
        color: ""
    },

    // Pants
    {
        id: 1,
        name: "Roadster | Men Regular Mid Rise Blue Jeans",
        price: 748,
        originalPrice: 2199,
        category: "pants",
        image: "https://i.ibb.co/R4sRSRVC/pants01.webp",
        icon: "",
        affiliateLink: "https://www.flipkart.com/roadster-regular-men-blue-jeans/p/itm30459648fea92?pid=JEAGZ22NWKJZP6MZ&lid=LSTJEAGZ22NWKJZP6MZIYKTRH&marketplace=FLIPKART&q=roadster+straight+fit+jeans&store=clo%2Fvua%2Fk58&srno=s_1_14&otracker=search&otracker1=search&fm=Search&iid=767324b6-1cd1-4c04-bd0b-d291c112e125.JEAGZ22NWKJZP6MZ.SEARCH&ppt=sp&ppn=sp&ssid=r4k7f7lctc0000001765853873571&qH=13be8d6ea1461efc",
        color: ""
    },
    {
        id: 2,
        name: "Urbano Fashion | Men Slim Fit Cream Cotton Blend Trousers",
        price: 779,
        originalPrice: 1699,
        category: "pants",
        image: "https://i.ibb.co/JRtKBK66/pant02.webp",
        icon: "",
        affiliateLink: "https://www.flipkart.com/urbano-fashion-slim-fit-men-cream-trousers/p/itmfegvazvhkseea?pid=TROFST5WF2XPVGZB&lid=LSTTROFST5WF2XPVGZBANGUY2&marketplace=FLIPKART&q=straight+fitchinos+&store=clo%2Fvua%2Fmle&srno=s_1_12&otracker=search&otracker1=search&fm=Search&iid=en_IifQjlwaWsV9PnhJQHC8PYRClKd_ZdLjBXWV5b66Mv7O261sbF-nIV-jzguP6nwVWH4zlomUBtuMfrjf6__Ajg%3D%3D&ppt=sp&ppn=sp&qH=77876e9b4309e76e",
        color: ""
    },
    {
        id: 3,
        name: "Urbano Fashion | Men Slim Fit Cream Cotton Blend Trousers",
        price: 779,
        originalPrice: 1699,
        category: "pants",
        image: "https://i.ibb.co/JRtKBK66/pant02.webp",
        icon: "",
        affiliateLink: "https://www.flipkart.com/urbano-fashion-slim-fit-men-cream-trousers/p/itmfegvazvhkseea?pid=TROFST5WF2XPVGZB&lid=LSTTROFST5WF2XPVGZBANGUY2&marketplace=FLIPKART&q=straight+fitchinos+&store=clo%2Fvua%2Fmle&srno=s_1_12&otracker=search&otracker1=search&fm=Search&iid=en_IifQjlwaWsV9PnhJQHC8PYRClKd_ZdLjBXWV5b66Mv7O261sbF-nIV-jzguP6nwVWH4zlomUBtuMfrjf6__Ajg%3D%3D&ppt=sp&ppn=sp&qH=77876e9b4309e76e",
        color: ""
    },
    {
        id: 4,
        name: "Roadster | Men Regular Mid Rise Blue Jeans",
        price: 748,
        originalPrice: 2199,
        category: "pants",
        image: "https://i.ibb.co/R4sRSRVC/pants01.webp",
        icon: "",
        affiliateLink: "https://www.flipkart.com/roadster-regular-men-blue-jeans/p/itm30459648fea92?pid=JEAGZ22NWKJZP6MZ&lid=LSTJEAGZ22NWKJZP6MZIYKTRH&marketplace=FLIPKART&q=roadster+straight+fit+jeans&store=clo%2Fvua%2Fk58&srno=s_1_14&otracker=search&otracker1=search&fm=Search&iid=767324b6-1cd1-4c04-bd0b-d291c112e125.JEAGZ22NWKJZP6MZ.SEARCH&ppt=sp&ppn=sp&ssid=r4k7f7lctc0000001765853873571&qH=13be8d6ea1461efc",
        color: ""
    },

    // Footwear
    {
        id: 1,
        name: "MACTREE | Sneakers For Men  (Olive , 8)",
        price: 998,
        originalPrice: 6400,
        category: "footwear",
        image: "https://i.ibb.co/Hf56VWhh/footwear01.webp",
        icon: "",
        affiliateLink: "https://www.flipkart.com/mactree-sneakers-men/p/itm32f4659c8d277?pid=SHOHEMH2FDU5HNYK&lid=LSTSHOHEMH2FDU5HNYKU2G4RI&marketplace=FLIPKART&q=suede%20sneakers%20for%20men&sattr[]=color&st=color&otracker=AS_QueryStore_OrganicAutoSuggest_1_10_na_na_na",
        color: ""
    },
    {
        id: 2,
        name: "BIG FOX | Suede Leather Penny Loafers For Men  (Grey , 8)",
        price: 999,
        originalPrice: 2999,
        category: "footwear",
        image: "https://i.ibb.co/qHNFB02/footwear02.webp",
        icon: "",
        affiliateLink: "https://www.flipkart.com/big-fox-suede-leather-penny-loafers-men/p/itma8d327fada9c2?pid=SHOGGH84HHWY5QAF&lid=LSTSHOGGH84HHWY5QAF4T7EKH&marketplace=FLIPKART&q=suede+loafer+for+men+&store=osp%2Fcil%2Fe1f&srno=s_1_15&otracker=search&otracker1=search&fm=Search&iid=061d11f8-8b6b-4611-86f2-2191cd69f2c9.SHOGGH84HHWY5QAF.SEARCH&ppt=sp&ppn=sp&ssid=0tprpn50gg0000001765854731288&qH=b85839556bf29b02",
        color: ""
    },
    {
        id: 3,
        name: "MACTREE | Sneakers For Men  (Olive , 8)",
        price: 998,
        originalPrice: 6400,
        category: "footwear",
        image: "https://i.ibb.co/Hf56VWhh/footwear01.webp",
        icon: "",
        affiliateLink: "https://www.flipkart.com/mactree-sneakers-men/p/itm32f4659c8d277?pid=SHOHEMH2FDU5HNYK&lid=LSTSHOHEMH2FDU5HNYKU2G4RI&marketplace=FLIPKART&q=suede%20sneakers%20for%20men&sattr[]=color&st=color&otracker=AS_QueryStore_OrganicAutoSuggest_1_10_na_na_na",
        color: ""
    },
    {
        id: 4,
        name: "BIG FOX | Suede Leather Penny Loafers For Men  (Grey , 8)",
        price: 999,
        originalPrice: 2999,
        category: "footwear",
        image: "https://i.ibb.co/qHNFB02/footwear02.webp",
        icon: "",
        affiliateLink: "https://www.flipkart.com/big-fox-suede-leather-penny-loafers-men/p/itma8d327fada9c2?pid=SHOGGH84HHWY5QAF&lid=LSTSHOGGH84HHWY5QAF4T7EKH&marketplace=FLIPKART&q=suede+loafer+for+men+&store=osp%2Fcil%2Fe1f&srno=s_1_15&otracker=search&otracker1=search&fm=Search&iid=061d11f8-8b6b-4611-86f2-2191cd69f2c9.SHOGGH84HHWY5QAF.SEARCH&ppt=sp&ppn=sp&ssid=0tprpn50gg0000001765854731288&qH=b85839556bf29b02",
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

