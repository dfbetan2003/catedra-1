var multipleCardCarousel = document.querySelector(
    "#slidercard"
  );
  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false
    });
    var carouselWidth = $("#slidercard .carousel-inner")[0].scrollWidth;
var cardWidth = $("#slidercard .carousel-item").width();

var scrollPosition = 0;

$("#slidercard .carousel-control-next").on("click", function() {
    if(scrollPosition< carouselWidth - cardWidth * 4){
    scrollPosition += cardWidth;
    $("#slidercard .carousel-inner").animate({scrollLeft: scrollPosition},
       600
       );
    }
});
$("#slidercard .carousel-control-prev").on("click", function(){
    if(scrollPosition>0){
    scrollPosition -= cardWidth;
    $("#slidercard .carousel-inner").animate({scrollLeft: scrollPosition},
       600);
    }
});
  } else {
    $(multipleCardCarousel).addClass("slide");
  }

