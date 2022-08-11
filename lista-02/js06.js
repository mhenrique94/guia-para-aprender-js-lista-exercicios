// 2.6) Faça um programa que imprima na tela apenas os números ímpares entre 1 e 150. 

var n = 1
while (n < 151){
    if (n%2 == 0){
        n++
        continue
    } else {
        console.log(n, ': IMPAR')
        n++
    }
}