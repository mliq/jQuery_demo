var thing;
var textThing;

$(document).ready(function () {

  $(".zoom").hover(function() {
    thing = $(this).closest('.zoom');
    textThing = thing.children('.zoomText');

    thing.css('z-index', 1);
    $(this).animate({ height: "400", width: "375", left: "-=85", top: "-=55" }, "fast");
    textThing.hide();

    textThing.css('font-size', '60px').css('font-family', 'BatmanForeverAlternate').css('color', 'yellow');
    textThing.fadeIn(800);

    // this is where the popping out effect happens
  }, 
  function() {
    thing.css("z-index", 0);
    $(this).animate({ height: "200", width: "187.5", left: "+=85", top: "+=55" }, "fast");
    

    textThing.css('font-size', '20px');
    textThing.css('font-family', 'monospace');
    textThing.css('color', 'orange');
  }
  );
});


