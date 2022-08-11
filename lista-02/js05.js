// 2.5) Faça um programa que mostre o segundo maior nro da lista 

let lista = [300, 1, 2, 3, 4, 54, 6, 89, 4, 1]

lista.sort(function(a, b){return a-b})
console.log(`Lista de entrada: ${lista}. Segundo maior elemento: ${lista[lista.length - 2]}`)