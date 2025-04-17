// function showDiv(id) {
//     document.querySelectorAll('.toggle-div').forEach(div => div.style.display = 'none');
//     document.getElementById(id).style.display = 'block';
//   }

//   function toggleProducts() {
//     const products = document.getElementById('products');
//     products.style.display = products.style.display === 'block' ? 'none' : 'block';
//   }

function showDiv(id) {
  // Hides all top-level toggle divs (home, about, products, contact)
  document.querySelectorAll('.toggle-div').forEach(div => div.style.display = 'none');

  // Show selected top-level section
  const selected = document.getElementById(id);
  if (selected) selected.style.display = 'block';

  // Optional: Show a default products tab (e.g., cakes) when entering products
  if (id === 'products') {
    showProductPage('cakes');
  }
}

function showProductPage(id) {
  // Hides all product-specific tabs
  document.querySelectorAll('.products-toggle-div').forEach(div => div.style.display = 'none');

  // Show selected product tab
  const selected = document.getElementById(id);
  if (selected) selected.style.display = 'block';
}

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu button');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

navLinks.forEach(button => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});