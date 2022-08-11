/**
 * Faça um Programa que verifique se uma letra 
 * de entrada é vogal ou consoante.
 * 
 * Entrada           Saída
 * a                 vogal
 * I                 vogal
 * z                 consoante
 * J                 consoante
*/

// Entrada
var entrada = 'a'

// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
var resultado = 'vogal'

console.log(resultado)

//Minha abordagem
const input = 'A'

let input_toLowercase = input.toLocaleLowerCase()
if (input_toLowercase == 'a' || input_toLowercase == 'e' || input_toLowercase == 'i' || input_toLowercase == 'o' || input_toLowercase == 'u'){
    console.log('Vogal')
} else {
    console.log('Consoante')
}