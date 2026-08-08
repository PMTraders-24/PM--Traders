/* =========================================================
   PM TRADERS
   MASTER PRODUCT CATALOGUE
   ========================================================= */

const PRODUCTS = [

    {
        id: 1,
        name: "8 Inch Super Double Drawn Human Hair",
        price: 850,
        category: "Human Hair",
        stock: 5,
        badge: "POPULAR",
        image: "8 Inch Super Double Drawn.webp",
        images: [
            "8 Inch Super Double Drawn.webp"
        ],
        description: "8 Inch Super Double Drawn human hair."
    },

    {
        id: 2,
        name: "iPhone 13 Pro Max",
        price: 7500,
        oldPrice: 8500,
        category: "Smartphones",
        stock: 3,
        badge: "SALE",
        image: "iPhone 13 Pro Max.jpeg",
        images: [
            "iPhone 13 Pro Max.jpeg"
        ],
        description: "iPhone 13 Pro Max. Contact PM Traders to confirm storage, colour and exact condition."
    },

    {
        id: 3,
        name: "Classic Ladies Dress",
        price: 230,
        category: "Fashion",
        stock: 10,
        image: "Classic Ladies Dress.jpg",
        images: [
            "Classic Ladies Dress.jpg"
        ],
        description: "Classic ladies fashion dress. Contact PM Traders to confirm available sizes."
    },

    {
        id: 4,
        name: "20 Inch Curly Curls",
        price: 970,
        category: "Human Hair",
        stock: 5,
        badge: "POPULAR",
        image: "20 inch Curly Curls.jpeg",
        images: [
            "20 inch Curly Curls.jpeg"
        ],
        description: "20 Inch Curly Curls human hair."
    },

    {
        id: 5,
        name: "iPhone 17 Pro Max",
        price: 24000,
        oldPrice: 26000,
        category: "Smartphones",
        stock: 2,
        badge: "NEW",
        image: "iPhone 17 Pro Max.webp",
        images: [
            "iPhone 17 Pro Max.webp"
        ],
        description: "iPhone 17 Pro Max. Contact PM Traders to confirm exact specification and availability."
    },

    {
        id: 6,
        name: "22 Inch Water Wave Human Hair",
        price: null,
        category: "Human Hair",
        stock: 5,
        badge: "NEW",
        image: "22 Inch water wave human hair.webp",
        images: [
            "22 Inch water wave human hair.webp"
        ],
        description: "22 Inch Water Wave human hair.",
        priceOnRequest: true
    },

    {
        id: 7,
        name: "8 Inch SDD Weave",
        price: null,
        category: "Human Hair",
        stock: 5,
        image: "8 inch SDD Weave",
        images: [
            "8 inch SDD Weave"
        ],
        description: "8 Inch SDD Weave.",
        priceOnRequest: true
    },

    {
        id: 8,
        name: "8 Inch SDD Pixey Curly",
        price: null,
        category: "Human Hair",
        stock: 5,
        image: "8 inch SDD pixey curly.jpg",
        images: [
            "8 inch SDD pixey curly.jpg"
        ],
        description: "8 Inch SDD Pixey Curly human hair.",
        priceOnRequest: true
    },

    {
        id: 9,
        name: "Classic Caught",
        price: 230,
        category: "Fashion",
        stock: 10,
        image: "Classic Caught.jpg",
        images: [
            "Classic Caught.jpg"
        ],
        description: "Classic Caught fashion item."
    },

    {
        id: 10,
        name: "Classic Rainbow Nation Dress",
        price: 230,
        category: "Fashion",
        stock: 10,
        image: "Classic Rainbow Nation Dress.jpg",
        images: [
            "Classic Rainbow Nation Dress.jpg"
        ],
        description: "Classic Rainbow Nation Dress."
    },

    {
        id: 11,
        name: "Sky Blue Dress",
        price: 230,
        category: "Fashion",
        stock: 10,
        image: "Sky Blue Dress.jpg",
        images: [
            "Sky Blue Dress.jpg"
        ],
        description: "Sky Blue ladies dress."
    },

    {
        id: 12,
        name: "Sleeveless Classic Attire",
        price: 230,
        category: "Fashion",
        stock: 10,
        image: "Sleeveless Classic Attire.jpg",
        images: [
            "Sleeveless Classic Attire.jpg"
        ],
        description: "Sleeveless Classic Attire."
    },

    {
        id: 13,
        name: "Smart Casual Summer Two Piece",
        price: null,
        category: "Fashion",
        stock: 10,
        image: "Smart Casual Summer Two piece.jpg",
        images: [
            "Smart Casual Summer Two piece.jpg"
        ],
        description: "Smart Casual Summer Two Piece outfit.",
        priceOnRequest: true
    },

    {
        id: 14,
        name: "Smart Colour Dress",
        price: 230,
        category: "Fashion",
        stock: 10,
        image: "Smart Colour Dress.jpg",
        images: [
            "Smart Colour Dress.jpg"
        ],
        description: "Smart Colour Dress."
    },

    {
        id: 15,
        name: "Smart Colour Full Dress",
        price: 230,
        category: "Fashion",
        stock: 10,
        image: "Smart Colour full dress.jpg",
        images: [
            "Smart Colour full dress.jpg"
        ],
        description: "Smart Colour Full Dress."
    },

    {
        id: 16,
        name: "Smart Dress",
        price: 230,
        category: "Fashion",
        stock: 10,
        image: "Smart Dress.jpg",
        images: [
            "Smart Dress.jpg"
        ],
        description: "Smart Dress."
    }

];

/*
   Keep the global name expected by the storefront.
*/
window.PRODUCTS = PRODUCTS;
