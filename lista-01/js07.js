// 1.7) Faça um programa que retorne true ou false conforme a entra Y,y,yes,S,sim 

// const input = prompt('Digite Y, y, yes, S, s, sim para sim ou N, n, no, nao para não: ');

const input = 'N'

if (input == 'Y' || input == 'y' || input == 'yes' || input == 'S' || input == 's' || input == 'sim'){
    console.log(true)
} else if (input == 'N' || input == 'n' || input == 'no' || input == 'nao'){
    console.log(false)
} else {
    console.log('Digite um caractere válido')
}