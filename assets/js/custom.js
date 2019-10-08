// Add your custom JS code here
$('.sponsers-slider').slick({
    slidesToShow: 7,
    slidesToScroll: 3,
    adaptiveHeight: true,
    speed: 1000,
    rtl: true,
    dots: false,
    arrows: true,
    infinite: false,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
  }); 
 
 