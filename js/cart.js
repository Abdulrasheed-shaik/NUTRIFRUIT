document.addEventListener('DOMContentLoaded', function () {
  updateCartCount();
});

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('checkoutCart')) || [];
  document.getElementById('cart-count').textContent = cart.length;
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('checkoutCart')) || [];
  cart.push(product);
  localStorage.setItem('checkoutCart', JSON.stringify(cart));
  updateCartCount();
}
