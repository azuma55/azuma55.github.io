        $('.slider').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            arrow: true,
            prevArrow: '<div class="prev-arrow"></div>',
            nextArrow: '<div class="next-arrow"></div>',
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            dotsClass: 'slide-dots',
            appendDots: $('.dots'),
            responsive:[
                {
                    breakpoint: 850,
                    settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    }
                }
            ]

        });