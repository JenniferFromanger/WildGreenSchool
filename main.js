const burgerButton = document.querySelector('#hamburger');
const sideBar = document.querySelector('#responsive_menu');
function clickLink() {
    sideBar.classList.toggle('open');
};

burgerButton.addEventListener('click', clickLink);

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