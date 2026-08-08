<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Product | PM Traders</title>

<meta name="description" content="PM Traders product details">

<meta name="theme-color" content="#111111">

<link rel="stylesheet" href="style.css">

<style>

/* =========================================================
   PM TRADERS V2 — PRODUCT PAGE
   ========================================================= */

.product-page{
    max-width:1200px;
    margin:auto;
    padding:45px 20px 70px;
}

.breadcrumb{
    font-size:12px;
    color:#777;
    margin-bottom:25px;
}

.breadcrumb a{
    color:#111;
    font-weight:700;
}

.product-layout{
    display:grid;
    grid-template-columns:1.05fr .95fr;
    gap:45px;
    background:#fff;
    border:1px solid #e7e7e7;
    border-radius:22px;
    padding:25px;
}

.gallery{
    min-width:0;
}

.main-image{
    height:540px;
    background:#f2f2f2;
    border-radius:18px;
    overflow:hidden;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
}

.main-image img{
    width:100%;
    height:100%;
    object-fit:contain;
}

.gallery-badge{
    position:absolute;
    top:15px;
    left:15px;
    background:#d62828;
    color:#fff;
    padding:7px 11px;
    border-radius:7px;
    font-size:11px;
    font-weight:900;
    z-index:3;
}

.thumbnails{
    display:flex;
    gap:10px;
    margin-top:12px;
    overflow-x:auto;
    padding-bottom:5px;
}

.thumbnail{
    width:78px;
    height:78px;
    flex:0 0 78px;
    border:2px solid #eee;
    background:#fff;
    border-radius:10px;
    overflow:hidden;
    cursor:pointer;
}

.thumbnail.active{
    border-color:#f5c542;
}

.thumbnail img{
    width:100%;
    height:100%;
    object-fit:cover;
}

.product-details{
    padding:15px 5px;
}

.product-category{
    color:#999;
    text-transform:uppercase;
    font-size:11px;
    font-weight:900;
    letter-spacing:.5px;
}

.product-title{
    font-size:clamp(30px,4vw,48px);
    line-height:1.05;
    margin:8px 0 12px;
    letter-spacing:-1.5px;
}

.product-rating{
    color:#eab300;
    font-size:14px;
    margin-bottom:15px;
}

.product-price{
    display:flex;
    align-items:center;
    gap:12px;
    flex-wrap:wrap;
    margin-bottom:8px;
}

.current-price{
    font-size:30px;
    font-weight:900;
}

.old-price{
    color:#999;
    text-decoration:line-through;
    font-size:16px;
}

.discount{
    background:#d62828;
    color:#fff;
    padding:5px 8px;
    border-radius:5px;
    font-size:10px;
    font-weight:900;
}

.product-description{
    color:#666;
    font-size:14px;
    margin:20px 0;
    line-height:1.7;
}

.stock-box{
    display:flex;
    align-items:center;
    gap:9px;
    background:#f7f7f7;
    border-radius:10px;
    padding:13px;
    margin-bottom:20px;
}

.stock-dot{
    width:10px;
    height:10px;
    border-radius:50%;
    background:#25a244;
}

.stock-dot.low{
    background:#f5a623;
}

.stock-dot.out{
    background:#d62828;
}

.quantity-row{
    display:flex;
    gap:10px;
    align-items:center;
    margin-bottom:14px;
}

.quantity{
    display:flex;
    border:1px solid #ddd;
    border-radius:9px;
    overflow:hidden;
}

.quantity button{
    width:42px;
    height:46px;
    border:0;
    background:#f7f7f7;
    font-size:20px;
}

.quantity input{
    width:50px;
    height:46px;
    border:0;
    border-left:1px solid #ddd;
    border-right:1px solid #ddd;
    text-align:center;
    font-weight:800;
    outline:none;
}

.product-add{
    width:100%;
    border:0;
    border-radius:10px;
    padding:16px;
    background:#111;
    color:#fff;
    font-weight:900;
    font-size:14px;
}

