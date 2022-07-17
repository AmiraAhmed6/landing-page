//variables
const mainUl = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
// const mediaQuery = window.matchMedia("(max-width:700px)");

// Navbar li

for(let i=0 ; i < sections.length ; i++){
   const liNav = document.createElement('li');
    mainUl.appendChild(liNav);
    liNav.textContent = sections.item(i).getAttribute("data-nav");

}

