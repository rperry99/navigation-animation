// Elements
const menuBars = getElements('menu-bars');
const overlay = getElements('overlay');
const nav1 = getElements('nav-1');
const nav2 = getElements('nav-2');
const nav3 = getElements('nav-3');
const nav4 = getElements('nav-4');
const nav5 = getElements('nav-5');

// Array of nav items
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Function to get elements by ID
function getElements(id) {
  return document.getElementById(id);
}

// Function to toggle the nav bar on and off
function toggleNav() {
  // TOggle Menu Bars Open / Closed
  menuBars.classList.toggle('change');

  // Toggle Menu to be active or not
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // Animate in overlay
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');

    // Animate in nav items
    navAnimation('out', 'in');
  } else {
    // Animate out overlay
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');

    // Animate out nav items
    navAnimation('in', 'out');
  }
}

// Control Navigation animation
function navAnimation(dir1, dir2) {
  navItems.forEach((nav, index) => {
    nav.classList.replace(
      `slide-${dir1}-${index + 1}`,
      `slide-${dir2}-${index + 1}`
    );
  });
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
});
