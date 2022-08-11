/**
 * Faça um programa que mostre o segundo maior número da lista 
 * 
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10,3]      8
 * [1,1,40]              1
 * [40,42,1,0,-10]      40
 * 
 * IMPORTANTE:
 * Não usar sort
 * Não usar funções built-ins da linguagem
 */

// Entrada
let lista = [300, 1, 2, 3, 4, 54, 6, 89, 4, 1]

lista.sort(function(a, b){return a-b})
console.log(`Lista de entrada: ${lista}. Segundo maior elemento: ${lista[lista.length - 2]}`)


console.log(segundoMaior)
