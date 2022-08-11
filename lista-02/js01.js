// 2.1) Faça um programa que percorra uma lista e inf. se o numero é impar ou par 

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (n of lista){
    if (n%2 == 0){
        console.log(n, ': PAR')
    } else {
        console.log(n, ': IMPAR')
    }
}