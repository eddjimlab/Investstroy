$('.directions-blocks').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]
});

$(document).ready(function () {
    var menuBtn = $('.top-nav_btn');
    var menu = $('.top-nav-menu');
    var sidebarBtn = $('.left-side-bar_btn');
    var sidebarMenu = $('.left-side-bar_menu');
    menuBtn.on('click', function (event) {
        event.preventDefault(),
            menu.toggleClass('top-nav-menu__active');
    });
    sidebarBtn.on('click', function (event) {
        event.preventDefault(),
            sidebarMenu.toggleClass('left-side-bar_menu__active');
    });
});