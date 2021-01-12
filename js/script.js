$( document ).ready(function() {
    $('.slider').slick({
        dots:false,
        slidesToShow:3,
        slidesToScroll:1,
        speed:1000,
        rows:1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    rows:1,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    rows:1,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    arrows:false,
                    dots:true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    rows:1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows:false,
                    dots:false
                }
            }
        ]
    });

    $('.carousel').slick({
        dots:true,
        slidesToShow:3,
        slidesToScroll:3,
        speed:1500,
        rows:1,
        focusOnSelect:true,
        arrows:false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots:true,
                    slidesToShow:2,
                    slidesToScroll:2,
                    speed:1500,
                    rows:1,
                    focusOnSelect:true,
                    arrows:false,
                    infinite: true
                }
            },    
            {
                breakpoint: 992,
                settings: {
                    dots:true,
                    slidesToShow:2,
                    slidesToScroll:2,
                    speed:1500,
                    rows:1,
                    focusOnSelect:true,
                    arrows:false,
                    infinite: true
                }
            },
            {    
                breakpoint: 576,
                settings: {
                    dots:true,
                    slidesToShow:1,
                    slidesToScroll:1,
                    speed:1500,
                    rows:1,
                    focusOnSelect:true,
                    arrows:false,
                    infinite: true
                }
            }
        ]    
    });

    $('.title-gray').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 1600) {
            $('.arrow__up').fadeIn();
        } else {
            $('.arrow__up').fadeOut();
        }
    });

    $('.title-spoil').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });

    const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('[data-modal=thanks]').on('click', function() {
        $('.overlay, #thanks').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks').fadeOut('slow');
    });

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    validateForms('#consultation-form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");
});