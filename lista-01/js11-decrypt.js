/**
 * Faça um programa que faça o inverso do programa anterior, ou seja,
 * dado uma entrada criptografada, gere o texto decriptografado 
 * 
 * ENTRADA          SAÍDA
 * bcbduf           abacate
 * @fcsb            zebra
 * $fcsb            Zebra
 * 
 * DICAS:
 * ao invés incrementar, vamos precisar decrementar...
 */

// Entrada
var texto = '$fcsb'

// implemente aqui uma lógica para descriptografar o texto
let lista = []

for (var el of texto){
    el = el.charCodeAt(0) - 1
    if(el == 35){
        el = 90
    }

    if(el == 64){
        el == 122
    }
    lista.push(String.fromCharCode(el))
}

let lista_para_string = lista.toString()
let string_decriptada = lista_para_string.replace(/,/g, '')

console.log(`Decriptando "${texto}": ${string_decriptada}.`)
