/**
 *      FUCTIONS
 *          Tem dois motivos para utlizar uma função
 *              - explicar oque essa parte do código faz;
 *              - repetir quantas vezes precisarem
 */
// retornando valores dentro da função

// fuction expression 
// function anonymous

// parametros da função (parameters)
// const sum = function(number1, number2) {
//     total = number1 + number2;
//     return total;
// }

// let number1 = 34;
// let number2 = 24;

// console.log(`O numero 1 é ${number1}`);
// console.log(`O número 2 é ${number2}`);
// console.log(`a soma é ${sum(number1, number2)}`);
// console.log(total);


/** Para entender a função */

// função é um lidificador
// function fazerSuco(fruta1, fruta2) {
//     return fruta1+fruta2
// }

// const copo = fazerSuco('Banana', 'Maça');
// console.log(copo);


/** function scope */
// let subject = 'Create video';

// function createThing(subject) {
//     subject = 'study'
//     return subject
// }

// console.log(subject);
// console.log(createThing(subject))



/** FUNCTION HOISTING */

// sayMyName();
// var sayMyName = function() {
//     console.log("Maria")
// }


/** ARROW FUNCTIONS */

// const say = () => {
//     console.log("Maria do Carmo")
// }

// say("Mari");


/** CALLBACK FUNCTION. É uma função que está passando como parâmetro para outra função */
// function sayNames(age) {
//     console.log("Antes de chamar o callback")
//     age();
//     console.log("Depois de chamar o callback")
// }
// sayNames(() => {
//     console.log("Ibag mostra")
// })


/**
        Function() constructor

        * expressão new
        * criar um novo objeto
        * this keyboard
        
        Instanciar um novo objeto (new)
        Fazer o molde do objeto; referência (this)
 */
// function Pearson(name) {
//     this.name = name;
//     this.walk = () => {
//         return name+ " está andando"
//     }
// }
// const ibag = new Pearson("Ibah");
// const people = new Pearson("Maria")
// console.log(ibag.walk())
// console.log(people.walk())

let name = new String("Ibag");
let date = new Date("2021-09-26")

console.log(date)