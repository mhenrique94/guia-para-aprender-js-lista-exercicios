// 2.7) Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo: Tabuada de 5: 5 X 1 = 5, 5 X 2 = 10, ..., 5 X 10 = 50 

let numero_tabuada = 1
var cont = 1
let array = []
while (cont < 11){
    array.push(`${numero_tabuada} X ${cont} = ${numero_tabuada * cont}`)
    cont++
}

tabuada_completa = array.toString()
tabuada_completa = tabuada_completa.replace(',', ', ')
console.log(`Tabuada de ${numero_tabuada}: ${tabuada_completa}`)