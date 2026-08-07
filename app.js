function render(){
  let q=search.value.toLowerCase().trim();
  let c=cat.value;

  grid.innerHTML=PRODUCTS
    .filter(p=>
      (c==='all'||p.category===c) &&
      p.name.toLowerCase().includes(q)
    )
    .map(p=>`
      <article class="card">

        <div class="art">
          <img
            src="${p.image}"
            alt="${p.name}"
            loading="lazy"
          >
        </div>

        <div class="body">

          <span class="tag">${p.category}</span>

          <h3>${p.name}</h3>

          <div class="price">${Z(p.price)}</div>

          <button
            class="add"
            type="button"
            onclick="add(${p.id})"
          >
            Add to cart
          </button>

        </div>

      </article>
    `)
    .join('');
}
