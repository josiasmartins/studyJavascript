/** ESTRUTURA DE REPETIÇÃO */

/** 
 *      FOR
 *          - siginifa para
 *          - Começa com a inicialização de uma variável; condição para continuação desse loop;
 *            expressão final que vai acontencer assim que terminar o loop
 * 
 *          break
 *              - para execução do momento
 *          continue
 *              - pula a execução do momento
 */
for(let i=10; i>0; i--) {
    if(i === 6) {
        continue;
    }
    console.log(i)
}


/**
 *      WHILE (enquanto)
 *          - o while faz sentido usar quando não sabemos o momento da parada     
 */
let i=48768098989787;
while(i > 10) {
    console.log(i);

    i/=35;
}


/**
 *      FOR...OF
 *          é uma declaração que cria um loop também, atráves de alguma 
 *          variável previamente que temos
 */
let name2 = 'Maria';
let names = ['Maria', 'Carmo', 'Caitano']

for(let chair2 of names) {
    console.log(chair2)
}

/** 
 *      FOR...IN
 *          cria um loop em cima de um objeto. 
 *          pegando as propriedades do objeto
 */
let pearson2 = {
    name3: 'Maria',
    age: 49,
    weigth: 88.90
}

for(let property in pearson2) {
    console.log(property);
    console.log(pearson2[property])  // outra forma de acessar: pearson2.name3; pearson2[property]
}