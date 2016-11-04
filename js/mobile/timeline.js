function timeline(){

var telaOrcamento = $(".novo-orcamento");
var telaChat = $(".mensagem");
var telaImagem = $(".solicitar-imagem");
var telaCancelar = $(".motivos-cancelamentos");

var btnOrcamentos = $(".primeira-ferramenta");
var btnChat = $(".segunda-ferramenta");
var btnImagem = $(".terceira-ferramenta");
var btnCancelar = $(".quarta-ferramenta");

function ocultaFerramentas(){
	telaOrcamento.hide();
	telaChat.hide();
	telaImagem.hide();
	telaCancelar.hide();
	$(".chat").show();
}

btnOrcamentos.click(function(){
	ocultaFerramentas();
	telaOrcamento.show();
	telaChat.show();

})

btnChat.click(function(){
	ocultaFerramentas();
	telaChat.show();
})

btnImagem.click(function(){
	ocultaFerramentas();
	telaImagem.show();
});

btnCancelar.click(function(){
	ocultaFerramentas();
	$(".chat").hide();
	telaCancelar.show();
})


$(".btn-add").click(function(){

	var num1 = 0;
	if(num1 <= 1000){
	  $(".campos-valores").append("<div class='campo-add'>" +
	  "<input type='text' class='campo-desc' placeholder=' Descrição do Produto'>" +
	  "<input type='text' class='campo-valor' placeholder=' R$0,00'> " +
	  "<button class='btn-remove'><i class='fa fa-close'></i></button> " +
	  "</div>");
	   num1++;
	  }

	  $(".campos-valores").css({"height":"70px", "overflow": "auto"});

});

 $(".campos-valores").on("click", ".btn-remove", function(e){
  e.preventDefault();
  $(this).parent('div').remove();
  num1--;
  if(num1 == 1){
 	 $(".campos-valores").css({"height":"20px", "overflow":"auto"});
   }
});





}