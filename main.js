$(document).ready(function(){

  
    $("#botao-limpar").click(function() {
      $("").empty();
    });
  
    $('form').on('submit', function(e){
      e.preventDefault();
      const novaTarefa = $('#nova-tarefa').val();
      const novoItem = $('<li></li>')
      $('botao-Enviar').click(function() {
        $("ul").append("<li>" + value + "</li>");
        $('#nova-tarefa').val('');
      })
      $(`<li> ${novaTarefa}</li>`).appendTo(novoItem);
      $(novoItem).appendTo('ul');
      $('#nova-tarefa').val('');
      $("ul").on('click', 'li', function() {
        $(this).toggleClass('strike');
    
      });
  
    })
  
  })
  