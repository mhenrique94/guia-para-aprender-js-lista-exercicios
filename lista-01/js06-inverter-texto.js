/**
 * Faça um Programa que inverta um texto. 
 * 
 * ENTRADA          SAÍDA
 * abacate          etacaba
 * 12345            54321
 * 
 */

// Entrada
var entrada = 'abacate'

// gere a variável invertido de forma a transforma a entrada na saída esperada
var invertido = '?'

console.log(invertido)

// Minha abordagem:
let texto = "Texto a inverter"
var texto_invertido = texto.split('').reverse().join('')

console.log(`O texto "${texto}" invertido fica assim: "${texto_invertido}".`)