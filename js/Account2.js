document.addEventListener('DOMContentLoaded', () => {
  let cartCount = 0;
  document.addEventListener('click', (event) => {  
    if (event.target.classList.contains('add-to-cart-btn')) {
      cartCount++;
      const cartBadge = document.getElementById('cartBadge');
      if (cartBadge) {
        cartBadge.textContent = cartCount;
      }
    }
    if (event.target.classList.contains('remove-btn')) {
      const row = event.target.closest('tr');
      if (row) {
        row.remove();
      }         
    }
  });
});