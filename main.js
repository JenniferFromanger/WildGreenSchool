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





/*---------button---------*/
const mainButtons = document.getElementsByTagName('button');
for (let i = 0; i < mainButtons.length; i++) {
    mainButtons[i].addEventListener('click', () => {
        mainButtons[i].style.textShadow = 'black 2px 4px';
    })
}

