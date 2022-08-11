/**
 * Faça um Programa que dado um número de entrada,
 * exiba o dia correspondente da semana.
 * 
 * ENTRADA      SAÍDA
 * 1            Domingo
 * 2            Segunda
 * 3            Terça
 * ...
 * 7            Sábado
 * Se digitar outro valor deve aparecer: 'Entrada inválida.'
 */

// Entrada
var entrada = 1

// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada

let dias_semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

// Minha abordagem:
switch (entrada){

    case 1:
        console.log(dias_semana[0])
        break
    case 2:
        console.log(dias_semana[1])
        break
    case 3:
        console.log(dias_semana[2])
        break
    case 4:
        console.log(dias_semana[3])
        break
    case 5:
        console.log(dias_semana[4])
        break
    case 6:
        console.log(dias_semana[5])
        break
    case 7:
        console.log(dias_semana[6])
        break
    default:
        console.log('Entrada inválida')
}