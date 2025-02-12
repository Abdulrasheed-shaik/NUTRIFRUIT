document.addEventListener('DOMContentLoaded', function() {
  updateCartCount();
});

function updateCartCount() {
  const cartCountElement = document.querySelector('.cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = getCartCount();
  }
}

function getCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  return cart.reduce((total, product) => total + product.quantity, 0);
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProduct = cart.find(p => p.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}
