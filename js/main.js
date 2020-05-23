$(function () {

    function closePopup() {
        $.magnificPopup.close();
    }

    function ibg() {

        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
            }
        });
    }

    ibg();

    let column = 1;
    let image_portfolio = $('.portfolio__img');
    for (let x = 0; x < image_portfolio.length; x++) {
        $(image_portfolio[x]).appendTo($('#column-' + column));
        if (column <= 3) {
            column++;
        }
        else {
            column = 1;
        }
    }

    function image() {
        let menu_btn = $('.selected');
        for (let x = 0; x < image_portfolio.length; x++) {
            if ($(image_portfolio[x]).data('section-object') == $(menu_btn).data('section-name')) {
                $(image_portfolio[x]).appendTo($('#column-' + column));

                if (column <= 3) {
                    column++;
                }
                else {
                    column = 1;
                }
                $(image_portfolio[x]).css('display', 'block');
            }
            else {
                $(image_portfolio[x]).css('display', 'none');
            }
        }
    }

    function imageAll() {
        $(image_portfolio).css('display', 'block');
        for (let x = 0; x < image_portfolio.length; x++) {
            $(image_portfolio[x]).appendTo($('#column-' + column));

            if (column <= 3) {
                column++;
            }
            else {
                column = 1;
            }
        }
    }

    $('.portfolio__header--btn').on('click', function () {
        if (!$(this).hasClass('selected')) {
            setTimeout(function () {
                $('.portfolio__images').css('opacity', '0');
                $('.portfolio__images').animate({
                    opacity: 1
                }, 250);
            }, 250)
            $('.portfolio__header--btn').removeClass('selected');
            $(this).addClass('selected');
            $('.portfolio__select').removeClass('active');
            $('.portfolio__header-menu').removeClass('active');
            $('.portfolio__select--arrow').removeClass('active');

            if ($(this).data('section-name') == 'all') {
                setTimeout(function () {
                    imageAll()
                }, 250)

            }
            else {
                setTimeout(function () {
                    image()
                }, 250)
            }
        }

    });

    $('.header__menu--icon').click(function (event) {
        $(this).toggleClass('active');
        $('.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.portfolio__select').on('click', function () {

        $('.portfolio__header-menu').toggleClass('active');
        $(this).toggleClass('active');
        $('.portfolio__select--arrow').toggleClass('active');
    });

    $('.portfolio__column').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        fixedContentPos: true,
        gallery: {
            enabled: false,
            navigateByImgClick: false,
            preload: [0, 1]
        }

    });

    $(window).scroll(function (event) {
        let scrollName = $('.about'),
            scrollElem = $(scrollName),
            scrollTop = scrollElem.offset().top;
        let st = $(this).scrollTop();
        if(st > scrollTop) {
            
        };
    });
    
        
        let header__menu = $('.header__top');
        let lastScrollTop;
        let st;
         $(window).scroll(function (event) {
            var st = $(this).scrollTop();
            if (st > lastScrollTop) {
                $(header__menu).css('transform', 'translateY(-100%)');
                $(header__menu).css('box-shadow', 'none');
            } else if (st < lastScrollTop || st == 0) {
                $(header__menu).css('transform', 'translateY(0%)');
                $(header__menu).css('box-shadow', '0px 7px 19px -8px rgba(0,0,0,0.2)');
            }
            lastScrollTop = st;
        });
    

    $('.inline-popups').magnificPopup({
        delegate: 'a',
        removalDelay: 500,
        fixedContentPos: true,
        closeOnBgClick: false,
        callbacks: {
            beforeOpen: function () {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true
    });
    $('a.hinge').magnificPopup({
        mainClass: 'mfp-with-fade',
        fixedContentPos: true,
        removalDelay: 1000, //delay removal by X to allow out-animation
        callbacks: {
            beforeClose: function () {
                this.content.addClass('hinge');
            },
            close: function () {
                this.content.removeClass('hinge');
            }
        },
        midClick: false
    });

    let id = $('.expertise__line').find('span').length;

    for (let i = 0; i <= id; i++) {
        let line = $('#line' + i).data('width');
        $('#line' + i).css('width', line + '%');
        $('.expertise__line--percent' + '-' + i).html(line + '%');
    }
    
    $('.slider__inner').slick({
        prevArrow: '<button class="slider__arrows slider__arrows--left wow"><img src="img/arrow-left.svg"></button',
        nextArrow: '<button class="slider__arrows slider__arrows--right wow"><img src="img/arrow-right.svg"></button>',
        dots: true,
        adaptiveHeight: true,
    });

    if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
        $('.portfolio__images img').css('width', '347px')
    }
    let x = false;
    let check = false;
    $('.pricing__plans--btn').on('click', function () {
        x = false;
        check = false;
        $('.plans__error > p').html('');
        $('.plans__field').css('border-bottom', '2px solid #000');
    });
    $('.send__btn').on('click', function () {
        if(check == false) {
        $('.plans__error > p').html('Fill in all the fields!');
        $('.plans__error').css('color', 'red');
        let field_test = $('.plans__field');
        for (let i = 0; i < field_test.length; i++) {
            if (!field_test[i].value) {
                for (let j = 0; j < field_test.length; j++) {
                    if (!field_test[j].value) {
                        $(field_test[j]).css('border-bottom', '2px solid red');

                    }
                    else if (field_test[j].value) {
                        $(field_test[j]).css('border-bottom', '2px solid #000');
                    }
                }
                x = false;

                $('.plans__error').css('animation', 'flash 0.8s ease-out 0s 1 normal forwards')
                setTimeout(function () {
                    $('.plans__error').css('animation', 'fadeOut 0.8s ease-out 0s 1 normal forwards')
                }, 5000);
                break;
            }
            else if (field_test[i].value) {
                $(field_test[i]).css('border-bottom', '2px solid #000');
                x = true;
            }
        }
        if (x == true) {
            $(field_test).val('');
            $('.plans__error > p').html('Message sent!');
            $('.plans__error').css('animation', 'fadeIn 0.8s ease-out 0s 1 normal forwards');
            $('.plans__error').css('color', 'green');
            setTimeout(function () {
                $('.plans__error').css('animation', 'fadeOut 0.8s ease-out 0s 1 normal forwards')
            }, 1000);
            check = true;
        }    
    }
    });
    $('.egg__title span').draggable();
    let timer = 0;
    $('.touch__btn').on('click', function () {
        $('.touch__error > p').html('Fill in all the fields!');
        $('.touch__error').css('color', 'red');
        let field = $('.field');
        let x = false;
        
        for (let i = 0; i < field.length; i++) {
            if (!field[i].value) {
                for (let j = 0; j < field.length; j++) {
                    if (!field[j].value) {    
                        $(field[j]).css('border-bottom', '2px solid red');
                    }
                    else if (field[j].value) {
                        $(field[j]).css('border-bottom', '2px solid #000');
                    }
                }
                x = false;
                $('.touch__error').css('animation', 'flash 0.8s ease-out 0s 1 normal forwards')
                setTimeout(function () {
                    $('.touch__error').css('animation', 'fadeOut 0.8s ease-out 0s 1 normal forwards')
                }, 5000);

                break;
            }
            else if (field[i].value) {
                $(field[i]).css('border-bottom', '2px solid #000');
                if(field[0].value == 'luteet'){
                    $('.site').css('display', 'none');
                    $('body').css('background-color', '#000');
                    $('.egg').css('display', 'block');
                }
                 
                x = true;
            }
        }
        if (x == true) {
            $('.touch__error > p').html('Message sent!');
            $('.touch__error').css('animation', 'fadeIn 0.8s ease-out 0s 1 normal forwards');
            $('.touch__error').css('color', 'green');
            setTimeout(function () {
                $('.touch__error').css('animation', 'fadeOut 0.8s ease-out 0s 1 normal forwards')
            }, 1000);
        }
    });

    $('.portfolio__footer--btn').on('click', function () {
        let scrollName = $('#section-3'),
            scrollElem = $(scrollName),
            scrollTop = scrollElem.offset().top;
        $('.portfolio__images').toggleClass('active')
        if (!$('.portfolio__images').hasClass('active')) {
            $('html, body').animate({
                scrollTop: scrollTop
            }, 0);
        }

    });

    $('.header__menu--btn, .header__mouse').on('click', function () {
        let scrollName = $(this).attr('data-scroll'),
            scrollElem = $(scrollName),
            scrollTop = scrollElem.offset().top;
        $('.header__menu').removeClass('active');
        $('.header__menu--icon').removeClass('active');
        $('body').removeClass('lock');
        if ($('.header__mouse')) {
            $('html, body').animate({
                scrollTop: scrollTop
            }, 700);
        }
        else {
            $('html, body').animate({
                scrollTop: scrollTop
            }, 1500);
        }


    });
    $('.footer__btn--home').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);

    });

    let input_buy = $('.plans__field');
    for (let input = 0; input < input_buy.length; input++) {
        let placeholder = $(input_buy[input]).data('placeholder');
        $(input_buy[input]).attr('placeholder', placeholder);

    }

    $(input_buy).focus(function () {
        $(this).attr('placeholder', '');

    });
    $(input_buy).blur(function () {
        placeholder = $(this).data('placeholder');
        $(this).attr('placeholder', placeholder);
    });

    let filed_touch = $('.field');
    for (let input = 0; input < filed_touch.length; input++) {
        let placeholder = $(filed_touch[input]).data('placeholder');
        $(filed_touch[input]).attr('placeholder', placeholder);

    }

    $(filed_touch).focus(function () {
        $(this).attr('placeholder', '');

    });
    $(filed_touch).blur(function () {
        placeholder = $(this).data('placeholder');
        $(this).attr('placeholder', placeholder);
    });

    new WOW().init();

});



