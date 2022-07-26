//variables
const mainUl = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();
const mainButton =document.querySelector("#mediaButton");


//Create Navbar li and a

for(const section of sections){
   const liNav = document.createElement('li');
   const navLink = document.createElement('a');
   const values = section.getAttribute("data-nav");
   navLink.textContent = values;
    navLink.classList.add('menu__link');
    navLink.setAttribute("href",`#${values}`);
    liNav.appendChild(navLink);
    fragment.appendChild(liNav);
//Scroll To Target Section
    liNav.addEventListener("click", function (e) {
            e.preventDefault();
            section.scrollIntoView({
                behavior : "smooth",
                 block : "center"
             })
    });

}
mainUl.appendChild(fragment);
//responsive navBar 
mainButton.addEventListener("click",function(){
    mainUl.classList.toggle("hide");
})
//highlight navbar item and section
window.addEventListener("scroll",function(){

    const addNavItem = (section) => {
        const getElemTop = (elem) => elem.getBoundingClientRect().top;
        const active = document.querySelector(`a[href='#${section.dataset.nav}']`);

        if(getElemTop(section)  >0 && getElemTop(section)  <200){
         section.classList.add("your-active-class");
         active.classList.add("activeItem");
        }else{
         section.classList.remove('your-active-class');
         active.classList.remove('activeItem');
        }
      }

    sections.forEach((section) => addNavItem(section));

});
