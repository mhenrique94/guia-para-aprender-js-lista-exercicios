// 1.8) Faça um Programa que verifique se uma letra digitada é vogal ou consoante. 

const input = 'A'

let input_toLowercase = input.toLocaleLowerCase()
if (input_toLowercase == 'a' || input_toLowercase == 'e' || input_toLowercase == 'i' || input_toLowercase == 'o' || input_toLowercase == 'u'){
    console.log('Vogal')
} else {
    console.log('Consoante')
}