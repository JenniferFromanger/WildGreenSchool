const burgerButton = document.querySelector('#hamburger');
const sideBar = document.querySelector('#responsive_menu');
function clickLink() {
    sideBar.classList.toggle('open');
};

burgerButton.addEventListener('click', clickLink);

const closeBar = document.querySelectorAll('a.closeButton');

for (let i = 0; i < closeBar.length; i++) {
    closeBar[i].addEventListener('click', clickLink);
};


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




/*---------button---------*/
const mainButtons = document.getElementsByTagName('button');
for (let i = 0; i < mainButtons.length; i++) {
    mainButtons[i].addEventListener('click', () => {
        mainButtons[i].style.textShadow = 'black 1px 2px';
    })
}

// popup contact

const openModButton = document.getElementById('open-modal');
const closeModButton = document.getElementById('close-modal');

openModButton.addEventListener('click', (event)=> {
    document.getElementById('modal').style.display = 'block';
    event.preventDefault(); 
    })
    
closeModButton.addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
    })
