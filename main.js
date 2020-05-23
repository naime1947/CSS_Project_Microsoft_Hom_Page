const menuButton = document.getElementById('menu-btn');
const mainMenu = document.getElementById('main-menu');

menuButton.addEventListener('click',function(){
    mainMenu.classList.toggle('show');
});