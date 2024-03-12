const formulario = document.querySelector("form");
const Iusuario = document.querySelector(".usuario");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const Iconfirmarsenha = document.querySelector(".confirmasenha")

function cadastrar () {
    fetch("http://localhost:8080/cadastro",
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify({
            usuario: Iusuario.value,
            email: Iemail.value,
            senha: Isenha.value,
            confirmasenha: Iconfirmarsenha
        })
    })
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
};

function limpar () {
    Iusuario.value = "";
    Iemail.value = "";
    Isenha.value = "";
    Iconfirmarsenha = "";
};

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
    cadastrar();
    limpar();
});