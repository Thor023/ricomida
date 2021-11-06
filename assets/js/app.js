$(function () {
    $("[data-toggle='tooltip']").tooltip();
    $("#enviar").click(function () {
      alert("El correo fue enviado correctamente");
    });
    //Cambiar el color de los subtitulos
    $("u").dblclick(function(){
      $(this).css("color","red")
    });
    $(".card-title").click(function(){
      $(".card-text").toggle();
    });

  });