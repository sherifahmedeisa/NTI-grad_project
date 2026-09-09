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
const categoryMap = {
  'Off-white Pillow': 'Bedroom',
  'Table Lamp': 'Bedroom',
  'White Drawer unit': 'Bedroom',
  'Cozy Sofa': 'Living Room',
  'Bamboo Basket': 'Kitchen',
  'Black Tray table': 'Kitchen'
};
const categorySelect = document.querySelector('.filter-select');

if (categorySelect) {
  categorySelect.addEventListener('change', (e) => {
    const selectedCategory = e.target.options[e.target.selectedIndex].text.trim();
    const productCards = document.querySelectorAll('#productGrid > div');

    productCards.forEach((cardCol) => {
      const titleElement = cardCol.querySelector('.card-title');
      
      if (!titleElement) return;

      const productTitle = titleElement.textContent.trim();
      const productCategory = categoryMap[productTitle];
      if (selectedCategory === productCategory || selectedCategory === 'All Categories') {
        cardCol.style.display = 'block';
      } else {
        cardCol.style.display = 'none';
      }
    });
  });
}
});