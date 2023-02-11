// Give all divs a background of purple
$("div").css("background", "purple")

// Give the divs with class highligh a width of 200px
$(".highlight").css("width", "200px")

// Give id third a orange border
$("#third").css("border", "4px solid orange")

// Turn the first div color to pink
// Using first-of-type is faster than using .first() due to it being native css
$("div").first().css("color", "pink")