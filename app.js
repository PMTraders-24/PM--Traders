const Z = n =>
  new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    maximumFractionDigits: 0
  }).format(n);

let cart = JSON.parse(localStorage.getItem('pmCart') || '[]');

const grid = document.querySelector('#grid');
const cat = document.querySelector('#cat');
const search = document.querySelector('#search');

function getProducts() {
  return Array.isArray(PRODUCTS) ? PRODUCTS : [];
}

function initCategories() {
  if (!cat) return;

  const categories = [...new Set(
    getProducts().map(p => p.category).filter(Boolean)
  )];

  cat.innerHTML = '<option value="all">All categories</option>';

  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    cat.appendChild(option);
  });
}

function render() {
  if (!grid) return;

  const products = getProducts();

  const q = search
    ? search.value.toLowerCase().trim()
    : '';

  const c = cat
    ? cat.value
    : 'all';

  const filtered = products.filter(p => {
    const matchesCategory =
      c === 'all' || p.category === c;

    const matchesSearch =
      p.name.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  if (!filtered.length) {
    grid.innerHTML = `
      <div style="
        grid-column:1/-1;
        padding:50px 20px;
        text-align:center;
        background:#fff;
        border-radius:15px;
        border:1px solid #eee;
      ">
        <h3>No products found</h3>
        <p>Try another search or category.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <article class="card">

      <div class="art">
        <img
          src="${p.image}"
          alt="${p.name}"
          loading="lazy"
          onerror="this.style.display='none'; this.parentElement.classList.add('image-error');"
        >
      </div>

      <div class="body">

        <span class="tag">${p.category}</span>

        <h3>${p.name}</h3>

        <div class="price">
          ${Z(p.price)}
        </div>

        <button
          class="add"
          type="button"
          onclick="add(${p.id})"
        >
          Add to cart
        </button>

      </div>

    </article>
  `).join('');
}

function save() {
  localStorage.setItem('pmCart', JSON.stringify(cart));
  renderCart();
}

function add(id) {
  const product = getProducts().find(p => p.id === id);

  if (!product) return;

  const existing = cart.find(i => i.id === id);

  if (existing) {
    existing.q++;
  } else {
    cart.push({
      id: id,
      q: 1
    });
  }

  save();
  openCart();
}

function renderCart() {
  const count = document.querySelector('#count');
  const sub = document.querySelector('#sub');
  const items = document.querySelector('#items');

  if (!count || !sub || !items) return;

  const totalItems = cart.reduce(
    (sum, item) => sum + item.q,
    0
  );

  count.textContent = totalItems;

  const subtotal = cart.reduce((total, item) => {
    const product = getProducts().find(
      p => p.id === item.id
    );

    return total + (product ? product.price * item.q : 0);
  }, 0);

  sub.textContent = Z(subtotal);

  if (!cart.length) {
    items.innerHTML = `
      <p style="padding:20px">
        Your cart is empty.
      </p>
    `;
    return;
  }

  items.innerHTML = cart.map(item => {
    const product = getProducts().find(
      p => p.id === item.id
    );

    if (!product) return '';

    return `
      <div class="item">

        <img
          src="${product.image}"
          alt="${product.name}"
        >

        <b>${product.name}</b>

        <br>

        ${item.q} × ${Z(product.price)}

        <br>

        <button
          type="button"
          onclick="removeItem(${product.id})"
        >
          Remove
        </button>

      </div>
    `;
  }).join('');
}

function removeItem(id) {
  cart = cart.filter(item => item.id !== id);
  save();
}

function openCart() {
  const cartBox = document.querySelector('#cart');
  const shade = document.querySelector('#shade');

  if (cartBox) {
    cartBox.classList.add('open');
  }

  if (shade) {
    shade.style.display = 'block';
  }
}

function closeCart() {
  const cartBox = document.querySelector('#cart');
  const shade = document.querySelector('#shade');

  if (cartBox) {
    cartBox.classList.remove('open');
  }

  if (shade) {
    shade.style.display = 'none';
  }
}

function updateTotal() {
  const totalElement = document.querySelector('#total');
  const deliveryOption = document.querySelector('#deliveryOpt');

  if (!totalElement || !deliveryOption) return;

  const subtotal = cart.reduce((total, item) => {
    const product = getProducts().find(
      p => p.id === item.id
    );

    return total + (product ? product.price * item.q : 0);
  }, 0);

  let delivery = 30;

  if (
    subtotal >= 1500 ||
    deliveryOption.value === 'collection'
  ) {
    delivery = 0;
  } else if (
    deliveryOption.value === 'outside'
  ) {
    delivery = 60;
  }

  totalElement.textContent = Z(subtotal + delivery);
}

const cartBtn = document.querySelector('#cartBtn');
const closeBtn = document.querySelector('#close');
const shade = document.querySelector('#shade');
const checkout = document.querySelector('#checkout');
const xBtn = document.querySelector('#x');
const deliveryOpt = document.querySelector('#deliveryOpt');
const form = document.querySelector('#form');

if (cartBtn) {
  cartBtn.onclick = openCart;
}

if (closeBtn) {
  closeBtn.onclick = closeCart;
}

if (shade) {
  shade.onclick = closeCart;
}

if (search) {
  search.oninput = render;
}

if (cat) {
  cat.onchange = render;
}

if (checkout) {
  checkout.onclick = () => {

    if (!cart.length) {
      alert('Your cart is empty.');
      return;
    }

    closeCart();

    const modal = document.querySelector('#modal');

    if (modal) {
      modal.classList.add('show');
    }

    updateTotal();
  };
}

if (xBtn) {
  xBtn.onclick = () => {
    const modal = document.querySelector('#modal');

    if (modal) {
      modal.classList.remove('show');
    }
  };
}

if (deliveryOpt) {
  deliveryOpt.onchange = updateTotal;
}

if (form) {
  form.onsubmit = e => {

    e.preventDefault();

    if (!cart.length) {
      alert('Your cart is empty.');
      return;
    }

    const f = new FormData(form);

    const subtotal = cart.reduce((total, item) => {
      const product = getProducts().find(
        p => p.id === item.id
      );

      return total + (
        product
          ? product.price * item.q
          : 0
      );
    }, 0);

    let delivery = 30;

    if (
      subtotal >= 1500 ||
      f.get('delivery') === 'collection'
    ) {
      delivery = 0;
    } else if (
      f.get('delivery') === 'outside'
    ) {
      delivery = 60;
    }

    const lines = cart.map(item => {

      const product = getProducts().find(
        p => p.id === item.id
      );

      if (!product) return '';

      return `• ${product.name} x${item.q} — ${Z(product.price * item.q)}`;

    }).filter(Boolean).join('%0A');

    const deliveryText =
      delivery === 0
        ? 'Free / Collection'
        : Z(delivery);

    const msg =
      `*PM TRADERS ORDER*%0A%0A` +
      `${lines}%0A%0A` +
      `*Subtotal:* ${Z(subtotal)}%0A` +
      `*Delivery:* ${deliveryText}%0A` +
      `*Total:* ${Z(subtotal + delivery)}%0A%0A` +
      `*Customer:* ${encodeURIComponent(f.get('name'))}%0A` +
      `*Phone:* ${encodeURIComponent(f.get('phone'))}%0A` +
      `*Email:* ${encodeURIComponent(f.get('email'))}%0A` +
      `*Address:* ${encodeURIComponent(f.get('address'))}`;

    window.open(
      `https://wa.me/27842748559?text=${msg}`,
      '_blank'
    );

    cart = [];

    save();

    const modal = document.querySelector('#modal');

    if (modal) {
      modal.classList.remove('show');
    }
  };
}

/* START STORE */

initCategories();
render();
renderCart();
