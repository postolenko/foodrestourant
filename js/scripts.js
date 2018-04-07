var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var shape;
var shapeTempl;

$(window).load(function() {

   

});

$(window).resize(function() {

    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    getShapeParams();

    getAnimation();

    getImgPath();

});

$(document).scroll(function() {

    getAnimation();

    getImgPath();

});

$(document).ready(function() {

    getAnimation();

    getImgPath();

    $(".h-box").each(function() {

      shapeTempl = "<span class='shape'></span><span class='shape'></span>";

      $(this).prepend(shapeTempl);

    });

    getShapeParams();

    $(".thumbnails-2").find(".thumb-2:even").addClass("even_th");
    $(".thumbnails-2").find(".even_th:odd").addClass("right_th");

});

function getShapeParams() {

    $(".h-box").each(function() {

        shape = $(this).find(".shape");

        shape.css({
            "width" : ( $(this).closest(".row").width() - $(this).find("h2").outerWidth(true) ) / 2 + "px"
        });

   });

}

function getAnimation() {

  $("section").each(function() {

    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {

      $(this).addClass("active");

    }

  });  

}

function getImgPath() {

    $("img").each(function() {
        if($(this).offset().top <= $(document).scrollTop() + $(window).height()
            && $(this).attr("src") == "" ) {
            var imgPath = $(this).attr("data-src");
            $(this).attr("src", imgPath);
        }
    });

}