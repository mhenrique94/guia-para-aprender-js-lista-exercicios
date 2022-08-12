/**
 * Nosso amigo Erick trabalha em uma jornada de seis por dois, ou seja,
 * ele trabalha 6 dias e folga 2 dias.
 * Problema: Ele nunca sabe se um dia específico no futuro ele vai estar
 * trabalhando ou de folga. Difícil fazer planos.
 * Exemplo, como saber no dia 12 de Outubro ele vai estar trabalhando ou de folga?
 * Como fazer um programa que liste os próximos 3 meses com dias de trabalho/folga?
 * 
 */

// Entrada
// Pŕoxima volta

// Saída com base na próxima folga, calcular dia de trabalho/folga

let dias_semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
let dataAtual = new Date()
let dataFinal = (new Date('2022-09-12'))
let difTempo = Math.abs(dataFinal-dataAtual)
let tempoNumDia = 1000 * 60 * 60 * 24
let dias_trabalho = 1
let dias_folga = 1

let intervalo = 0
console.log(`Data atual: ${dataAtual.getDate()}/${dataAtual.getMonth()+1}/${dataAtual.getFullYear()}`)
console.log(`Data final: ${dataFinal.getDate()+1}/${dataFinal.getMonth()+1}/${dataFinal.getFullYear()}`)
let dia_dinamico = new Date(dataAtual)
let diaAtualizado = ''

while (intervalo < difTempo) {
    diaAtualizado = (`Data: ${dia_dinamico.getDate()}/${dia_dinamico.getMonth()+1}/${dia_dinamico.getFullYear()}. Dia da semana: ${dias_semana[dia_dinamico.getDay()]}.`)
    if (dias_trabalho < 7){
        console.log(`${diaAtualizado}Trabalha? Sim.`)
        dias_trabalho++
    } else {
        if(dias_folga < 3){
            console.log(`${diaAtualizado}Trabalha? Não. Folga 0/`)
            dias_folga++
        } else {
            dias_folga = 1
            dias_trabalho = 1
        }
    }
    intervalo = intervalo + tempoNumDia
    dia_dinamico = new Date(dia_dinamico)
    dia_dinamico.setDate(dia_dinamico.getDate() + 1)
}