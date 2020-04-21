// Top Slide
$(".slide-container").slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 700,
    touchThreshold: 10,
    waitForAnimate: false,
    easing: 'ease',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


// News Page Slide
const news_slide = document.querySelectorAll(".news-slide")
news_slide.forEach((el) => {
    if (parseInt($(el).children().length) > 1) {
        $(el).slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            speed: 700,
            touchThreshold: 10,
            waitForAnimate: false,
            easing: 'ease-in',
        });
    } else {
        $(el).slick({
            settings: "unslick"
        });
    }
})



