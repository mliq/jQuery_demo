var thing;
var textThing;

$(document).ready(function () {

  $('.zoom').hover(function() {
    thing = $(this).closest('.zoom');
    textThing = thing.children('.zoomText');

    thing.css('z-index', 1);

    if(this.id=='div1'){
      $('#monkey').fadeIn(1000);
      $('#monkey').css('z-index',2);
      $('#monkeyDiv').delay(1000).animate({marginLeft: '+=60px'}, '30000').animate({marginLeft: '+=60px'}, '30000').animate({marginLeft: '+=60px'}, '30000').animate({marginLeft: '+=60px'}, '30000').animate({marginLeft: '+=60px'}, '30000').animate({marginLeft: '+=60px'}, '30000').animate({marginLeft: '+=60px'}, '30000').animate({marginLeft: '+=60px'}, '30000').animate({marginLeft: '+=60px'}, '30000').animate({marginLeft: '+=60px'}, '30000').animate({marginLeft: '+=60px'}, '30000').animate({marginLeft: '+=60px'}, '30000').animate({marginLeft: '+=60px'}, '30000');
    }

    if(this.id=='batCat'){
      $('#monkey').animate({width:'600', height: '600'},1000).animate({width:'0', height: '0'},500).fadeOut(1000);
      // $('body').children('#song').trigger('pause');
      $('#monkey').delay(500).prepend("<audio id='horn' src='batmanHorn.mp3' autoplay></audio>");


      // $('#monkeyDiv').animate({marginTop: '+=50px'},'500').animate({marginTop: '+=50px'},'500').animate({marginTop: '+=50px'},'500');
      // $('#monkey').delay(600).fadeOut(1000);
    }

    if(this.id=='div1'){
      if($('body').children('audio').length){
        $('body').children('audio').trigger('play');
      } else {
        $('body').delay(500).prepend("<audio id='song' src='batcatfull.mp3' autoplay></audio>");
      }
    }

    $(this).animate({ height: '400', width: '375', left: '-=85', top: '-=55' }, 'fast');
    textThing.hide();

    textThing.css('font-size', '60px').css('font-family', 'BatmanForeverAlternate').css('color', 'yellow');


    if(textThing.text() =="Bat Cat?"){
      textThing.text("BATCAT");
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

    $('body').children('audio').trigger('pause');

  }
  );
});


