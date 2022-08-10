// 1.10) Faça um programa q criptografia/decriptografia de uma mensagem (string)

mensagem = "Esse amor é azul como o mar azul"
console.log(`Mensagem a ser criptografada: "${mensagem}"`)
var encrypted = CryptoJS.AES.encrypt(mensagem, key)
console.log(`Mensagem criptografada: "${encrypted}".`)
var decrypted = CryptoJS.AES.decrypt(encrypted, key)
console.log(`Mensagem decriptografada novamente: "${decrypted}".`)


function Encripta(dados){
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
	document.getElementById("1").value=mensx;
}
function Descripta(dados){
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
	document.getElementById("2").value=mensx;
}
function Asc(String){
	return String.charCodeAt(0);
}

function Chr(AsciiNum){
	return String.fromCharCode(AsciiNum)
}