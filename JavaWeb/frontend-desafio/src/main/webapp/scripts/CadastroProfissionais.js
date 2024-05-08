function cadastrar() {
    var username = document.getElementById("form:username").value;
    var tipocadastrot = document.getElementById("form:tipocadastro").value;
    var password = document.getElementById("form:password").value;
    var cpf = document.getElementById("form:cpf").value;
    var email = document.getElementById("form:email").value;
    var datanascimento = document.getElementById("form:datanascimento").value;
    var telefone = document.getElementById("form:telefone").value;
    var titulo = document.getElementById("form:titulo").value;

    var usuarioData = {
        username: username,
        password: password,
        cpf: cpf,
        email: email,
        datanascimento: datanascimento,
        telefone: telefone,
        titulo: titulo
    };

    // Criar o usuário
    var xhrUser = new XMLHttpRequest();
    xhrUser.open('POST', 'http://localhost:8080/user', true);
    xhrUser.setRequestHeader('Content-Type', 'application/json');
    
    xhrUser.onload = function() {
        if (xhrUser.status === 201) {
	        var usuarioIdRequest = new XMLHttpRequest();
	        usuarioIdRequest.open('GET', 'http://localhost:8080/user/ultimoid', true);
	        usuarioIdRequest.setRequestHeader('Content-Type', 'application/json');
	
	        usuarioIdRequest.onload = function() {
	            if (usuarioIdRequest.status === 200) {
	                var usuarioId = JSON.parse(usuarioIdRequest.responseText);
	                console.log("O id é: " + usuarioId);
	                criarStatus(usuarioId, tipocadastrot);
	            } else {
	                alert('Erro ao obter o ID do usuário. Por favor, tente novamente.');
	            }
	        };
	
	        usuarioIdRequest.send();
        } else {
            alert('Erro ao cadastrar usuário, EMAIL ou CPF já existentes. Por favor, tente novamente.');
        }
    };
    xhrUser.send(JSON.stringify(usuarioData));
}

function criarStatus(usuarioId, tipocadastrot) {
    //var tipocadastrot = document.getElementById("form:tipocadastro").value;

    var statusData = {
        datavisto: "",
        tipocadastro: tipocadastrot,
        dataregistro: "",
        status: "INATIVO",
        codigounico: 1,
        usuario: {
            id: usuarioId
        }
    };

    // Criar o status
    var xhrStatus = new XMLHttpRequest();
    xhrStatus.open('POST', 'http://localhost:8080/status', true);
    xhrStatus.setRequestHeader('Content-Type', 'application/json');
    xhrStatus.onload = function() {
        if (xhrStatus.status === 200 || xhrStatus.status === 201) {
            alert('Cadastro efetuado com sucesso!');
            window.location.href = 'Main.xhtml';
        } else {
            alert('Erro ao cadastrar status. Por favor, tente novamente.');
        }
    };
    xhrStatus.send(JSON.stringify(statusData));
}

function Voltar(){
	window.location.href = "Main.xhtml"
}
