/**
 *      PROTOTYPE
 *          - Aquilo que foi criado antes
 *          
 *          * prototype-basead language
 *          * prototype chain
 *          * __proto__
 */



/**
 *      Type coversion (typecasting) vs Type coersion
 * 
 *          * Alteração de um tipo de dado para outro
 */
// type coersion
console.log("8"+9);

// type coversion
console.log(Number("8")+9)


/** String em números */
// Manipulando Strings e Números

// Transformar Número em String e String em Número
let string = "123";
console.log(Number(string));
let numero = 123;
console.log(String(numero));


/** Contando caracteres e digitos */
// Contando quantos caracteres tem uma palavra e quantos dígitos tem um número
let word = "Paralelepipedo";
console.log(word.length) // lenght mostra o tamanho da palavra
let num = 321;
console.log(String(num).length);


/** Casas decimais */
// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let num2 = 32.54632434;
console.log(num2.toFixed(3).replace(".", ","));


/** Maiúsculas e minúscula */
// Transformar letra Maiúscula em minúscula. Fazer ao contrario também
let world2 = "Programar é bacana";
console.log(world2.toUpperCase()) // toUpperCase transformar letra em Maiúsculas
console.log(world2.toLowerCase()) // toLowerCase transforma letra em Minúsculas;



/** Separando strings */
// separe um texto que contém espaços, em um novo array onde cada texto é uma posição de array.
// Depois disso, transforme o array em texto e onde era espaco, coloque _
let phrase = "Maria do carmo caitano"
let myArray = phrase.split(" ") // split: deixa um espaço ou pega alguma letra
console.log(myArray)
let phraseWithUnderscore = myArray.join("_") //join() ele junta
console.log(phraseWithUnderscore)


/** Encontrando palavras em frases */
// Verificar se o texto tem a palavra carmo
let phrase2 = "Maria do carmo caitano";
console.log(phrase2.includes("carmo")) // includes() verifica tem a palavra ou não


/** Criando arrays com constructor */
let myArray2 = new Array(10);
console.log(myArray2)


/** Elementos de um array */
// Contar elementos de um array
console.log([
    'a',
    function() {return 'alo'},
    {type: "Array"}
][2].type);

/** Strings para arrays */
// Transformar um conjunto de caracteres em elementos de um array
let word3 = "Manipulando strings para arrays"
console.log(Array.from(word3)) // o método from() espara uma string


/** Manipulando arrays */
// manipulando arrays
let techs = ['html', 'css', 'javascript']

// adicionar um item no fim
techs.push("nodejs") // adiciona um novo elemento na variável
// adicionar no começo
techs.unshift("sql") // adiciona um elemento no começo de um array
// remover do fim
techs.pop(); // remove um elemento do fim de um array
// remove do começo
techs.shift(); // remove primeiro elemnto de um array
// pegar somentes alguns elementos de um array
console.log(techs.slice(1, 2)); // slice() ele corta. Recebe 2 dois argumentos: 1. qual a posição de início para retirar; 2. Qual a posição final de um elemento ;
// remover 1 ou mais items em qualquer posição do array
console.log(techs.splice(1, 2)) // possui 2 argumentos: 1. retina um index do elemento; 2. quantos elementos vai tirar
// Encontrar a posição de um elemento de um array
let index = techs.indexOf("html");
techs.splice(1, 2)
console.log(techs)


console.log(techs)