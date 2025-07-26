
// Toggle mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
  
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    // Alert on Book Now buttons
    const bookButtons = document.querySelectorAll('.btn, .top-btn');
    bookButtons.forEach(button => {
      button.addEventListener('click', () => {
        alert("Thank you for booking with Visit Hostel!");
      });
    });
  });