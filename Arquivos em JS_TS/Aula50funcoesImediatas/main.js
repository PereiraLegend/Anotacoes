//Precisa primeiro a função estra envolta por parênteses, e depois os parâmetros também envoltos por parênteses
(function(idade, peso, altura){

    const sobrenome = "Miranda";
    function criaNome(nome) {
        return nome + " " + sobrenome
    }

    function falaNome(){
        console.log(criaNome("Luiz"));
    }

    falaNome();
    console.log(idade, peso, altura);
    
})(30,80,1.80);