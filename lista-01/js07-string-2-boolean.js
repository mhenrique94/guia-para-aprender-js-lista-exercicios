/**
 * Faça um programa que retorne true ou false conforme a entrada Y,y,yes,S,sim
 *
 * ENTRADA                   SAÍDA
 * Y                         true
 * Yes, YES, yes             true
 * y                         true
 * S, SIM                    true
 * s, sim, Sim               true
 * 1                         true
 * 👍                        true
 * n,N,J,0, espaço           false
 * qualquer outra coisa, $   false
 */

// Entrada
let verdadeiro = ['y', 'yes', 's', 'sim', 1, '👍']
var entrada = 'qualquer coisa'

// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
if (verdadeiro.includes(entrada.toLowerCase())) {
    var resultado = true
} else {
    var resultado = false
}

console.log(resultado)

// Minha abordagem anterior:
// const input = 'N'

// if (input == 'Y' || input == 'y' || input == 'yes' || input == 'S' || input == 's' || input == 'sim' || input == '1' || input == '👍'){
//     console.log(true)
// } else if (input == 'N' || input == 'n' || input == 'no' || input == 'nao'){
//     console.log(false)
// } else {
//     console.log(false)
// }
