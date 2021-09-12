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
console.log(2**10);


/**
 *      Grouping operator ()
 *          Operador que agrupa parênteses
 */
let total = 2+(1*4)
console.log(total);


/**
 *      Operadores de comparação
 *          Irá comparar valores e retornar um boolean como resposta à comparação
 */
let one = 1;
let two = 2;

// igual a: ==
console.log(one == 2, two=="2");

// diferente de: !=
console.log(one != two, one !=1, two!="2");



/**
 *      Operadores de comparação estritamente igual e estritamente diferente
 *          * Compara os valores e o tipos de elementos
 */
// estritamente igual a: ===
console.log(one === 1, one==="1")
//estritamente diferente de: !===
console.log(two!=="2", two!==2)


/** Operadores de comparação maior e menor (igual) */
// maior que: >
console.log(one > 1);
// maior igual a: >=
console.log(one>=1, two>=3);
// menor que: <
console.log(one < two, one <1, one<one );
// menor igual a: <=
console.log(one <= two, two<=one, one <= "1");


/**
 *      Operadores de atribuição (Assignment)
 */
let x;
// Assignment
x = 2;
// adition assignment
x+= 2 // mesma coisa que x = x+2
// subtraction assignment
x-=1 // x = x-1
// multiplication assignment
x*=5 // x = x*5;
// division assignment
x/=2 // x = x/2
// remainder, exponentiation
x%=2 // x = x%2
x**=3 // x = x**3
console.log(x);


/**
 *      Operadores lógicos (logical operators)
 *          - 2 valores booleano, quando verificados,
 *            resultará em verdadeiro ou falso
*/
let pao = true;
let queijo = false
// AND: &&. Os dois argumentos tem ser verdadeiro.
console.log(pao && queijo)
// OR: ||. Possui, pelo menos, uma afirmaçõa verdadeira
console.log(pao || queijo)
// NOT !. Negação, troca o valoor da afirmação
console.log(!queijo)


/**
 *      Operador Condicional (Ternário)
 *          Dependendo da condição, nós recebemos valores diferentes
 * 
 *          Condição então valor 1 se não valor 2
 *          condition ? value1 : value2         
 */
// Exemplo: café da manhã top
let pao2 = true;
let queijo2 = true;
let niceBreakfast = pao2 && queijo2 ? 'Café da manhã top' : 'Café da manhã bed';
console.log(niceBreakfast);
// exepmo 2: maior de 18 anos
let age2 = 17;
let habilit = age2 >= 18 ? 'Can drive' : 'Cant not drive';
console.log(habilit)

/** Operators de Strings (String Operator) */
// comparison (comparação)
console.log('a' == 'b')
// concatenation (concatenação). Retorna a união de duas de duas stings
let a = 'alph'
console.log('a'+'b', a+='a');



/** 
 *      FALSY
 *          Quando um valor é considerado false em contextos onde
 *          um booleano é obrigatório (condicionais e loops)
 * 
 *          false
 *          0
 *          -0
 *          ""
 *          null
 *          undefined
 *          NaN
 */
console.log( NaN ? 'verdadeiro' : 'falso')

/**
 *      TRUTHY
 *          Quando um valor é considerado true em contexto onde
 *          um booleano é obrigatório ( condicionais e loops )
 * 
 *          true
 *          {}
 *          []
 *          1
 *          3.27
 *          "0"
 *          "false"
 *          -1
 *          Infinity
 *          -Infinity
 */
console.log( -Infinity ? 'verdadeiro' : 'falta verdade')


/**
 *      Operator precedence (precedencia de operadores)
 *      
 *          * grouping                    ( )
 *          * negação e incremento        ! ++ --
 *          * multiplicação e divisão     * /
 *          * adição e subtração          + -
 *          * relacional                  < <= > >=c
 *          * igualdade                   == != === !==
 *          * AND                         &&
 *          * OR                          ||
 *          * condicional                 ?:
 *          * assignment (atribuição)     = += -= *=
 */
console.log((2 + 5) * 6, 3 > 2 == 1, 3 > 2 && 2 > 1)