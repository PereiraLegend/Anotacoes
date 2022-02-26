// Funções Recursivas
// O que é recursividade? => É simplismente um a função que se chama de volta (ela fica aagindo como um laço)
// Obs.: Em algum momento se você estiver fazendo muita recursividade, o navegador vai travar a recursividade, ou seje ela tem um limite de uso
recursiva = (max) => {
    if (max >= 10) return // ao atingir o máximo ele para de ser executado
    max++; // Aqui a cada vez que eu chamo essa função, eu incremento esse número que está sendo enviado pelo parâmetro
    console.log(max)
    recursiva(max)// Aqui ele chama a função de volta
}
recursiva(-10)
