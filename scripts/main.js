



	$(window).scroll(function() {
    var styles= [{"element":".gi-partner", "style":"fadeIn"},
    {"element":"h1, h2", "style":"slideRight"},
    {"element":"p", "style":"fadeIn"},
    {"element":".gi-feature-item", "style":"hatch tossing"}];

    $.each(styles, function(index, element){
      $(element.element).each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+400) {
          $(this).addClass(element.style);
        }
      });
    });

	});

  /*$(document).ready(function(){
    $('.gi-partner').waypoint(function() {
     $(this).addClass(".slideExpandUp.pulse");
   });
 });*/
