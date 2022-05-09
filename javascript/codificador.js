// objetos para mapear vogal e código
const vogalToCode = {
	a:'ai',
	e:'enter',
	i:'imes',
	o:'ober',
	u:'ufat'
}

const codeToVogal = {
	ai:'a',
	enter:'e',
	imes:'i',
	ober:'o',
	ufat:'u',
}

//expressões regulares usadas
//RegExp recebe o padrão da expressão e a flag
const vogais = new RegExp(Object.keys(vogalToCode).join("|"),"g");
const codigo = new RegExp(Object.keys(codeToVogal).join("|"),"g");


//funções chamadas em replace
function replaceVogal(vogal)
{
	return vogalToCode[vogal];
}
function replaceCode(codigo)
{
	return codeToVogal[codigo];
}

//funções para codificar e decodificar
//ambas utilizam replace com uma expressão regular e uma função que realiza as trocas
function codificar(texto)
{	
	texto = texto.toLowerCase();

	return texto.replace(vogais,replaceVogal);

}
function decodificar(textoCodificado)
{
	textoCodificado = textoCodificado.toLowerCase();

	return textoCodificado.replace(codigo, replaceCode);
}