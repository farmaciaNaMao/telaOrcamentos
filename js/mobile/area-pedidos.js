function areaDosPedidos(areaPedidos, telasDosDetalhes){

	var pedido = document.querySelector(".primeiro-pedido");


	pedido.addEventListener("click", function(){

		if($("#mostrar-oculta").hasClass('fa fa-chevron-up')){
			$("#mostrar-oculta").removeClass();
			$("#mostrar-oculta").addClass('fa fa-chevron-down');

		var informacoesPedido = {
			infoNome : $(this).find(".info-nome").text(),
			infoNumero : $(this).find(".info-numero").text(),
			infoHora : $(this).find(".info-hora").text(),
			infoAtend : $(this).find(".info-atend").text()
		}

			$(".timeline").show();
			$(".ferramentas").show();
			$(".solicitar-imagem").hide();
			$(".motivos-cancelamentos").hide();
	

		//Ocultar todos os Pedidos
		for(var i in areaPedidos){
			areaPedidos[i].style.display = 'none';}

		// Mostra o Container dos Detalhes do Pedido/Cliente
		if($(".detalhes-pedido").is(":hidden")){


			//Mostra as Informacoes do Cliente
			var detalhesPedido = document.querySelector(".detalhes-pedido");
			detalhesPedido.style.display = 'initial';

			//Esconder As Telas das Informacoes Detalhadas do CLiente

			$(".localizacao-cliente").hide();
			//telasDosDetalhes.telaInformacoes.style.display = 'none';
			//telasDosDetalhes.telaProposta.style.display = 'none';
			//telasDosDetalhes.telaPedidoPronto.style.display = 'none';
			//telasDosDetalhes.telaSuporte.style.display = 'none';


			//Mostra a Timeline *******
			//$(".timeline").hide();


			//Remove  e Adciona Novo Pedido
			$(".pedido-clicado").remove();
			$(".detalhes-pedido").prepend(        
				"<div class='pedido-clicado'>" +
          			"<div class='logo-pedido'><span>0</span><div></div></div>" +
          				"<div class='detal-pedido'>" +
              				"<div class='first-detalhes-info'>" +
              					"<div class='detalhe-nome'>" + informacoesPedido.infoNome + "</div>" +
              					"<div class='detalhe-numero'>" + informacoesPedido.infoNumero + "</div>" +
          					"</div>" +
         					 "<div class='second-detalhes-info '>" +
            				 "<div class='detalhe-hora'>" + informacoesPedido.infoHora +"</div>" +
         					 "<div class='detalhe-atend'>" + informacoesPedido.infoAtend + "</div>" +
         				 "</div>" +
         			 "</div>" +
         		 "</div>"); 
		}

		}
	});


	//Quando clicar no Pedido Gerado
	$(".titulo-pedidos").click(function(){

		if($("#mostrar-oculta").hasClass('fa fa-chevron-down')){
			$("#mostrar-oculta").removeClass();
			$("#mostrar-oculta").addClass('fa fa-chevron-up');


			//Esconder Novamente as Informacoes do CLiente
			var detalhesPedido = document.querySelector(".detalhes-pedido");
			detalhesPedido.style.display = 'none';


				var tituloPedido = $(".title-text").text();
				if(tituloPedido == "Pendentes"){

					//Oculta todos os Pedidos Novamente
					for(var i in areaPedidos){
						areaPedidos[i].style.display = 'none';}
						areaPedidos.pedidosPendentes.style.display = 'initial';

				}else if(tituloPedido == "Análise"){
					for(var i in areaPedidos){
						areaPedidos[i].style.display = 'none';}
						areaPedidos.pedidosAnalise.style.display = 'initial';

				}else if(tituloPedido == "Aceitos") {
					for(var i in areaPedidos){
						areaPedidos[i].style.display = 'none';}
						areaPedidos.pedidosAceitos.style.display = 'initial';

				}else if(tituloPedido == "Prontos"){
					for(var i in areaPedidos){
						areaPedidos[i].style.display = 'none';}
						areaPedidos.pedidosProntos.style.display = 'initial';

				}else if(tituloPedido == "Concluídos"){
					for(var i in areaPedidos){
						areaPedidos[i].style.display = 'none';}
						areaPedidos.pedidosConcluidos.style.display = 'initial';

				}else if(tituloPedido == "Recusados"){
					for(var i in areaPedidos){
						areaPedidos[i].style.display = 'none';}
						areaPedidos.pedidosRecusados.style.display = 'initial';

				}else if(tituloPedido == "Cancelados"){
					for(var i in areaPedidos){
						areaPedidos[i].style.display = 'none';}
						areaPedidos.pedidosCancelados.style.display = 'initial';				
				}


			//Esconder a Timeline ******
			$(".timeline").hide();
			$(".ferramentas").hide();
		}

	});




} //Fim da Funcao


