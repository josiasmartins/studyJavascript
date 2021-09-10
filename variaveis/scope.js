/**
 *      VAR 
 *          - var é global e local
 * 
 *      LET e CONST
 *          - const e let são locais e só funciona no escopo onde foi criada
 * 
 *      HOISTING
 *          Elevação. Js levar a variável var para cima, somente nome.
 */

// var x = 0;
// console.log('> existe x antes do bloco? ', x)
// {
//     var x = 0;
// }
// console.log('> existe x depois do bloco?', x)

// let e const
// const  y = 1;
// {
//     const y = 0;
//     console.log('> existe x antes do bloco? ', y)
// }
// console.log('> existe y depois do bloco?', y)



/**
 *      DECLARATION ASSIGNMENT
 */

// Variáveis e tipos de dados
// declaration
// var nome;

// // atribuição or assignment
// nome = "ibag"

// // que tipo de dado foi colocado na variável
// console.log(typeof name)


// // agrupamento de declarações
// let age, isHuman

// age = 20;
// isHuman = true

// passando multiplos argumentos
// console.log(name, age, isHuman)


// escrita de texto + variável
// Concatenado os valores
// console.log("O "+nome+" tem "+age+" anos")


// Interpolando valores com template literals or template string
// console.log(`O ${nome} tem ${age} anos`)



// Object
// const pearson = {
//     name: "Ibag",
//     age: 37,
//     weight: 88.6,
//     isAdmin: true
// }
// console.log(`${pearson.name} tem ${pearson.age} anos`)


// Array
const animal = [
    "Lion",
    "Monkey",
    "Cat",
    {
        nome: "Call",
        age: 37
    }
]
// acessando os valores dentro do array
console.log(animal[0])
console.log(animal[3].age)


