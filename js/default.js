$(document).ready(function(){


//Funcoes Para Ver o Tamanho do Dispositivo
 function tamanhoTela(){
	 var tamanhoScreen = window.screen.width;
		return tamanhoScreen;
}

function alturaScreen(){
	var alturaScreen = window.screen.height;
		return alturaScreen;
}



/* Area dos Objetos */ 


/* Area dos Pedidos : pendentes, analise, aceitos, prontos, concluidos, recusados, cancelados */
var areaPedidos = {
	pedidosPendentes : document.querySelector(".pedidos-pendentes"),
	pedidosAnalise : document.querySelector(".pedidos-analise"),
	pedidosAceitos : document.querySelector(".pedidos-aceitos"),
	pedidosProntos : document.querySelector(".pedidos-prontos"),
	pedidosConcluidos  : document.querySelector(".pedidos-concluidos"),
	pedidosRecusados : document.querySelector(".pedidos-recusados"),
	pedidosCancelados  : document.querySelector(".pedidos-cancelados")
};

var telasDosDetalhes = {
	telaInformacoes : 	document.querySelector(".detalhes-cliente"),
	telaProposta : 		document.querySelector(".tela-proposta"),
	telaPedidoPronto :  document.querySelector(".tela-peidido-pronto"),
	telaSuporte : 	 	document.querySelector(".tela-suporte")
}


function escondeObj(obj){
	for(var i in obj){
		obj[i].style.display = 'none';
	}
}


//Somente Executara uma Funcao SE o Dispositov for ate 1024px
if(tamanhoTela() <= 1024){

	// Vamos Ocultar o Detalhes do Peidido e a Timeline
	var detalhesPedido = document.querySelector(".detalhes-pedido");
	detalhesPedido.style.display = 'none';


	var Timeline = 0;

	//Executando a Funcao do Menu Para Dispositivos Moveis 'Mobile'
	menuPeididosMobile(areaPedidos);

	//Executando a Funcao das Informacoes Detalhadas do Pedido
	areaDosPedidos(areaPedidos, telasDosDetalhes);
	
	// Executando a Funcao das Informacoes Detalhadas do Cliente
	funcoesDetalhesPedido(escondeObj, telasDosDetalhes, escondeObj);

	//Executando a Funcao da Timeline
	timeline();

}



});