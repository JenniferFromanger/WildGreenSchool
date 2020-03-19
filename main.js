const burgerButton = document.querySelector('#hamburger');
const sideBar = document.querySelector('#responsive_menu');
function clickLink() {
    sideBar.classList.toggle('open');
};

burgerButton.addEventListener('click', clickLink);











































//------------------------Fotter ---------------------------//


// changer l'année automatiquement au 1er janvier //
var year= new Date().getFullYear();
var date = `© ${year} Wild Green School. Tous droits réservé`;
document.getElementsByClassName('school-rights')[0].innerHTML = date;
//---------------------//
const el = document.querySelector("#module");

el.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -e.offsetX + "px";
  el.style.backgroundPositionY = -e.offsetY + "px";
});



