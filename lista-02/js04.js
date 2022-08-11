// 2.4) Faça um programa que mostre o maior nro da lista 

let lista = [1, 2, 3, 4, 54, 6, 89, 4, 1]

let maior = 0
for (var n of lista){
    if (n > maior){
        maior = n
    }
}

console.log(maior)