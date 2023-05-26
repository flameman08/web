const homepage = document.getElementById('homepage');
const webstore = document.getElementById('webstore');
const goToStoreButton = document.getElementById('go-to-store');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.querySelector('.cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout');
let total = 0;

goToStoreButton.addEventListener('click', function() {
  homepage.style.display = 'none';
  webstore.style.display = 'block';
});

addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

checkoutButton.addEventListener('click', checkout);

function addToCart(event) {
  const product = event.target.parentNode;
  const productTitle = product.querySelector('h3').textContent;
  const productPrice = product.querySelector('p').textContent;
  const numericalPrice = parseFloat(productPrice.replace('₱', ''));
  const cartItem = document.createElement('li');
  cartItem.innerHTML = `
    <span>${productTitle}</span>
  `;
  cartItemsList.appendChild(cartItem);
  updateTotal(numericalPrice);
}

function updateTotal(price) {
  total += price;
  cartTotal.textContent = total.toFixed(2);
}

function checkout() {
  alert('Checkout clicked!');
  // Perform the checkout logic here
  // Reset the cart items and total
  cartItemsList.innerHTML = '';
  cartTotal.textContent = '0.00';
  total = 0;
}
