function clickCriptografar(evento)
{	
	evento.preventDefault();
	let texto = document.querySelector("#textoPrincipal").value;
	let textoCodificado = codificar(texto);

	let textoSecundario = document.querySelector("#textoSecundario");
	textoSecundario.value = textoCodificado;
}

function clickDescriptografar(evento)
{
	evento.preventDefault();
	let texto = document.querySelector("#textoPrincipal").value;
	let textoDescodificado = decodificar(texto);

	let textoSecundario = document.querySelector("#textoSecundario");
	textoSecundario.value = textoDescodificado;
}

function clickCopiar(evento)
{
	evento.preventDefault();
	let texto = document.querySelector("#textoSecundario").value;

	//função para colar no clipboard
	navigator.clipboard.writeText(texto);
}


var botaoCrip = document.querySelector("#criptografar");
botaoCrip.addEventListener("click", clickCriptografar);

var botaoDecrip = document.querySelector("#descriptografar");
botaoDecrip.addEventListener("click", clickDescriptografar);

var botaoCopia = document.querySelector("#copiar");
botaoCopia.addEventListener("click", clickCopiar);