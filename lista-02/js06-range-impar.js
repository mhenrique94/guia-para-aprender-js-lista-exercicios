/**
 * Faça um programa que gere apenas os números ímpares entre 1 e 150. 
 * 
 * ENTRADA              SAÍDA
 * [1,150]              [1,3,5,7,9,11...147,149]
 * 
 */

// Entrada
var range = [1, 150]

var impares = []
var n = range[0]
while (n <= range[1]){
    if (n%2 == 0){
        n++
        continue
    } else {
        impares.push(n)
        n++
    }
}

console.log(impares)
