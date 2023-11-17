// Video Referência : https://www.youtube.com/watch?v=lCemyQeSCV8
/**
 *  Para que esse arquivo typescript seja compilado preciso iniciar ele no terminal
 *  com o comando "tsc --init" ele criará um arquivo de configuração
 */
/**
 * Para compilar esse arquivo typescript é necessário mudar no arquivo de configuração o:
 * Diretório de Saída:
 * "rootDir": "./" para "rootDir": "./src"
 * Diretório de Deploy:
 * "outDir": "./" para "outDir": "./dist/js"
 */
/**
 * Após isso basta digitar tsc no terminal que ele fará a compilação do arquivo javascript para o
 * typescript, onde podemos ver que a pasta "js" e o arquivo "index.js" foram gerados, onde podemos
 * ver que ele imprimiu exatamente a mesma coisa (Obs.: Nem sempre vai ser assim, pois algumas 
 * funcionalidades serão transferidas de outra forma no javascript, e se elas não fizeram diferença
 * nem mesmo aparecerão no arquivo gerado)
 */
/**
 * Para fazer a compilação automática basta digitar "tsc -w" que qualquer alteração é compilada 
 * instântaneamente
 */
/**
 * O typescript é uma extensão do javascript
 */
/**
 * O typescript trabalha com uma linguagem não dinâmica
 */
/**
 * Na maioria das vezes podemos escrever todos os códigos em javascript normal, sem 
 * se preocupar com o typescript, mas para algumas questões é bom incluir o typescript
 * para poder adicionar a padronização de código
 */
/**
 * Ou seja para declarar uma variável em typescript é o mesmo que declarar em javascript
 */
const x = 10
/**
 * Agora para definir a tipagem em umargumento/parâmetro basta eu definir:
 */
const y:number = 20 // São as tipagens: number, string, boolean, ...
console.log(y)
/**
 * Agora se eu tentar mudar a tipagem da mesma forma que eu posso fazer no javascript:
 * let y:number = 10 // Aqui é pré estabelecido um padrão
 * y = 'teste'
 * console.log(y)
 * Não só daria erro como também o compilador acusaria o erro antes mesmo de o arquivo ser executado
 * Normalmente ele nem mesmo mostraria esse código pois está errado
 */

// Outras funcionalidades do typescript:

/**
 *      inferência x anotation
 * São duas maneiras de definir um valor com um tipo:
 * +
 */