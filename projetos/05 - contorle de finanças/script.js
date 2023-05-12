var tabela = document.getElementById("tabela")

var spanEntrada = document.querySelector("#entrada span") // = <span>000.00</span>
var spanSaida = document.querySelector("#saida span") // Lembrando: <span>000.00</span>.innerHTML = 000.00
var spanTotal = document.querySelector("#total span")

var somaEntrada = 0
var somaSaida = 0
var somaTotal = 0

function verificarTotalETrocarCor(total){
  if(total < 0 ){
    spanTotal.style.color = "red"
  } else{
    spanTotal.style.color = "green"
  }
}

function incluir(event){
    event.preventDefault()  //só para tirar a acao padrao do evento de clique no botao de um formulário
    let tipoES = ""
    var inputdescricao = document.getElementById("desc");
    var inputvalor = document.getElementById("valor");
    var inputtipo = document.getElementById("tipo");

    if(inputdescricao.value == "" || inputvalor.value ==""){
      window.alert(" os campos não podem estar vazios")
    } else{   

        if(inputtipo.value == "entrada"){ //esse IF verifica se o SELECT ta selecionado entrada ou saida
          somaEntrada += Number(inputvalor.value)

          spanEntrada.innerHTML = somaEntrada

          tipoES = "tipo-entrada" //Entao se for entrada a variavel tipoES vai conter o nome da classe que eu dei no css, que diz a bolinha fica verde
        } else{
            somaSaida += Number(inputvalor.value)

            spanSaida.innerHTML = somaSaida

            tipoES = "tipo-saida" //Tipo-saida é o nome da classe que eu dei no css que diz que a bolinha fica vermelha
        }

        tabela.innerHTML += ` 
          <tr>
            <td>${inputdescricao.value}</td>
            <td>R$ ${inputvalor.value}</td> 
            <td> 
              <span class="${tipoES} material-symbols-outlined">
                  expand_circle_down
              </span> 
            </td>
      
            <td> 
              <span id="delete" class="material-symbols-outlined">
                  delete
              </span>  
            </td>
      
          </tr>
        ` //aqui foi para adicionar uma linha na tabela, e a classe foi injetada com a variavel TipoES, do IF que verifica o tipo
        
        
        somaTotal = somaEntrada - somaSaida
        spanTotal.innerHTML = somaTotal

        verificarTotalETrocarCor(somaTotal)
    }
  }


tabela.addEventListener('click', (event)=>{ //adicionando evento de clique na tabela
  
  if(event.target.id === "delete"){   //ou seja se o cara clicou no icone de lixeira(id delete), faca:
    
    var linhaLixo = event.target.parentNode.parentNode //pegando a linha do lixeiro especifico que foi clicado
    console.log(event.target.parentNode.parentNode)

    var linhaValor = linhaLixo.children[1].innerHTML.replace('R$ ', '') // Aqui pega o valor da linha e tira o R$

    var linhaClasse = linhaLixo.children[2].children[0].className.includes("entrada") // Aqui verifica se o tipo na classe é entrada pelo nome da class()

    if(linhaClasse == true){ //ou seja se é true é porque inclui entrada, entao tem que alterar a somaEntrada e a somaTotal para colocar no span os novos

      somaEntrada -= linhaValor
      somaTotal = somaEntrada - somaSaida

      spanTotal.innerHTML = somaTotal
      spanEntrada.innerHTML = somaEntrada

    }else{

      somaSaida -= linhaValor
      somaTotal = somaEntrada - somaSaida

      spanTotal.innerHTML = somaTotal
      spanSaida.innerHTML = somaSaida

    }
    
    verificarTotalETrocarCor(somaTotal) //chamando a funcao que muda a cor do span da somaTotal
    linhaLixo.remove() //remove a linha que tem o lixeiro que foi clicado
  }

})