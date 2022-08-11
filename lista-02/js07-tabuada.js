/**
 * Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. 
 * O usuário deve informar de qual numero ele deseja ver a tabuada. 
 * A saída deve ser conforme o exemplo abaixo: 
 * 
 * ENTRADA: 5
 * 
 * SAIDA
 * 5 X 1 = 5
 * 5 X 2 = 10
 *  ...
 * 5 X 10 = 50 
 * 
 * Se a entrada for fora de 1 e 10, podemos imprimir: entrada inválida
 * gere um array com os valores da tabuada, separando assim os dados da exibição
 */

// Entrada
let numero_tabuada = 1
var cont = 1
let array = []

if (numero_tabuada < 0 || numero_tabuada > 10){
    console.log('Entrada inválida')
} else {
    while (cont < 11){
        // array.push(`${numero_tabuada} X ${cont} = ${numero_tabuada * cont}`)
        console.log(`${numero_tabuada} X ${cont} = ${numero_tabuada * cont}`)
        cont++
    }
}
// tabuada_completa = array.toString()
// tabuada_completa = tabuada_completa.replace(/,/g, ', ') // não funciona, pq?
// console.log(`Tabuada de ${numero_tabuada}: ${tabuada_completa}`)
