$(document).ready(function () {

  $("#batCat").hover(function() {
    $(this).closest("img").css("z-index", 1);
    // this is where the popping out effect happens
    $(this).animate({ height: "400", width: "375", left: "-=55", top: "-=55" }, "fast");
  }, function() {
        $(this).closest("img").css("z-index", 0);
        $(this).animate({ height: "200", width: "187.5", left: "+=55", top: "+=55" }, "fast");
        }
      );
  });