.product-add:hover{
    background:#292929;
}

.product-add:disabled{
    opacity:.5;
    cursor:not-allowed;
}

.whatsapp-order{
    width:100%;
    border:0;
    border-radius:10px;
    padding:15px;
    background:#25d366;
    color:#fff;
    font-weight:900;
    margin-top:9px;
}

.info-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:10px;
    margin-top:20px;
}

.info-box{
    border:1px solid #eee;
    border-radius:10px;
    padding:14px;
}

.info-box strong{
    display:block;
    font-size:11px;
    margin-bottom:4px;
}

.info-box span{
    color:#777;
    font-size:11px;
}

.related{
    max-width:1200px;
    margin:auto;
    padding:0 20px 70px;
}

.related h2{
    font-size:28px;
    margin-bottom:20px;
}

.related-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:15px;
}

.related-card{
    background:#fff;
    border:1px solid #e7e7e7;
    border-radius:15px;
    overflow:hidden;
    cursor:pointer;
}

.related-card img{
    width:100%;
    height:200px;
    object-fit:cover;
}

.related-card-info{
    padding:12px;
}

.related-card-info small{
    color:#999;
    font-size:9px;
    text-transform:uppercase;
}

.related-card-info strong{
    display:block;
    font-size:13px;
    margin:4px 0;
}

.related-card-info span{
    font-weight:900;
    font-size:14px;
}

.product-loading{
    text-align:center;
    padding:100px 20px;
}

.product-error{
    max-width:600px;
    margin:80px auto;
    text-align:center;
    background:#fff;
    padding:40px 20px;
    border-radius:18px;
}

@media(max-width:800px){

    .product-layout{
        grid-template-columns:1fr;
        padding:15px;
        gap:20px;
    }

    .main-image{
        height:400px;
    }

    .product-details{
        padding:5px;
    }

    .related-grid{
        grid-template-columns:repeat(2,1fr);
    }

}

@media(max-width:500px){

    .product-page{
        padding:25px 12px 50px;
    }

    .main-image{
        height:320px;
    }

    .product-title{
        font-size:30px;
    }

    .current-price{
        font-size:25px;
    }

    .info-grid{
        grid-template-columns:1fr;
    }

}

</style>
</head>

<body>

<div class="topbar">
    🚚 Nationwide delivery •
    <b>FREE DELIVERY OVER R1,500</b>
</div>


<header>

<nav class="nav">

    <a class="logo" href="index.html">

        <div class="logo-mark">
            PM
        </div>

        <div>
            PM <span>TRADERS</span>
        </div>

    </a>


    <div class="navlinks">

        <a href="index.html">
            Home
        </a>

        <a href="index.html#shop">
            Shop
        </a>

        <a href="index.html#categories">
            Categories
        </a>

        <a href="index.html#deals">
            Deals
        </a>

        <a href="index.html#contact">
            Contact
        </a>

    </div>


    <div class="actions">

        <button
            class="icon"
            type="button"
            onclick="goHomeSearch()"
            aria-label="Search"
        >
            🔍
        </button>


        <button
            class="icon"
            type="button"
            onclick="openCartPage()"
            aria-label="Cart"
        >
            🛒

            <span
                class="count"
                id="cartCount"
            >
                0
            </span>

        </button>

    </div>

</nav>

</header>


<main>

<section class="product-page">

    <div class="breadcrumb">

        <a href="index.html">
            Home
        </a>

        &nbsp; / &nbsp;

        <span id="breadcrumbProduct">
            Product
        </span>

    </div>


    <div
        id="productContainer"
        class="product-loading"
    >

        Loading product...

    </div>

</section>


<section
    class="related"
    id="relatedSection"
    style="display:none"
>

    <h2>
        You may also like
    </h2>

    <div
        class="related-grid"
        id="relatedProducts"
    ></div>

</section>

</main>


<footer>

    <div class="bottom">

        ©
        <span id="year"></span>
        PM Traders.
        All Rights Reserved.

    </div>

