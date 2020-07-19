// Elements
const menuBars = getElements('menu-bars');
const overlay = getElements('overlay');
const nav1 = getElements('nav-1');
const nav2 = getElements('nav-2');
const nav3 = getElements('nav-3');
const nav4 = getElements('nav-4');
const nav5 = getElements('nav-5');

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
    overlay.classList.add('overlay-slide-right');
    overlay.classList.remove('overlay-slide-left');

    // Animate in nav items
    nav1.classList.remove('slide-out-1');
    nav1.classList.add('slide-in-1');
    nav2.classList.remove('slide-out-2');
    nav2.classList.add('slide-in-2');
    nav3.classList.remove('slide-out-3');
    nav3.classList.add('slide-in-3');
    nav4.classList.remove('slide-out-4');
    nav4.classList.add('slide-in-4');
    nav5.classList.remove('slide-out-5');
    nav5.classList.add('slide-in-5');
  } else {
    // Animate out overlay
    overlay.classList.add('overlay-slide-left');
    overlay.classList.remove('overlay-slide-right');

    // Animate out nav items
    nav1.classList.add('slide-out-1');
    nav1.classList.remove('slide-in-1');
    nav2.classList.add('slide-out-2');
    nav2.classList.remove('slide-in-2');
    nav3.classList.add('slide-out-3');
    nav3.classList.remove('slide-in-3');
    nav4.classList.add('slide-out-4');
    nav4.classList.remove('slide-in-4');
    nav5.classList.add('slide-out-5');
    nav5.classList.remove('slide-in-5');
  }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);
