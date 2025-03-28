//efeito do botão voltar ao Topo
function topo(){
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
        }
    )
    }

//Validação de Login
function login(){
    var logado = 0;
    var usuario = document.getElementsByName("usuario")[0].value; // Adicionado [0] para pegar o primeiro elemento
    var senha = document.getElementById("senha").value;
   
    if(usuario == "admin" && senha == "123456"){
        window.location = "index.html";
        logado = 1;
    }

    if(logado == 0){
        alert("Acesso Negado. Dados incorretos");
    }
}

/*Ativar alert no botão cadastrar*/
function cadastro() {
    alert("Cadastrado com sucesso!");
    window.location.href = "desenvolvimento-da-página-index-do-site\html\index.html"; // Corrigi a barra invertida para barra normal
}