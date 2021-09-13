/** Controle de fluxo da aplicação */
// Control flow
console.log('a', 'b')


/**
 *      IF
 *          se
 *      ELSE
 *          senão
 */
let temperature = 36.5;
let heightTemperate = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

// if(temperature >= 37) {
//     console.log('Febre')
// } else if(temperature < 37.5 && temperature > 37) {
//     console.log('Moderado')
// } else {
//     console.log('Saudavel');
// }

if(heightTemperate) {
    console.log('Temperatura alta')
} else if(mediumTemperature) {
    console.log('Temperature média')
} else {
    console.log('Saudável')
}


/**
 *      SWITCH
 *          * podemos ter vários caminnhos, semelhante ao if
 */
// let expression = '6'

// switch (expression) {
//     case 'a':
//         console.log('a');
//         break;   // o break serve para quebrar uma linha
//     case 'b': 
//         console.log('b')
//         break;
//     default:  // quando nenhuma condição é satisfeita
//         console.log("default");
// }
function calculate(number1, operador, number2) {
    let result;

    switch (operador) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            console.log('Não implementado');
            break;
    }
    return result;
}
console.log(calculate(100, '%', 234));


/**
 *      THROW
 *          - Nome em inglês que significa disparar
 * 
 *      try...catch
 *          - tentar pegar 
 */
// throw
function sayMyName(nome = '') {
    if(nome === '') {
        // throw new Error("Nome é necessário")
        throw 'Nome é necessário'
    }
    console.log(nome)
}

// try...catch
try {
    sayMyName('Ibga')
} catch(e) {
    console.log(e)
}
console.log('Após a função de erro')
