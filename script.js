// FORMULÁRIO
document.getElementById("formContato").addEventListener("submit", function(event){

event.preventDefault();

let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let mensagem = document.getElementById("mensagem").value;

let emailValido = /\S+@\S+\.\S+/;

if(nome == "" || email == "" || mensagem == ""){
alert("Preencha todos os campos!");
return;
}

if(!emailValido.test(email)){
alert("Digite um email válido!");
return;
}

alert("Mensagem enviada com sucesso!");
document.getElementById("formContato").reset();

});


// TEMA ESCURO
let botaoTema = document.getElementById("temaBtn");

botaoTema.addEventListener("click", function(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
botaoTema.textContent = "☀️ Tema claro";
}else{
botaoTema.textContent = "🌙 Tema escuro";
}

});


// MENU MOBILE
let menuToggle = document.getElementById("menuToggle");
let menu = document.getElementById("menu");

menuToggle.addEventListener("click", function(){
menu.classList.toggle("active");
});

// FECHAR MENU AO CLICAR
document.querySelectorAll("#menu a").forEach(link => {
link.addEventListener("click", () => {
menu.classList.remove("active");
});
});
