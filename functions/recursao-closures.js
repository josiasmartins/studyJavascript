var pais = 'russia';

var lancarMissilNuclear = function(pais) {
    console.log("Lançar míssil em 3..2..1");
}

if (pais == 'russia') {
    lancarMissilNuclear = function() {
        console.log("Usar o telefone vermelho")
    }
}

// lancarMissilNuclear()


// ==============================
function ola(quem) {
    console.log("Olá, tudo bem");
}

function ola2(quem) {
    console.log("Olá " + quem + "?");
}

// if (nome) {
//     ola2(nome);
// } else {
//     ola()
// }

// ola("fulanilho");
// ola()

function galinha() {
    return ovo();
}

function ovo() {
    return galinha()
}

// console.log(galinha() + " veio primeiro.")


var ola1 = function(quem) {
    if (quem == undefined) {
        console.log("Olá tudo bem?")
    } else {
        console.log("Hello, how are you " + quem + "?");
    }
}

ola1();
ola1("ibag");


function potencia(base, expoente) {
    if (expoente == undefined) {
        expoente = 2; // define o expoente padrão
    } 

    var resultado = 1;
    for (var cont = 0; cont < expoente; cont++) {
        resultado *= base;
    }

    return resultado;
}

console.log(potencia(2));
console.log(potencia(2, 3));


// função recursiva 
function ola3() {
    console.log("Olá");
    ola3();
}

// ola3();

function potencia2(base, expoente) {
    var resultado = 1;
    for (var cont = 0; cont < expoente; cont++) {
        resultado *= base;
    }

    return resultado;
}

function potencia2(base, expoente) {
    console.log("Base: " + base);
    console.log("Base: " + expoente);

    if (expoente == 0) {
        return 1;
    }

    return base * potencia2(base, expoente);
}

// console.log(potencia2(2, 3));

