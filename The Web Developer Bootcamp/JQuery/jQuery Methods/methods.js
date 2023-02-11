// Demonstrate .attr function for jQuery

$("#image").mouseover(function() {
    $("img").attr("src", "https://live.staticflickr.com/2418/2243463214_f32ab004af_b.jpg");
});

$("#image").mouseleave(function() {
    $("img").attr("src", "https://www.earthrangers.com/content/wildwire/384x576xbaby_pine_marten_flickr_steve_slocomb.jpg.pagespeed.ic.Zj5LG6WiTN.jpg");
});

// .val function - used to retreive the value that is selected or typed into the field.

