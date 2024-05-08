function login() {
    var username = document.querySelector('#loginForm input[name="loginForm:username"]').value;
    var password = document.querySelector('#loginForm input[name="loginForm:password"]').value;

    var data = {
        username: username,
        password: password
    };

    fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            // Se a resposta for bem-sucedida (status 200), redirecione para Dashboard.xhtml
            alert("Logando com sucesso!");
            window.location.href = "Dashboard.xhtml";
        } else {
            // Se a resposta não for bem-sucedida, exiba uma mensagem de erro
            alert("Erro de login: Credenciais inválidas");
        }
    })
    .catch(error => {
        console.error('Erro ao fazer login:', error);
        alert("Erro ao fazer login");
    });
}

function cadastrarFunc() {
	return window.location.href = "CadastroFuncionarios.xhtml";
}