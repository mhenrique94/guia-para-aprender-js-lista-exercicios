/**
 * Faça um programa que dado um texto de entrada, imprima o texto
 * criptografado. A criptografia inicial é bem simples,
 * apenas converta a para b, b para c e assim por diante. 
 * 
 * ENTRADA          SAÍDA
 * abacate          bcbduf
 * zebra            @fcsb
 * Zebra            $fcsb
 * 
 * DICAS:
 * É uma variante do exercício js06
 * Pesquise a tabela ASCII, ai vamos ver que a = 97, que A = 65
 * (cada caracter no teclado tem uma representação numérica)
 * Pesquise os métodos de String fromCharCode que converte a para 97
 * e charCodeAt que faz 97 voltar para a
 * Assim, no podemos usar um método bem simples de criptografia que seria mudar
 * o código ASCII de forma a incrementar 1, ou seja, mudar de a para b, b para c 
 * e assim por diante!
 * quando for z ou Z mudar para @ e $ respectivamente ao invés de {
 * 
 * IMPORTANTE:
 * - Não usar bibliotecas, basta manipular a string de entrada de forma a embaralhá-la
 */

// Entrada
var texto = 'zebra'

// implemente aqui uma lógica para criptografar o texto
lista = []

for (var el of texto){
	if (el == 'z'){
		el = '?'
	}
	if (el == 'Z'){
		el = '#'
	}
	el = el.charCodeAt(0) +1
	
	lista.push(String.fromCharCode(el))
}

console.log(`Encriptando "${texto}": ${lista.toString()}.`)
// var textoCripto = ""
// console.log(textoCripto)


// Minha 1ª abordagem:
mensagem = "Esse amor é azul como o mar azul"
console.log('')
console.log(`Segundo método de criptografia!`)
console.log(`Mensagem a ser criptografada: "${mensagem}"`)

function encripta(dados){
	var mensx="";
	var l;
	var i;
	var j=0;
	var ch;
	ch = "assbdFbdpdPdpfPdAAdpeoseslsQQEcDDldiVVkadiedkdkLLnm";
	for (i=0;i<dados.length; i++){
		j++;
		l=(Asc(dados.substr(i,1))+(Asc(ch.substr(j,1))));
		if (j==50){
			j=1;
		}
		if (l>255){
			l-=256;
		}
		mensx+=(Chr(l));
	}
	console.log(`Mensagem encriptada: ${mensx}`)
	decripta(mensx)
}
function decripta(dados){
	var mensx="";
	var l;
	var i;
	var j=0;
	var ch;
	ch = "assbdFbdpdPdpfPdAAdpeoseslsQQEcDDldiVVkadiedkdkLLnm";
	for (i=0; i<dados.length;i++){
		j++;
		l=(Asc(dados.substr(i,1))-(Asc(ch.substr(j,1))));
		if (j==50){
			j=1;
		}
		if (l<0){
			l+=256;
		}
		mensx+=(Chr(l));
	}
	console.log(`Mensagem decriptada: ${mensx}`)
}
function Asc(String){
	return String.charCodeAt(0);
}

function Chr(AsciiNum){
	return String.fromCharCode(AsciiNum)
}

encripta(mensagem)