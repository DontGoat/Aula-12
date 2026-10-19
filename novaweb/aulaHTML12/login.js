/*
Descricao: Exercícios da Aula 12 - Introdução aos Formulários Web
nome_arquivo: login.js
nome_exercicio: Atividade 12 - Introdução aos Formulários Web
nome_aluno: Pedro Henrique de Sousa Martins
email_aluno: pedro.martins55@aluno.cps.sp.gov.br
turma: A1129-N-D.S.M.-312-20262
*/

// Mostra uma mensagem na tela (erro ou sucesso)
function mostrarMensagem(texto, tipo) {
    var mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = texto;
    mensagem.className = "mensagem " + tipo;
}

// Validação do formulário de login
function validarLogin() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (email == "") {
        mostrarMensagem("Preencha o e-mail.", "erro");
        return false;
    }

    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        mostrarMensagem("Digite um e-mail válido.", "erro");
        return false;
    }

    if (senha == "") {
        mostrarMensagem("Preencha a senha.", "erro");
        return false;
    }

    if (senha.length < 6) {
        mostrarMensagem("A senha deve ter pelo menos 6 caracteres.", "erro");
        return false;
    }

    mostrarMensagem("Login realizado com sucesso!", "sucesso");
    return false;
}
