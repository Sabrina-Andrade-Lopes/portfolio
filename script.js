// Captura o formulário
document.getElementById("formContato").addEventListener("submit", function(event){

event.preventDefault();

// Pegando valores
let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let mensagem = document.getElementById("mensagem").value;

//validar email
let emailValido = /\S+@\S+\.\S+/;

// Verifica campos vazios
if(nome == "" || email == "" || mensagem == ""){

alert("Preencha todos os campos!");
return;

}

// Verifica email
if(!emailValido.test(email)){

alert("Digite um email válido!");
return;

}

// Simulação de envio
alert("Mensagem enviada com sucesso!");

// Limpa formulário
document.getElementById("formContato").reset();

});

// BOTÃO DE TEMA

let botaoTema = document.getElementById("temaBtn");
botaoTema.addEventListener("click", function(){
document.body.classList.toggle("dark-mode");
if(document.body.classList.contains("dark-mode")){
botaoTema.textContent = "☀️ Tema claro";
}else{

botaoTema.textContent = "🌙 Tema escuro";

}

});
