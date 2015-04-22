var thing;
var textThing;

$(document).ready(function () {

  $('.zoom').hover(function() {
    thing = $(this).closest('.zoom');
    textThing = thing.children('.zoomText');

    thing.css('z-index', 1);
    $(this).animate({ height: '400', width: '375', left: '-=85', top: '-=55' }, 'fast');
    textThing.hide();

    textThing.css('font-size', '60px').css('font-family', 'BatmanForeverAlternate').css('color', 'yellow');

    console.log(textThing.text());

    if(textThing.text() =="Bat Cat?"){
      textThing.text("BATCAT");
      textThing.append("<audio id='song' src=http://www.uscis.gov/files/nativedocuments/Track%2093.mp3></audio>");
      textThing.closest('#song').play();
    }

    textThing.fadeIn(800);
  }, 
  function() {
    thing.css('z-index', 0);
    $(this).animate({ height: '200', width: '187.5', left: '+=85', top: '+=55' }, 'fast');
    textThing.css('font-size', '20px');
    textThing.css('font-family', 'monospace');
    textThing.css('color', 'orange');
    if(textThing.text() =="BATCAT"){
      textThing.text("Bat Cat?");
    }

  }
  );
});


