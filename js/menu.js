$(function(){
  var botao = $('#btn-menu');
  var fundo_link = $('#fundo-link');

  botao.on('click', function(e){
    fundo_link.toggleClass('active');
    $('#barra-lateral-esquerda').toggleClass('active');
    e.preventDefault();
  });
  fundo_link.on('click', function(e){
    fundo_link.toggleClass('active');
    $('#barra-lateral-esquerda').toggleClass('active');
    e.preventDefault();
  });
}()); 