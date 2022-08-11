/**
 * Faça um programa que percorra uma lista e gere um outra lista com o
 * mesmo numero de elementos no formato: 'impar' ou 'par' 
 * 
 * ENTRADA          SAÍDA
 * [1,3,5,7,8]      ['impar', 'impar', 'impar', 'impar', 'par']
 */

// Entrada
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// gerar a lista de saida
let saida=[]
for (n of lista){
    if (n%2 == 0){
        saida.push('PAR')
    } else {
        saida.push('IMPAR')
    }
}
console.log(saida)