</footer>


<div
    id="toast"
    class="toast"
></div>


<script src="products.js"></script>


<script>

(function(){

"use strict";


/* =====================================================
   HELPERS
   ===================================================== */

const catalogue =
    window.PM_TRADERS &&
    window.PM_TRADERS.products
        ? window.PM_TRADERS.products
        : window.PRODUCTS || [];


function getProduct(){

    const params =
        new URLSearchParams(
            window.location.search
        );

    const id =
        params.get("id");

    if(!id){
        return null;
    }

    return catalogue.find(
        product =>
            product.id === id
    );

}


function money(value){

    if(
        value === null ||
        value === undefined ||
        Number(value) <= 0
    ){
        return "Contact us";
    }

    return "R" +
        Number(value)
        .toLocaleString("en-ZA");

}


function imagePath(file){

    if(!file){
        return "";
    }

    return encodeURI(file);

}


function escapeHTML(value){

    return String(value || "")
        .replace(/&/g,"&amp;")
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;")
        .replace(/"/g,"&quot;")
        .replace(/'/g,"&#039;");

}


/* =====================================================
   CART
   ===================================================== */

function getCart(){

    try{

        return JSON.parse(
            localStorage.getItem(
                "pmTradersCart"
            )
        ) || [];

    }catch(error){

        return [];

    }

}


function saveCart(cart){

    localStorage.setItem(
        "pmTradersCart",
        JSON.stringify(cart)
    );

    updateCartCount();

}


function updateCartCount(){

    const count =
        getCart().reduce(
            (total,item) =>
                total +
                Number(item.quantity || 0),
            0
        );


    const element =
        document.getElementById(
            "cartCount"
        );


    if(element){
        element.textContent =
            count;
    }

}


function addProductToCart(
    product,
    quantity
){

    if(
        !product ||
        !product.price ||
        product.price <= 0
    ){

        whatsappProduct(
            product,
            quantity
        );

        return;

    }


    if(
        !product.stock ||
        product.stock <= 0
    ){

        showToast(
            "This product is currently out of stock."
        );

        return;

    }


    const cart =
        getCart();


    const existing =
        cart.find(
            item =>
                item.id ===
                product.id
        );


    const amount =
        Math.max(
            1,
            Number(quantity || 1)
        );


    if(existing){

        existing.quantity =
            Math.min(
                product.stock,
                existing.quantity +
                amount
            );

    }else{

        cart.push({

            id: product.id,

            quantity:
                Math.min(
                    product.stock,
                    amount
                )

        });

    }


    saveCart(cart);


    showToast(
        product.name +
        " added to cart."
    );

}


/* =====================================================
   WHATSAPP
   ===================================================== */

function whatsappProduct(
    product,
    quantity
){

    if(!product){
        return;
    }


    const message =
        "Hello PM Traders 👋\n\n" +
        "I am interested in:\n\n" +
        product.name +
        "\nQuantity: " +
        (quantity || 1) +
        "\n\n" +
        "Please send me the current price and availability.";


    window.open(
        "https://wa.me/27842748559?text=" +
        encodeURIComponent(message),
        "_blank"
    );

}


/* =====================================================
   RENDER PRODUCT
   ===================================================== */

function renderProduct(){

    const product =
        getProduct();


    const container =
        document.getElementById(
            "productContainer"
        );


    if(!product){

        container.innerHTML = `

            <div class="product-error">

                <div
                    style="
                        font-size:55px;
                        margin-bottom:15px;
                    "
                >
                    🔎
                </div>

                <h2>
                    Product not found
                </h2>

                <p
                    style="
                        color:#777;
                        margin:10px 0 20px;
                    "
                >
                    This product may have been
                    removed or the link is incorrect.
                </p>

                <a
                    href="index.html#shop"
                    class="btn primary"
                >
                    Back to Shop
                </a>

            </div>

        `;

        return;

    }


    document.title =
        product.name +
        " | PM Traders";


    document.getElementById(
        "breadcrumbProduct"
    ).textContent =
        product.name;


    const images =
        product.images &&
        product.images.length
            ? product.images
            : [];


    const firstImage =
        images.length
            ? imagePath(images[0])
            : "";


    const hasSale =
        product.oldPrice &&
        product.oldPrice >
        product.price;


    const discount =
        hasSale
            ? Math.round(
                (
                    (
                        product.oldPrice -
                        product.price
                    ) /
                    product.oldPrice
                ) * 100
              )
            : 0;


    const stock =
        Number(product.stock || 0);


    let stockText =
        product.status ||
        "In Stock";


    let stockClass = "";


    if(stock <= 0){

        stockText =
            product.status ||
            "Out of Stock";

        stockClass =
            "out";

    }else if(stock <= 3){

        stockText =
            "Low Stock";

        stockClass =
            "low";

    }


    container.className =
        "product-layout";


    container.innerHTML = `

        <div class="gallery">

            <div class="main-image">

                ${
                    product.badge
                        ? `
                            <div class="gallery-badge">
                                ${escapeHTML(product.badge)}
                            </div>
                          `
                        : ""
                }


                ${
                    firstImage
                        ? `
                            <img
                                id="mainProductImage"
                                src="${firstImage}"
                                alt="${escapeHTML(product.name)}"
                            >
                          `
                        : `
                            <div
                                style="
                                    font-size:90px;
                                "
                            >
                                ${
                                    product.category ===
                                    "Smartphones"
                                        ? "📱"
                                        : product.category ===
                                          "Human Hair"
                                            ? "💇"
                                            : "👗"
                                }
                            </div>
                          `
                }

            </div>


            ${
                images.length > 1
                    ? `
                        <div class="thumbnails">

                            ${images.map(
                                (image,index) => `

                                    <button
                                        class="thumbnail ${
                                            index === 0
                                                ? "active"
                                                : ""
                                        }"
                                        type="button"
                                        onclick="changeImage(
                                            '${escapeHTML(
                                                image
                                            )}',
                                            this
                                        )"
                                    >

                                        <img
                                            src="${imagePath(image)}"
                                            alt="${escapeHTML(product.name)}"
                                        >

                                    </button>

                                `
                            ).join("")}

                        </div>
                      `
                    : ""
            }

        </div>


        <div class="product-details">

            <div class="product-category">

                ${escapeHTML(
                    product.category
                )}

            </div>


            <h1 class="product-title">

                ${escapeHTML(
                    product.name
                )}

            </h1>


            <div class="product-rating">

                ★★★★★
                <span
                    style="
                        color:#777;
                        font-size:11px;
                    "
                >
                    PM Traders
                </span>

            </div>


            <div class="product-price">

                <span class="current-price">

                    ${money(product.price)}

                </span>


                ${
                    hasSale
                        ? `
                            <span class="old-price">
                                ${money(product.oldPrice)}
                            </span>

                            <span class="discount">
                                SAVE ${discount}%
                            </span>
                          `
                        : ""
                }

            </div>


            <div class="stock-box">

                <span
                    class="stock-dot ${stockClass}"
                ></span>

                <strong>
                    ${escapeHTML(stockText)}
                </strong>

                ${
                    stock > 0 &&
                    stock <= 3
                        ? `
                            <span
                                style="
                                    color:#777;
                                    font-size:11px;
                                "
                            >
                                • Only ${stock} left
                            </span>
                          `
                        : ""
                }

            </div>


            <p class="product-description">

                ${escapeHTML(
                    product.description
                )}

            </p>


            ${
                stock > 0 &&
                product.price > 0
                    ? `

                        <div class="quantity-row">

                            <div class="quantity">

                                <button
                                    type="button"
                                    onclick="changeProductQuantity(-1)"
                                >
                                    −
                                </button>

                                <input
                                    id="productQuantity"
                                    type="number"
 
