var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).load(function() {

   

});


$(window).resize(function() {

    getShapeParams()

});

$(document).ready(function() {
   
   $(".h-box").each(function() {

        var shapeTempl = "<span class='shape'></span><span class='shape'></span>";

        $(this).prepend(shapeTempl);

   });

   getShapeParams();

    $(".thumbnails-2").find(".thumb-2:even").addClass("even_th");
    $(".thumbnails-2").find(".even_th:odd").addClass("right_th");

});

function getShapeParams() {

    $(".h-box").each(function() {

        var shape = $(this).find(".shape");

        shape.css({
            "width" : ( $(this).closest(".row").width() - $(this).find("h2").outerWidth(true) ) / 2 + "px"
        });

   });

}