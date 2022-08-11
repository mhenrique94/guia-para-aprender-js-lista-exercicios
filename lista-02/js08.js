// 2.8) percorra uma lista de nros e retorne qtos numeros pares/impares

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