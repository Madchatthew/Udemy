$("#fade").on("click", function(){
    $(".box-fade").fadeOut(3000, function(){
        $(".box-fade").fadeIn(3000);
    });
});

$("#toggle").on("click", function(){
    $(".box-toggle").fadeToggle(3000);
});

$("#slide").on("click", function(){
    $(".box-slide").slideToggle(3000);
});