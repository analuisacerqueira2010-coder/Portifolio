/* =====================================================
   PORTFÓLIO - ANA LUISA CERQUEIRA
   Funcionalidades desenvolvidas somente com JavaScript.
   ===================================================== */


/* ---------- MENU RESPONSIVO ---------- */

// Seleciona o botão e o menu através dos seus IDs.
const botaoMenu = document.getElementById("botaoMenu");
const menu = document.getElementById("menu");

// Abre ou fecha o menu quando o botão é clicado.
botaoMenu.addEventListener("click", function () {

    menu.classList.toggle("ativo");

    // Altera o símbolo do botão conforme o menu.
    if (menu.classList.contains("ativo")) {
        botaoMenu.textContent = "✕";
    } else {
        botaoMenu.textContent = "☰";
    }

});


// Fecha o menu depois que o usuário seleciona uma opção.
const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("ativo");
        botaoMenu.textContent = "☰";

    });

});


/* ---------- TEMA CLARO / ESCURO ---------- */

const botaoTema = document.getElementById("botaoTema");

botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("tema-escuro");

    // Modifica o ícone do botão conforme o tema.
    if (document.body.classList.contains("tema-escuro")) {

        botaoTema.textContent = "☀️";

    } else {

        botaoTema.textContent = "🌙";

    }

});


/* ---------- VALIDAÇÃO DO FORMULÁRIO ---------- */

const formulario = document.getElementById("formularioContato");

const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoMensagem = document.getElementById("mensagem");

const erroNome = document.getElementById("erroNome");
const erroEmail = document.getElementById("erroEmail");
const erroMensagem = document.getElementById("erroMensagem");

const mensagemSucesso = document.getElementById("mensagemSucesso");


// Função responsável por verificar se o e-mail possui
// um formato básico válido.
function emailValido(email) {

    const regraEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regraEmail.test(email);

}


// Executa a validação quando o formulário é enviado.
formulario.addEventListener("submit", function (evento) {

    // Impede o envio real do formulário.
    evento.preventDefault();

    // Limpa mensagens anteriores.
    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroMensagem.textContent = "";
    mensagemSucesso.textContent = "";

    let formularioValido = true;


    // Verifica o nome.
    if (campoNome.value.trim() === "") {

        erroNome.textContent = "Digite seu nome.";
        formularioValido = false;

    }


    // Verifica o e-mail.
    if (campoEmail.value.trim() === "") {

        erroEmail.textContent = "Digite seu e-mail.";
        formularioValido = false;

    } else if (!emailValido(campoEmail.value.trim())) {

        erroEmail.textContent = "Digite um e-mail válido.";
        formularioValido = false;

    }


    // Verifica a mensagem.
    if (campoMensagem.value.trim() === "") {

        erroMensagem.textContent = "Digite uma mensagem.";
        formularioValido = false;

    }


    // Se todos os campos estiverem corretos,
    // simula o envio da mensagem.
    if (formularioValido) {

        mensagemSucesso.textContent =
            "Mensagem enviada com sucesso! Obrigada pelo contato. 💜";

        // Limpa os campos após a validação.
        formulario.reset();

    }

});
