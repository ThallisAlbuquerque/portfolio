var menu_celular = document.querySelector('.menu-celular')
var menu_h = document.querySelector('.menu-h')
var logo = document.querySelector('.logo')

function aparecerMenu(){
    if (menu_celular.style.display == 'none'){
        menu_h.innerHTML = 'close'
        menu_celular.style.display = 'block'
        logo.style.alignSelf = 'flex-start'
    } else{
        menu_h.innerHTML = 'menu'
        menu_celular.style.display = 'none'
        logo.style.alignSelf = 'center'
    }
}


function ajeitarMenu(){
    if (window.innerWidth >= 865){
        menu_celular.style.display = 'none'
        menu_h.style.display = 'none'
        logo.style.alignSelf = 'center'
    } else{
        menu_celular.style.display = 'none'
        menu_h.style.display = 'block'
        menu_h.innerHTML = 'menu'
        logo.style.alignSelf = 'center'
    }
}

function subirMenu(){
    if (menu_celular.style.display == 'block'){
        menu_celular.style.display = 'none'
        menu_h.innerHTML = 'menu'
    }
}
