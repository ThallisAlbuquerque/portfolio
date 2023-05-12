
let email = document.getElementById("email")
let senha = document.getElementById("senha")
let senha1 = document.getElementById("senha1")
let senha2 = document.getElementById("senha2")


function teste(){
    if(senha.value.length < 7){
        window.alert("A senha tem que ter no mínimo 7 caracteres")
    }else{
        if(senha.value == "aluno2022" && email.value == "alunos@cesmac.edu.br"){
            window.alert("Login efetuado com sucesso")
            window.location.href="../index.html"
        }else{
            window.alert("usuario não cadastrado")
        }
        
    }
}

function cadastro(){
    if(senha1.value.length < 7){
        window.alert("A senha tem que ter no mínimo 7 caracteres")
        return 
    }

    if(senha1.value == senha2.value){
        window.alert("cadastro efetuado com sucesso")
        window.location.href="../index.html"
    }else{
        window.alert("As senha são diferentes")

    }

}