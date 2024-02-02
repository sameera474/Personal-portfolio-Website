// Function to toggle the visibility of the navigation links
function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    var navList = document.querySelector('.nav-list');
    menuIcon.classList.toggle('open'); 
    navList.classList.toggle('open');
}
