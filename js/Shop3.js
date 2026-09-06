document.addEventListener('DOMContentLoaded', () => {
  const wishlistButtons = document.querySelectorAll('.toggle-wishlist');
  wishlistButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const icon = button.querySelector('i');
      if (icon.classList.contains('bi-heart')) {
        icon.classList.remove('bi-heart');
        icon.classList.add('bi-heart-fill', 'text-danger');
      } else {
        icon.classList.remove('bi-heart-fill', 'text-danger');
        icon.classList.add('bi-heart');
      }
    });
  });
  const cartBadge = document.querySelector('.navbar .badge');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  let cartCount = 0;

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      cartCount++;
      cartBadge.textContent = cartCount;
    });
  });
  const newsletterForm = document.getElementById('newsletterForm');
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    newsletterForm.reset();
  });
});