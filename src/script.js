const menu=document.getElementById('sidenav');
const content=document.getElementById('content');
const slide=document.getElementById('slides');
var slideIndex= 1;

function showSidenav(){
    menu.classList.add('menu');
   content.style.filter='blur(3px)';
}

function closeSidenav(){
    menu.classList.remove('menu');
    content.style.filter='blur(0)';
}

function showPrev(){

}

