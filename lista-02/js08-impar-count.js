/**
 * Percorra a entrada com uma lista de nros e retorne qtos numeros impares/pares
 * 
 * ENTRADA:
 * [1,2,3,4,5,6,7]
 * 
 * SAIDA
 * 4 3
 */

// Entrada

let lista = [23, 56, 21, 1, 98, 47]
var pares = 0
var impares = 0

for (var n of lista){
    if (n%2 == 0){
        pares++
    } else {
        impares++
    }
}

console.log(`Pares: ${pares}. Impares: ${impares}.`)
