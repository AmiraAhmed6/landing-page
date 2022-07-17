const mainUl = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

// Navbar li

for(let i=0 ; i < sections.length ; i++){
    liNav = document.createElement('li');
    mainUl.appendChild(liNav);
    liNav.textContent = sections.item(i).getAttribute("data-nav");
}
