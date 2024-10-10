// Toggle the visibility of the navigation links for mobile view
function toggleMenu() {
  const menuIcon = document.querySelector(".menu-icon");
  const navList = document.querySelector(".nav-list");
  menuIcon.classList.toggle("open");
  navList.classList.toggle("open");
}
