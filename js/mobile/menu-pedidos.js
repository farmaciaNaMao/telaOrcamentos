function menuPeididosMobile(areaPedidos){

	ocultaPedidos(areaPedidos);
	areaPedidos.pedidosPendentes.style.display = 'initial';

	$(".timeline").hide();
	$(".ferramentas").hide();

	// Pegamos a Lista de Menu
	var listaDoMenu = document.querySelector(".lista-menu");
	listaDoMenu.style.display = 'none';

	// Pegamps o Botao do Menu e Fazemos o Menu Subir e Descer
	var btnMenu = document.querySelector("#button-pedidos");
	btnMenu.addEventListener("click", function(){
		if($(".lista-menu").is(":hidden")){
			$(".lista-menu").slideDown();
		}else {
			$(".lista-menu").slideUp();
		}
	});

	// Objeto Proprio, ou Somente Para o Menu, Contendo os Tipos de Pedidos
	var itensMenu = {
		pendentes : document.querySelector(".pendentes"),
		analise : document.querySelector(".analise"),
		aceitos : document.querySelector(".aceitos"),
		prontos : document.querySelector(".prontos"),
		concluidos : document.querySelector(".concluido"),
		recusados : document.querySelector(".recusado"),
		cancelados : document.querySelector(".cancelado")
	};



	function ocultaPedidos(areaPedidos){
		var num = 0;
		for(num in areaPedidos){
			areaPedidos[num].style.display = 'none';
		}

	}

	function trocarTextoPedido(pedido,cor, texto){
		
		$(".pedido-clicado").remove();
		
		$(".lista-menu").slideUp();	
		
		//Oculta a Area dos Pedidos
		ocultaPedidos(areaPedidos);

		//Oculta a Area dos Detalhes
		var detalhesPedido = document.querySelector(".detalhes-pedido");
		detalhesPedido.style.display = 'none';

		$(".timeline").hide();
		$(".ferramentas").hide();

		var titulo = document.querySelector(".title-text");
		titulo.innerHTML = texto;

		var tituloPedido = document.querySelector(".titulo-pedidos");
		tituloPedido.style.borderTop = '2px solid' + cor;

		pedido.style.display = 'initial';

		document.getElementById("body").location.reload();

	}




	itensMenu.pendentes.addEventListener("click", function(){
		trocarTextoPedido(areaPedidos.pedidosPendentes, "#f1003b", "Pendentes");
	});

	itensMenu.analise.addEventListener("click", function(){
		trocarTextoPedido(areaPedidos.pedidosAnalise, "#F39C19", "Análise");
	});

	itensMenu.aceitos.addEventListener("click", function(){
		trocarTextoPedido(areaPedidos.pedidosAceitos, "#32CD32", "Aceitos");
	});

	itensMenu.prontos.addEventListener("click", function(){
		trocarTextoPedido(areaPedidos.pedidosProntos, "#3F7CE9", "Prontos");
	});

	itensMenu.concluidos.addEventListener("click", function(){
		trocarTextoPedido(areaPedidos.pedidosConcluidos, "#000", "Concluídos");
	});

	itensMenu.recusados.addEventListener("click", function(){
		trocarTextoPedido(areaPedidos.pedidosRecusados, "#000", "Recusados");
	});

	itensMenu.cancelados.addEventListener("click", function(){
		trocarTextoPedido(areaPedidos.pedidosCancelados, "#000", "Recusados");
	});



}