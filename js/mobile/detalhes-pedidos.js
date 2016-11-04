function funcoesDetalhesPedido(escondeObj, telasDosPedidos, escondeObj) {

	//Ocultar informacoes do cliente: nome, celular.telefone,data de nascimento etc
	//Ocultar a Proposta
	//Ocultar o Pedido Pronto
	//Ocultar o Suporte


	var btnInformacoesCliente = document.querySelector(".info-cliente-btn");

	var btnCliente = {
		btnProposta : document.querySelector(".btnProposta"),
		btnPedidoPronto : document.querySelector(".btnPedidoPronto"),
		btnSuporte : document.querySelector(".btnSuporte")
	}

	function resetaCorBotao(){
		for(var t in btnCliente){
			btnCliente[t].style.color = '#f1003b' ;
			btnCliente[t].style.backgroundColor  = 'transparent';
		}
	}


		btnInformacoesCliente.addEventListener("click", function(){

		if($(".localizacao-cliente").is(":hidden")){

			if($(".icon-info i").hasClass("fa fa-chevron-down")){
               $(".icon-info i").removeClass();
               $(".icon-info i").addClass("fa fa-chevron-up"); }
			
				//Esconde as telas 
				escondeObj(telasDosPedidos);
				$(".detalhes-cliente").show();
				$(".localizacao-cliente").slideDown();

			}else if($(".tela-proposta").is(":visible") ||
           		 $(".tela-peidido-pronto").is(":visible") || $(".tela-suporte").is(":visible")) {
					//Esconde as telas 
					escondeObj(telasDosPedidos);
					$(".detalhes-cliente").show();
			}else {
				if($(".icon-info i").hasClass("fa fa-chevron-up")){
					$(".icon-info i").removeClass();
					$(".icon-info i").addClass("fa fa-chevron-down"); 

					$(".localizacao-cliente").slideUp();

					}
				}
			

		});




	btnCliente.btnProposta.addEventListener("click", function(){
		if($(".tela-proposta").is(":hidden")){

			//Esconde as telas 
			escondeObj(telasDosPedidos);
			//mostra tela referente ao Botao
			$(".tela-proposta").show();

			//Resetar as Cores dos Botoes
			resetaCorBotao();
			btnCliente.btnProposta.style.backgroundColor = '#f1003b';
			btnCliente.btnProposta.style.color = '#fff';

			//Esconde o Chat *****


		}
	});

	btnCliente.btnPedidoPronto.addEventListener("click", function(){
		if($(".tela-peidido-pronto").is(":hidden")){
			escondeObj(telasDosPedidos);
			$(".tela-peidido-pronto").show();


			//Resetar as Cores dos Botoes
			resetaCorBotao();
			btnCliente.btnPedidoPronto.style.backgroundColor = '#f1003b';
			btnCliente.btnPedidoPronto.style.color = '#fff';

		}
	});

	btnCliente.btnSuporte.addEventListener("click", function(){
		if($(".tela-suporte").is(":hidden")){
			escondeObj(telasDosPedidos);
			$(".tela-suporte").show();


			//Resetar as Cores dos Botoes
			resetaCorBotao();
			btnCliente.btnSuporte.style.backgroundColor = '#f1003b';
			btnCliente.btnSuporte.style.color = '#fff';

		}
	});





}