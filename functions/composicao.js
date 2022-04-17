// var AreaChart = Charts.AreaChart;

function composicao(...funcoes) {
    // curryng - programação funcional | (lazy eval.)
    return function(valor) {
        // return fn3(fn2(fn1(valor)));
        // outra forma de fazer
        return funcoes.reduce((acc, fn) => {
            return fn(acc)
        }, valor)
    }
}

function gritar(texto) {
    return texto.toUpperCase()
}

function enfatizar(texto) {
    return `${texto}!!!`;
}

function tornarLento(texto) {
    return texto.split('').join(' ')
}

const exagerado = composicao(
    gritar,
    enfatizar,
    tornarLento,
)

const quaseExagerado = composicao(
    gritar,
    enfatizar
)

console.log(exagerado('cuidado com o buraco!!!'));
console.log(exagerado('para'));
console.log(quaseExagerado('para'));

console.log(composicao(
    gritar,
    enfatizar
)('eita'))
