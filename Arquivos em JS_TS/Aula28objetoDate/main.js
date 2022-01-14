/**Se eu deixar do lado de dentro em branco dos parênteses do date ele mostra a hora atual */
const data = new Date(); /*Aqui eu crio um objeto para a data, com ela eu tenho várias funcionalidades */
console.log(data.toString());

const dati = new Date(0); /*A hora zero se passa no tempo do lançamento do unix, ou seja 01/01/1970 o Timestamp unix, se eu quiser uma data antes eu tenho que colocar um número negativo */
console.log(dati.toString());

/*Como funciona o formato das horas */
const date = new Date(2019, 3, 20, 15, 14, 27);/**para se eu quiser o ano o mês e o dia -> ano, mes, dia, hora, minuto, segundo e milésimo de segundo (Obs.: os mi8lésimos de segundos vão até 999 senão ele muda para outro horariocomo de 1 para 2)*/
/**Se eu omitir a hora ficvaria zerado, e obs.: a contagem dos meses começa do zero, ou seja vai de 0 a 11 */
console.log(date.toString());
console.log("-----------------------------------------------------");
/**Para pagar cada item da hora separado eu utilizo:*/
console.log("Dia", data.getDate());
console.log("Mês", data.getMonth() + 1); /**O mês no JS começa do zero, mas eu posso somar mais um para voltar ao status normal*/
console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Minutos", data.getMinutes());
console.log("Segundos", data.getSeconds());
console.log("Milisegundos", data.getMilliseconds());
console.log("Dia da Semana", data.getDay()); /**0 - Domingo, 6 - Sábado */
console.log(data.toString());
/**Para vias de observação, se eu colocar Date.now ele mostra a contagem dos milesimos de seguno do marco zero até agora */
console.log(Date.now());/**E se eu pegar esse resultado e colocar dentro dos parênteses/ dentro do objeto data criado, ele vai retornar o significado desse código em uma data, a data atual que foi escrita no código*/

const dat = new Date(1642190214774);
console.log(dat);