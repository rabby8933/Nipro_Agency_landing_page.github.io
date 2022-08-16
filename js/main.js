// init Isotope
var $grid = $(".project-lists").isotope({
  // options
});
// filter items on button click
$(".filter-button-group").on("click", "button", function () {
   $(this).addClass('active').siblings().removeClass('active');
   var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});

//Owl Carousel 2 function call
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  navText:["PREV", "NEXT"],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// Wow js function call
new WOW().init();