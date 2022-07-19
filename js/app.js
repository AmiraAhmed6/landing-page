//variables
const mainUl = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();
const mainButton =document.querySelector("#mediaButton");

// const mediaQuery = window.matchMedia("(max-width:700px)");

// Navbar li

for(const section of sections){
   const liNav = document.createElement('li');
   const link = document.createElement('a');
   const values = section.getAttribute("data-nav");
    link.textContent = section.getAttribute("data-nav");
    link.setAttribute("href",`#${values}`);
    liNav.appendChild(link);
    fragment.appendChild(liNav);

    liNav.addEventListener("click", function (e) {
            e.preventDefault();
            section.scrollIntoView({
                behavior : "smooth",
                 block : "center"
             })
    });

}
mainUl.appendChild(fragment);

mainButton.addEventListener("click",function(){
    mainUl.classList.toggle("hide");
})

