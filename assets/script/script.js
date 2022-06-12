const cart = [];
let total = 0;

//const listProducts = document.getElementsByClassName("products-list");
const listProducts = document.querySelector(".products-list");
const cartButtonRemove = document.querySelector(".products-selected");
listProducts.addEventListener("click", addToCart);
cartButtonRemove.addEventListener("click", removeFromCart);

function addToCart(event) {
  if (event.target.tagName === "BUTTON") {
    const id = event.target.id;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        // aqui vamos incrementar o valor total usando o preço do produto adicionado
        // alterar no dom o valo do campo preço e quantidade
        cart.push(products[i]);
      }
    }
    console.log(cart);
  }
  renderCart();
}

function renderCart() {
  const cartProducts = document.querySelector(".products-selected");
  cartProducts.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    createProduct(cart[i]);
  }
}

function createProduct(product) {
  const cartProducts = document.querySelector(".products-selected");

  const productCard = document.createElement("li");
  productCard.className = "flex";

  productCard.innerHTML = `
    <div class="product-image">
                <img
                  src="${product.img}"
                  alt="imagem do produto"
                />
              </div>

              <div>
                <div class="flex">
                  <h3 class="title-2 mini-descricao">
                    ${product.title}
                  </h3>
                  <button class="trash-btn">
                    <img src="./assets/img/trash.png" alt="icone lixeira" />
                  </button>
                </div>
                <div class="footer-cart">
                  <p class="text-caption">R$ ${product.price}</p>
                </div>
              </div>
    `;

  cartProducts.appendChild(productCard);
}

function removeFromCart(event) {
  //console.log(event.target.parentElement.parentElement);
  //console.log(event.target.closest("li"));
  const productToRemove = event.target.closest("li");

  // aquie devemos tirar o produto do array cart
  productToRemove.remove();
}
