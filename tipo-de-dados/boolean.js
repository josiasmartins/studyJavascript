/**
 *      BOOLEAN
 *          * É um tipo de dado que aceita somente dois valores: 
 *              - true
 *              - false
 */
console.log(false)
console.log(true)


var precoGaso = parseFloat(prompt("Digite o valor da gasolina, em decimal e com ponto"));
var precoAlcool = parseFloat(prompt("Digite o valor do álcool, em decimal e com ponto"))
var melhorCusto = parseFloat(precoGaso/precoAlcool)


if(melhorCusto > 0.7) {
  console.log("Compensa mais a gasolina, pois a relação é: "+ melhorCusto);
} else if(melhorCusto === 0.7) {
  console.lg("Tanto faz, pois a porcentagem é: "+ melhorCusto);
} else if(melhorCusto < 0.7 ) {
  console.log("Compensa mais o álcool, pois a porcentagem é: "+ melhorCusto)
}  

var continuar = parseInt(prompt("Digite 1 para refazer ou 2 para sair"))

switch(continuar) {
case 1:
    var precoGaso = parseFloat(prompt("Digite o valor da gasolina, em decimal e com ponto"));
var precoAlcool = parseFloat(prompt("Digite o valor do álcool, em decimal e com ponto"))
var melhorCusto = parseFloat(precoGaso/precoAlcool)


if(melhorCusto > 0.7) {
  console.log("Compensa mais a gasolina, pois a relação é: "+ melhorCusto);
} else if(melhorCusto === 0.7) {
  console.lg("Tanto faz, pois a porcentagem é: "+ melhorCusto);
} else if(melhorCusto < 0.7 ) {
  console.log("Compensa mais o álcool, pois a porcentagem é: "+ melhorCusto)
} 
break;
case 2:
  console.log("Obrigado por utilizar nossa ferramenta. Bye")
  break;
default:
  if(continuar > 2 ) {
    console.lo("1 para sim ou 2 para não")
  }
  break;
}