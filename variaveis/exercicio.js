// Declare uma variável  de nome weight
// let weight;

// // que tipo de dado é a variável acima
// console.log(typeof weight)

/**
    Declare uma variável e atribua valores para cada tipo de um dado:
        * name: string,
         * age: number (integer)
         * stars: number (float)
         * isSubscribed: Boolean ()
*/
// let name = "Ibag";
// let age = 37;
// let stars = 100.48
// let isSubscribed = true;


/**
        4. A variável students abaixo é que tipos de dados? 

        4.1 Atribua a elas a mesma propriedades e valores do exercicio 3.

        4.2 Moatre no console a seguinte mensagem: 

            <name> de idade  <age> pesa <weight> kg.

            Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto

 */

            let student = {
                name: "Ibag",
                age: 37,
                stars: 100.3,
                isSubscribed: true,
                weight: 76.6
            }
            // console.log(students)

/**
        5. Declare uma variável do tipo Array, de nome students e atribua a ela 
        nenhum valor, ou seja, somente uma Array vazio            
 */
let students = [];

/**
        6. Reatribua valor para a variável acima, colocando dentro dela o objeto students
        da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
 */
students = [
    student
]
// console.log(students)

/**
        7. Coloque no console o valor da posição zero da posição do zero do Array acima
 */
console.log(students[0])


/**
        8. Crie um novo student e coloque na posição 1 do Array students
 */
const ibag = {
    name: "Ibag",
    age: 37,
    weight: 100
}

students = [
    student, 
    ibag
]

console.log(students[1])

/**
        9. Sem rodar o código abaixo, responda qual é a resposta do código
        abaixo e porque? Após sua resposta, rode o código e responda e veja
        se você acertou?
 */

        console.log(a);
        var a = 1

        // vai ser por causa do haisting que eleva a var para cima sem o valor
