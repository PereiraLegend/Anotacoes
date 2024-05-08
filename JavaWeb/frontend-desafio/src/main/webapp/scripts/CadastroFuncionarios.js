function cadastrarF() {
    var username = document.getElementById("form:username").value;
    var password = document.getElementById("form:password").value;

    if (!isValidUsername(username)) {
        alert("Por favor, insira um nome de usuário válido.");
        return false;
    }

    if (!isValidPassword(password)) {
        alert("Por favor, insira uma senha válida.");
        return false;
    }

    var formData = {
        username: username,
        password: password
    };

    var url = 'http://localhost:8080/funcionario';
    
    var xhrFunc = new XMLHttpRequest();
    xhrFunc.open('POST', url, true);
    xhrFunc.setRequestHeader('Content-Type', 'application/json');
    xhrFunc.onload = function () {
        if (xhrFunc.status === 200 || xhrFunc.status === 201) {
            console.log("Cadastro efetuado com sucesso");
            alert('Cadastro corporativo efetuado com sucesso!');
            window.location.href = 'LoginFuncionario.xhtml';
        } else if (xhrFunc.status === 403) {
            alert('Erro ao cadastrar, nome de usuário já em uso. Por favor, tente novamente!');
        } else {
            alert('Erro ao cadastrar! Por favor, tente novamente mais tarde.');
        }
    };
    xhrFunc.send(JSON.stringify(formData));
}

function isValidUsername(username) {
    return username.trim() !== "";
}

function isValidPassword(password) {
    return password.trim() !== "";
}
