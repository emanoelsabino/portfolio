const btnMobile = document.getElementById('btn-mobile');
const elementos=document.querySelectorAll('[data-anima]');
const animacaoClass='animacao';

function animaRolagem(){
    const topoPagina=window.pageYOffset+((window.innerHeight)*0.9);
    elementos.forEach(function(elemento){
        if(topoPagina > elemento.offsetTop){
            elemento.classList.add(animacaoClass);
        }else{
            elemento.classList.remove(animacaoClass);
        }
    });
}

if(elementos.length){
    window.addEventListener('scroll', function(){
        animaRolagem();
    })
}

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);