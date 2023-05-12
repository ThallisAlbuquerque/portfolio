//carne - 400gr por pessoa + de 6 hrs - 650
//cerveja - 1200 ml por pessoa + 6 hrs - 2000ml
//refrigerante/agua - 1000ml por pessoa + 6 hrs - 1500ml
//criaça valem por 0,5

let iadutos = document.getElementById("adutos")
let icriancas = document.getElementById("criancas")
let iduracao = document.getElementById("duracao")
let resultado_carne = document.getElementById("resultado-carne")
let resultado_cerveja = document.getElementById("resultado-cerveja")
let resultado_bebidas = document.getElementById("resultado-bebidas")

function cal(){
    var r =document.querySelectorAll(".resultados")
    for(el of r){
        el.style.display = "flex"
    }

    resultado_carne.innerHTML   = `<i class="fa-solid fa-drumstick-bite"></i> `
    resultado_cerveja.innerHTML  = `<i class="fa-solid fa-bottle-water"></i> `
    resultado_bebidas.innerHTML  = `<i class="fa-solid fa-beer-mug-empty"></i> `



    let adutos = iadutos.value
    let criancas = icriancas.value
    let duracao = iduracao.value

    let qtdcarne = qtdpp(duracao) * adutos + (qtdpp(duracao)/2 * criancas)
    let qdcerveja = cerveja(duracao) * adutos
    let bebidaspp = bebidas(duracao) * adutos + (bebidas(duracao)/2 * criancas)

    resultado_carne.innerHTML += `<p>${qtdcarne/1000} kg de carne</P>`
    resultado_cerveja.innerHTML += `<p>${Math.ceil(qdcerveja/355)} latas de Cervejas</P>`
    resultado_bebidas.innerHTML += `<p>${Math.ceil (bebidaspp/2000)} pet's 2l de bebidas</P>`


}



function qtdpp(tempo){
    if(tempo >= 6){
        return 650
    }
    else{
        return 400
    }

}



function cerveja(tempo){
    if(tempo >= 6){
        return 2000
    }
    else{
        return 1200
    }

}


function bebidas(tempo){
    if(tempo >= 6){
        return 1500
    }
    else{
        return 1000
    }

}










  








