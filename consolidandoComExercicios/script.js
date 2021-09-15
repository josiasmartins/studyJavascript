/**
 *      ### Transformar notas escolares 
 * 
 *      Crie um algaritmo que transforme as notas do sistema
 *      númerico para sistema de notas em caracteres tipo A B C
 * 
 *      * de 90 para cima - A
 *      * entre 80 - 89   - B
 *      * entre 70 - 79   - C
 *      * entre 60 - 69   - D
 *      * menor que 60    - F
 */
// meu
// let notas = prompt("Digite sua nota, please");

// if (notas >= 90) {
//     console.log('Parabens, vc está very very good. Nota A'.replace('.', ','))
// } else if(notas >= 80 && notas <= 89) {
//     console.log('Parabens, vc tirou a nota B')
// } else if(notas >= 70 && notas <= 79) {
//     console.log('Mediano. Nota C');
// } else if(notas >= 60 && notas <= 69) {
//     console.log('Vc precisa melhorar. Nota D')
// } else {
//     console.log('Reprovado. Nota D. Estude mais');
// }

// do Mayk (rockeseat)
let score = 100 ;

function calculeNote(score) {
    let scoreA = score >= 90 && score <= 100;
    let scoreB = score >= 80 && score <= 89;
    let scoreC = score >= 70 && score <= 79;
    let scoreD = score >= 60 && score <= 69;
    let scoreF = score < 60 && score > -1

    let scoreFinal;

    if (scoreA) {
        scoreFinal = 'A'
    } else if(scoreB) {
        scoreFinal = 'B'
    } else if(scoreC) {
        scoreFinal = 'C'
    } else if(scoreD) {
        scoreFinal = 'D'
    } else if(scoreF) {
        scoreFinal = 'F'
    } else {
        scoreFinal = 'Número inválido'
    }
    return scoreFinal
}

console.log(calculeNote(100))




/**
 *      ### Sistema de gasto familiar
 *          
 *      Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
 *          * receitas: []
 *          * despesas: []
 * 
 *      Agora, crie uma função que irá calcular total de receitas e despesas
 *      e irá mostrar uma mensagem se sua família está com o saldo positivo
 *      ou negativo, seguido do valor do saldo
 */
// let custoReceita = {
//     receitas: [4000.00, 390, 1000],
//     despesas: [170.8,180.70, 500],
// }
// let totalReceita = receitas-despesas;
// function totalRendimento(totalReceita) {
//     if( totalReceita > 0 ) {
//         console.log('Seu rendimento foi maior que as despesas')
//     } else {
//         console.log('Pésimo rendimento')
//     }
// }
// console.log(totalReceita())

// do professor
let families = {
    incomes: [1000.0, 400, 500.8],
    expenses: [3000.8, 400, 595.8]
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value;
    }
    return total;
}

function calculateBalance() {
    const calculateIncomes = sum(families.incomes);
    const calculateExpenses = sum(families.expenses);

    const total = calculateIncomes - calculateExpenses;

    const isOk = total >= 0
    let balanceText = 'Seu saldo é negativo'

    if(isOk) {
        balanceText = 'seu saldo é positivo'
    }
    console.log(`${balanceText}: ${total.toFixed(3)}`)
}
calculateBalance();




/**
 *      ### Celsius em fahrenheit
 *      
 *      Cria uma função que receba uma string em Celsius ou fahrenheit
 *      e faça a transformação de uma unidade para outra
 * 
 *      C = (F - 32) * 5/9
 *      F = C * 9/5 + 32 
 */
// let
// function coversaoTemperature() {
//     let celsius = (fahrenheit - 32) * 5/9
//     let fahrenheit = celsius * 9/5 + 32

//     console.log(coversaoTemperature())

// }
// console.log(coversaoTemperature())

// do professor. transformDegree('50F')
function transformDegreen(degree) {
    const celsiusExist = degree.toUpperCase().includes('C');
    const fahrenheitExist = degree.toUpperCase().includes('F');
    // fluxo de erro
    if(!celsiusExist && !fahrenheitExist) {
        throw new Error('Grau não identificado')
    }

    // fluxo ideal, F -> C
    let updateDegree = Number(degree.toUpperCase().replace('F', ''));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9;
    let degreeSign = 'C'

    // fluxo alterativo, C -> F
    if(celsiusExist) {
        updateDegree = Number(degree.toUpperCase().replace('C', ''));
        formula = (celsius) => celsius * 9/5 + 32;
        degreeSign = 'F'
    }

    return formula(updateDegree) + degreeSign

}

try {
    console.log(transformDegreen('50f'))
    console.log(transformDegreen('10C'))
    transformDegreen('49Z')
    // transformDegreen('50Z');
} catch(error) {
    console.log(error)
}





/**
 *      ### Buscando e contando dados em array
 * 
 *      Baseado no Array de livros por Categoria abaixo, faça os seguintes desafios
 * 
 *          * Contar o número por categorias e o números de livros em cada categoria
 *          * Contar o números de autores
 *          * Mostrar livro do autor Augusto Cury
 *          * Transformar a função acima em uma função que irá receber o nome do autor
 *          e devolver os livros desse autor
 */
const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milinária',
                author: 'T. Harv Eker'
            },
            {
                title: 'O homem mais rico da Babilônia',
                author: 'Geargr S. Clason'
            },
            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lecher'
            }
        ],
        category: 'Inteligenca emocional',
        books: [
            {
                title: 'Você é insubstituivel',
                author: 'Augusto Cury'
            },
            {
                title: 'Ansiedade - como enfrentar o mal do século',
                author: 'Augusto Cury'
            },
            {
                title: 'Os 7 hábitos das pessoas mais eficazes',
                author: 'Sthepy R. Covers'
            }
        ]
    }
]
const totalCategory = booksByCategory.length
console.log(totalCategory)

for(let indice of booksByCategory) {
    console.log('Total de livros da categoria: ',indice.category);
    console.log(indice.books.title)
}

function countAuthor() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let books of category.books) {
            if(authors.indexOf(books.author) === -1) { // se detro desse array tem um elemento dentro desse livro
                    authors.push(books.author)
            }
        }
    }
    console.log('Total de autores: ', authors.length)
}
countAuthor()

function booksOfAugustoCury() {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === 'Augusto Cury') {
                books.push(book.title)
            }
        }
    }
    console.log('Books of Augusto Cury: ', books)
}
booksOfAugustoCury()


function booksOfAuthors(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros sobre ${author}: ${books.join(', ')}`)
}
booksOfAuthors('Augusto Cury')
