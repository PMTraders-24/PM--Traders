/* =========================================================
   PM TRADERS V2 — CENTRAL PRODUCT CATALOGUE
   ========================================================= */

const PRODUCTS = [

    /* =========================
       SMARTPHONES
    ========================= */

    {
        id: "iphone-13-pro-max",
        name: "iPhone 13 Pro Max",
        category: "Smartphones",
        price: 7500,
        oldPrice: 8500,
        stock: 3,
        badge: "SALE",
        status: "In Stock",
        description:
            "Apple iPhone 13 Pro Max. A premium smartphone with powerful performance, excellent cameras and a large Super Retina display.",
        images: [
            "iPhone%2013%20Pro%20Max.jpeg"
        ],
        featured: true
    },

    {
        id: "iphone-17-pro-max",
        name: "iPhone 17 Pro Max",
        category: "Smartphones",
        price: 24000,
        oldPrice: null,
        stock: 2,
        badge: "NEW",
        status: "In Stock",
        description:
            "Premium iPhone 17 Pro Max smartphone. Contact PM Traders to confirm available colour, storage and current stock.",
        images: [
            "iPhone%2017%20Pro%20Max.jpeg"
        ],
        featured: true
    },


    /* =========================
       HUMAN HAIR
    ========================= */

    {
        id: "8-inch-sdd",
        name: "8 Inch Super Double Drawn Weave",
        category: "Human Hair",
        price: 850,
        oldPrice: null,
        stock: 8,
        badge: "POPULAR",
        status: "In Stock",
        description:
            "Premium 8-inch Super Double Drawn human hair weave.",
        images: [
            "8%20Inch%20Super%20Double%20Drawn.webp"
        ],
        featured: true
    },

    {
        id: "20-inch-jurly-curls",
        name: "20 Inch Weave Jurly Curls",
        category: "Human Hair",
        price: 970,
        oldPrice: null,
        stock: 6,
        badge: "POPULAR",
        status: "In Stock",
        description:
            "Beautiful 20-inch Jurly Curls weave for a stylish and glamorous look.",
        images: [
            "20%20Inch%20Weave%20Jurly%20Curls.webp"
        ],
        featured: true
    },

    {
        id: "22-inch-water-wave",
        name: "22 Inch Water Wave",
        category: "Human Hair",
        price: 0,
        oldPrice: null,
        stock: 0,
        badge: "CONTACT US",
        status: "Contact Us",
        description:
            "22-inch Water Wave human hair. Contact PM Traders for the latest price and availability.",
        images: [
            "22%20Inch%20Water%20Wave.webp"
        ],
        featured: false
    },


    /* =========================
       FASHION
    ========================= */

    {
        id: "fashion-dress-1",
        name: "Ladies Fashion Dress",
        category: "Fashion",
        price: 230,
        oldPrice: null,
        stock: 10,
        badge: "NEW",
        status: "In Stock",
        description:
            "Stylish ladies fashion dress suitable for casual and special occasions.",
        images: [
            "Fashion%20Dress.jpeg"
        ],
        featured: true
    },


    /* =========================
       ACCESSORIES
    ========================= */

    {
        id: "phone-accessories",
        name: "Cellphone Accessories",
        category: "Accessories",
        price: 0,
        oldPrice: null,
        stock: 0,
        badge: "COMING SOON",
        status: "Contact Us",
        description:
            "Cellphone accessories from PM Traders. Contact us for available products, prices and stock.",
        images: [],
        featured: false
    },

    {
        id: "laptop-accessories",
        name: "Laptop Accessories",
        category: "Accessories",
        price: 0,
        oldPrice: null,
        stock: 0,
        badge: "COMING SOON",
        status: "Contact Us",
        description:
            "Laptop accessories available through PM Traders. Contact us for current stock and pricing.",
        images: [],
        featured: false
    }

];


/* =========================================================
   PRODUCT HELPERS
   ========================================================= */

function getProducts() {
    return PRODUCTS;
}

function getProductById(id) {
    return PRODUCTS.find(product => product.id === id);
}

function getProductsByCategory(category) {
    if (!category || category === "All") {
        return PRODUCTS;
    }

    return PRODUCTS.filter(product =>
        product.category.toLowerCase() === category.toLowerCase()
    );
}

function getFeaturedProducts() {
    return PRODUCTS.filter(product => product.featured);
}

function getSaleProducts() {
    return PRODUCTS.filter(product =>
        product.oldPrice &&
        product.oldPrice > product.price
    );
}

function searchProducts(searchTerm) {

    const term = String(searchTerm || "")
        .trim()
        .toLowerCase();

    if (!term) {
        return PRODUCTS;
    }

    return PRODUCTS.filter(product => {

        const searchableText = [
            product.name,
            product.category,
            product.description,
            product.status
        ]
            .join(" ")
            .toLowerCase();

        return searchableText.includes(term);
    });
}


/* =========================================================
   PRICE HELPERS
   ========================================================= */

function formatPrice(price) {

    if (!price || Number(price) <= 0) {
        return "Contact us";
    }

    return "R" + Number(price).toLocaleString("en-ZA");
}


function getDiscountPercentage(product) {

    if (
        !product.oldPrice ||
        product.oldPrice <= product.price
    ) {
        return 0;
    }

    return Math.round(
        ((product.oldPrice - product.price) /
            product.oldPrice) * 100
    );
}


/* =========================================================
   STOCK HELPERS
   ========================================================= */

function getStockStatus(product) {

    if (!product) {
        return "Unavailable";
    }

    if (product.stock <= 0) {
        return product.status || "Out of Stock";
    }

    if (product.stock <= 3) {
        return "Low Stock";
    }

    return "In Stock";
}


function isInStock(product) {

    return Boolean(
        product &&
        Number(product.stock) > 0
    );
}


/* =========================================================
   IMAGE HELPER
   ========================================================= */

function getProductImage(product) {

    if (
        product &&
        Array.isArray(product.images) &&
        product.images.length
    ) {
        return product.images[0];
    }

    return "";
}


/* =========================================================
   GLOBAL ACCESS
   ========================================================= */

window.PM_TRADERS = {
    products: PRODUCTS,
    getProducts,
    getProductById,
    getProductsByCategory,
    getFeaturedProducts,
    getSaleProducts,
    searchProducts,
    formatPrice,
    getDiscountPercentage,
    getStockStatus,
    isInStock,
    getProductImage
};
