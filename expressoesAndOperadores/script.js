/**
 *      EXPRESSÕES E OPERADORES
 *          * Qualquer linha de código que resolve algo         
 * 
 *          - Expressions
 *          - Operators
 *              Binary
 *              Unary
 *              Ternary
 */
let number = 1;

// Expressions: função autoEsecutado
(function() {
    console.log('welcome')
})()

// Operadores binários
let numbers = 1;
// console.log(numbers+1)

// operator Unary
// console.log(--numbers)

// operator ternary. Recebe uma expressão
// console.log(false ? 'ibag' : 'IBAG');


/**
 *      NEW
 *          É uma expressão que serve para criar um novo objeto
 * 
 *          * left-hand-side expression
 *          * criar um novo objeto
 */
let name1 = new String('Ibag');
name1.surName = 'Brito';
let age = new Number(22);
// console.log(name1.surName, age)

let date = new Date('2021-09-11');
// console.log(date.__proto__) // verificar se o Date é um objeto


/** 
 *      Typeof delete
 * 
 *          OPERADORES UNÁRIOS
 *              typeof 
 *              delete
 */
console.log(typeof 'Maria') // typeof mostra o tipo de dados

// delete: deleta um propriedade do objeto 
const pearson = {
    name3: 'Maria',
    age: 22
}
delete pearson.age;
console.log(pearson);


/**
 *      OPERADORES ARITMÉTICOS
 */
// Multiplicação: *
console.log(4 * 6);
// deivisão: /
console.log(12.5/200)
//soma: +
console.log(50+40);
// subtração
console.log(40-50);

// resto da divisão: %
let remainder;
remainder = 40 % 10;
console.log(remainder)
//incrementar: ++. Significa adicionar mais um número
let increment = 19;
increment++;
console.log(increment);
// decremento: --
let decrement = 100;
decrement--;
console.log(decrement)
// exponencial: **
console.log(2**10)