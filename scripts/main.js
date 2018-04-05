//Mudar imagem ao clicar nela
var minhaImagem = document.querySelectorAll('img');

minhaImagem[0].onclick = function(){

	var meuLocal = minhaImagem[0].getAttribute('src');

	if(meuLocal === 'imagens/tecnologia.jpg'){
		minhaImagem[0].setAttribute('src', 'imagens/ix35.jpg');
	}	else{
			minhaImagem[0].setAttribute('src', 'imagens/tecnologia.jpg');
	}

}

minhaImagem[1].onclick = function(){

	var meuLocal = minhaImagem[1].getAttribute('src');

	if(meuLocal === 'imagens/ix35.jpg'){
		minhaImagem[1].setAttribute('src', 'imagens/tecnologia.jpg');
	}	else{
			minhaImagem[1].setAttribute('src', 'imagens/ix35.jpg');
	}

}

//Registrar nome de usuário na página e deixá-lo mesmo ao fechar a página

var meuBotao = document.querySelector('button');
var meuTitulo = document.querySelector('h1');

function registraUsuario(){

	var usuario = prompt('Por favor, informe o usuário.');
	meuTitulo.textContent = 'Bem vindo a minha página web, ' + usuario;
	localStorage.setItem('ultimoUsuario', usuario);
}

if(!localStorage.getItem('ultimoUsuario')){

	registraUsuario();

}else{

	var meuUltimoUsuario = localStorage.getItem('ultimoUsuario');
	meuTitulo.textContent = 'Bem vindo a minha página web, ' + meuUltimoUsuario;

}


meuBotao.onclick = function(){

	registraUsuario();

}

/*
var ultimoUsuario = localStorage.getItem('ultimoUsuario');
localStorage.removeItem('ultimoUsuario');
*/