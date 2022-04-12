/* SLICK */
$(document).ready(function(){
    $('.carousel__inner').slick({
        //dots: true, //точки внизу слайдера
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        //adaptiveHeight: true, //автовысота при переключении
        autoplay: true,
        autoplaySpeed: 3000,
        fade:true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/4/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/4/next.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });

/* TINY SLIDER */
/* const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    nav: false,
    speed: 1500,
    autoplay: false,
    autoplayTimeout: 5000,
    controls:false,
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
});

document.querySelector('.prev').addEventListener ('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener ('click', function () {
    slider.goTo('next');
}); */

/* КЛИКИ ПО ТАБАМ */
$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

function toggleSlide(item){
    $(item).each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });
};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');

    /* MODAL */
    $('[data-modal=cnsl]').on('click', function(){
        $('.overlay, #cnsl').fadeIn('slow');
    });
    $('.mdl__close').on('click', function(){
        $('.overlay, #cnsl, #thx, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i){
        $(this).on('click', function(){
            $('#order .mdl__descr').text($('.catalog-item__subtitle').eq(i).text())
            $('.overlay, #order').fadeIn('slow');
        });
    });
    
    /* ВАЛИДАЦИЯ ФОРМЫ */
    function validateForms(form){
        $(form).validate({
            rules:{
                name: {
                    required: true,
                    minlength: 2,
                },
                phone: {
                    required: true,
                    minlength: 13,
                },
                email: {
                    required: true,
                    email: true,
                    }
                },
                messages: {
                    name: {
                        required: "Пожалуйста, введите своё имя",
                        minlength: jQuery.validator.format("Минимум 2 символа!")
                      },
                    phone: {
                            required: "Пожалуйста, введите номер телефона",
                            minlength: jQuery.validator.format("Формат номера: +375 111 11 11")
                        },
                    email: {
                      required: "Нам необходим ваш email для связи",
                      email: "Email должен быть в формате name@domain.com"
                    },
            },
        });
    };

    validateForms('#cnsl-form');
    validateForms('#cnsl form');
    validateForms('#order form');

    $('input[name=phone]').mask("+375 (99) 999 99 99");
});