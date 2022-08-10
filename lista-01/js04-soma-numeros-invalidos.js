// 1.4) Faça um Programa que imprima a soma de dois numeros deve exibir uma mensagem caso nao seja números válidos 

let numeros = [1, 8]
var soma = 0
for (var n of numeros){
    if (!n){
        console.log('Numero invalido!')
    } else {
        soma += n
    }
}
console.log(`A soma dos números é ${soma}.`)