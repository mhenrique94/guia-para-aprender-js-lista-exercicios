// 1.6) Faça um programa que inverta um texto 

let texto = "Texto a inverter"

var texto_array = texto.split("")
var array_invertido = texto_array.reverse()
var texto_invertido = array_invertido.join("")

console.log(`O texto "${texto}" invertido fica assim: "${texto_invertido}".`)