// Function to toggle the visibility of the top-level sections
// (home, about, products, contact) and their respective sub-sections

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

// Function to toggle the visibility of product sub-sections (cakes, cupcakes, etc.)
// and their respective product items
function showProductPage(id) {
  // Hide all product sections
  document.querySelectorAll('.products-toggle-div').forEach(div => {
    div.style.display = 'none';
  });

  // Show the selected section
  const selected = document.getElementById(id);
  if (selected) selected.style.display = 'block';

  // Remove "active" class from all buttons
  document.querySelectorAll('.products-nav .btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Add "active" class to the clicked button
  const clickedButton = document.querySelector(`.products-nav button[onclick*="${id}"]`);
  if (clickedButton) clickedButton.classList.add('active');
}

const hamburger = document.querySelector('.hamburger');
const navMenu = document.getElementById('navMenu'); // Only the mobile menu
const navLinks = navMenu.querySelectorAll('a'); // Target <a> tags inside mobile menu

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close menu on link click (mobile only)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});
