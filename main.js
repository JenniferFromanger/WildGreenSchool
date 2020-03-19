const burgerButton = document.querySelector('#hamburger');
const sideBar = document.querySelector('#responsive_menu');
function clickLink() {
    sideBar.classList.toggle('open');
};

burgerButton.addEventListener('click', clickLink);

/*---------button---------*/
const mainButtons = document.getElementsByTagName('button');
for (let i = 0; i < mainButtons.length; i++) {
    mainButtons[i].addEventListener('click', () => {
        mainButtons[i].style.textShadow = 'black 2px 4px';
    })
}