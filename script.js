/* script.js */

function cadastrarCachorro(event) {
    event.preventDefault();

    // Obter os valores dos campos do formulário
    var nomeCachorro = document.getElementById("nomeCachorro").value;
    var nomeDono = document.getElementById("nomeDono").value;
    var telefone = document.getElementById("telefone").value;
    var diaAgendamento = document.getElementById("diaAgendamento").value;

    // Criar um objeto com os dados do cachorro
    var cachorro = {
        nomeCachorro: nomeCachorro,
        nomeDono: nomeDono,
        telefone: telefone,
        diaAgendamento: diaAgendamento
    };

    // Aqui você pode enviar os dados do cachorro para o servidor, armazená-los em um banco de dados, etc.
    console.log(cachorro);

    // Limpar o formulário após o envio
    document.getElementById("cadastroForm").reset();


