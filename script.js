var thing;

$(document).ready(function () {

  $(".zoom").hover(function() {
    thing = $(this).closest('.zoom');

    thing.css('z-index', 1);
    thing.children('.zoomText').css('font-size', '60px')
    thing.children('.zoomText').css('font-family', 'BatmanForeverAlternate')
    thing.children('.zoomText').css('color', 'yellow')

    // this is where the popping out effect happens
    $(this).animate({ height: "400", width: "375", left: "-=85", top: "-=55" }, "fast");
  }, 
  function() {
    thing.css("z-index", 0);
    $(this).animate({ height: "200", width: "187.5", left: "+=85", top: "+=55" }, "fast");
    thing.children('.zoomText').css('font-size', '20px')
    thing.children('.zoomText').css('font-family', 'monospace')
    thing.children('.zoomText').css('color', 'orange')
  }
  );
});


