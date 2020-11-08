$(document).ready(function () {


    $('.js-parallax').each(function() {
        var $this = $(this);
        var $parallax_bg = $this.find('.js-parallax-bg');
        var $parallax_text = $this.find('.js-parallax-text');
        $(window).on('scroll', function(e) {
            console.log($(window).scrollTop());
            var scrolled = $(window).scrollTop() - $this.offset().top;

            if (scrolled >= 0 && scrolled <= window.innerHeight * 2) {
                $parallax_bg.css('transform', 'translate3d(0,' + (scrolled / 10) + 'px, 0)');
                $parallax_text.css('transform', 'translate3d(0,' + (scrolled / 12) + 'px, 0)');
            } else {
                $parallax_bg.css('transform', 'translate3d(0, 0, 0)');
                $parallax_text.css('transform', 'translate3d(0, 0, 0)');
            }
        });
    });

    // Address visible
    if ($(".header-address__caption").length > 0) {
        $(".header-address__caption").click(function () {
            $(this).toggleClass("active");
            $(".header-address__desc").toggleClass("active");
        });
    }
    $(document).mouseup(function (e){
        var div = $(".header-address__caption");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $(".header-address__caption").removeClass("active");
            $(".header-address__desc").removeClass("active");
        }
    });

    // Main menu open
    if ($(".header__burger").length > 0) {
        $(".header__burger").click(function () {
            $(this).toggleClass("active");
            $("body").toggleClass("lock");
            $(".menu").toggleClass("active");
            $(".menu__mobile").toggleClass("active");
        });
    }
    $(document).mouseup(function (e){
        var div = $(".header__burger");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $(".header__burger").removeClass("active");
            $(".menu").removeClass("active");
            $(".menu__mobile").removeClass("active");
        }
    });

    $('.header__menu a').click(function(){
        var tab = $(this).data("id-tab");
        $('.header__menu a').removeClass("active");
        $(this).addClass("active");
        $(this).parents().find('.services .services-top__block').removeClass("active").parents().find('.services .services__tab').removeClass("active").parents().find('.services .services__block').removeClass("active");
        $(this).parents().find('.services').find('.services-top__block[data-tab="'+tab+'"]').addClass("active").parents().find('.services').find('.services__tab[data-tab="'+tab+'"]').addClass("active").parents().find('.services').find('.services__block[data-tab="'+tab+'"]').addClass("active");
    });

    $('.order__label_categiry .select-options__value').click(function(){
        var select = $(this).data("id-select");
        $(this).parents().find('.order__label .select-options__value').removeClass("active").addClass("hide");
        $(this).parents().find('.order__label').find('.select-options__value[data-select="'+select+'"]').addClass("active");
    });

    // Promo slider
    if ($(".promo__slick").length > 0) {
        $('.promo__slick').slick({
            dots: false,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            responsive: [
                {
                    breakpoint: 760,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        adaptiveHeight: true
                    }
                }
            ]
        });
        $('.promo-arrow').click(function (event) {
            $(this).parents('.promo').find('.promo__slick').slick('slickNext');
            $(".progress-slider").html('<span></span>');
            $('.promo__slick--js').attr('data-step', 1);

        });
        $('.promo__slick').on('afterChange', function (event, slick, currentSlide) {
            productsliderinfo();
            $('.promo-discount__price').removeClass('active');
            $('.slick-active .promo-discount__price').addClass('active');

            $('.promo-discount__value').removeClass('active');
            $('.slick-active .promo-discount__value').addClass('active');
        });

        function productsliderinfo() {
            $('.promo__info-box').html("0" + $('.promo__slide').length);
        }
        productsliderinfo();
        $(".promo__slick").on('afterChange', function (event, slick, currentSlide) {
            var promonumber = (currentSlide + 1);
            $(".promo__info-number").html("0" + promonumber);
        });
    }

    /*Parallax*/
    if ($('.js-parallax').length > 0) {
        $('.js-parallax').each(function() {
            var $this = $(this);
            var $parallax_bg = $this.find('.js-parallax-bg');
            var $parallax_bg2 = $this.find('.js-parallax-bg2');
            $(window).on('scroll', function(e) {
                var scrolled = $(window).scrollTop() - $this.offset().top + 100;
                if ($(window).width() >= '760'){
                    if (scrolled >= 0 && scrolled <= window.innerHeight * 2) {
                        $parallax_bg.css('transform', 'translate3d(0,' + (scrolled / 6) + 'px, 0)');
                        $parallax_bg2.css('transform', 'translate3d(0,' + '-' + (scrolled / 8) + 'px, 0)');
                    } else {
                        $parallax_bg.css('transform', 'translate3d(0, 0, 0)');
                        $parallax_bg2.css('transform', 'translate3d(0, 0, 0)');
                    }
                } else {
                    if (scrolled >= 0 && scrolled <= window.innerHeight * 6) {
                        $parallax_bg.css('transform', 'translate3d(0,' + (scrolled / 10) + 'px, 0)');
                        $parallax_bg2.css('transform', 'translate3d(0,' + '-' + (scrolled / 14) + 'px, 0)');
                    } else {
                        $parallax_bg.css('transform', 'translate3d(0, 0, 0)');
                        $parallax_bg2.css('transform', 'translate3d(0, 0, 0)');
                    }
                }
            });
        });
    }

    // Promo slider
    if ($(".equipment__slick").length > 0) {
        $('.equipment__slick').slick({
            dots: false,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            responsive: [
                {
                    breakpoint: 760,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        adaptiveHeight: true
                    }
                }
            ]
        });
        $('.equipment-arrow').click(function (event) {
            $(this).parents('.equipment').find('.equipment__slick').slick('slickNext');
            $('.equipment__slick--js').attr('data-step', 1);
        });
        $('.equipment__slick').on('afterChange', function (event, slick, currentSlide) {
            productsliderinfo();
        });

        function productsliderinfo() {
            $('.equipment__info-box').html("0" + $('.equipment__slide').length);
        }
        productsliderinfo();
        $(".equipment__slick").on('afterChange', function (event, slick, currentSlide) {
            var promonumber = (currentSlide + 1);
            $(".equipment__info-number").html("0" + promonumber);
        });
    }

    var swiperHome = $('.doctors__wrap');
    swiperHome.each(function () {
        var mySwiper = new Swiper(this, {
            slidesPerView: 3.6,
            spaceBetween: 10,
            slidesPerGroup: 1,
            loop: false,
            loopFillGroupWithBlank: false,
            speed: 1000,
            iOSEdgeSwipeDetection: true,
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                hide: false,
                dragSize: 20,
                snapOnRelease: false,
            },
            breakpoints: {
                370: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                760: {
                    slidesPerView: 1.6,
                    slidesPerGroup: 1,
                },
                1010: {
                    slidesPerView: 2.6,
                    slidesPerGroup: 1,
                }
            }
        });
    });

    // Product tabs
    if ($(".services__tab").length > 0) {
        $(function () {
            $('.services__tabs').each(function () {
                $(this).find('.services__tab').each(function (i) {
                    $(this).click(function () {
                        $(this).addClass('active').siblings().removeClass('active').closest('.services__wrap').find('.services-top__block').removeClass('active').eq(i).addClass('active').closest('.services__wrap').find('.services__block').removeClass('active').eq(i).addClass('active');
                    });
                });
            });
        })
    }

    if ($(".reviews__tab").length > 0) {
        $(function () {
            $('.reviews__tabs').each(function () {
                $(this).find('.reviews__tab').each(function (i) {
                    $(this).click(function () {
                        $(this).addClass('active').siblings().removeClass('active').closest('.reviews__wrap').find('.reviews__box').removeClass('active').eq(i).addClass('active');
                    });
                });
            });
        })
    }

    // Product tabs
    if ($(".reviews-text__content a").length > 0) {
        $(".reviews-text__content a").on("click", function(e){
            e.preventDefault();
            $(this).toggleClass("active");
            $(this).parent().find("div").slideToggle(600);
        });
    }

    // calendar mask
    $('.datepicker-here').datepicker({
        minDate: new Date(),
        onSelect: function (date, cellType, inst) {
            $(inst.el).parent().removeClass('input-field__error').addClass('input-field__ok');
            var myDatepicker = $(inst.el).datepicker().data('datepicker');
            myDatepicker.hide();
        }
    });



    // Custom Select
    $('.select').click(function(event) {
        if(!$(this).hasClass('disabled')){
            $('.select').not(this).removeClass('active').find('.select-options').slideUp(50);
            $(this).toggleClass('active');
            $(this).find('.select-options').slideToggle(50);
        }
    });
    $('.select-options__value').click(function() {
        $(this).parents('.select').find('.select-title__value').html($(this).html());
        if($.trim($(this).data('value'))!=''){
            $(this).parents('.select').find('input').val($(this).data('value'));
        }else{
            $(this).parents('.select').find('input').val($(this).html());
        }
    });
    $(document).click(function(e) {
        if (!$(e.target).is(".select *")) {
            $('.select').removeClass('active');
            $('.select-options').slideUp(50);
        };
    });

    // Phone mask
    $(".phone-mask").mask("+7 (999)999-99-99");

    //google.maps.event.addDomListener(window, 'load', init);



    if ($(window).outerWidth() >= '761') {
        const containerID = '#confidentiality-modal';
        const scrollbar = Scrollbar.init(document.querySelector(containerID), {
            damping: 0.1,
            alwaysShowTracks: true
        });
    }

    // Fancybox
    $(".footer__license").fancybox({
        baseClass: "license-modal__bg",
        autoSize: true,
        afterShow: function() {
            var main = '.license-modal__slick';
            $(main).slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                centerMode: true,
                responsive: [
                    {
                        breakpoint: 1050,
                        settings: {
                            slidesToShow: 2,
                            centerMode: false,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            centerMode: false,
                        }
                    }
                ]
            });
            $('.license-modal-arrow.license-modal-arrow_prev').click(function(event) {
                $(this).parents('.license-modal__wrap').find('.license-modal__slick').slick('slickPrev');
            });
            $('.license-modal-arrow.license-modal-arrow_next').click(function(event) {
                $(this).parents('.license-modal__wrap').find('.license-modal__slick').slick('slickNext');
            });
        }
    });
    $(".reception--js").fancybox({
        baseClass: "reception-modal__bg",
        autoFocus: false,
    });



    inView('.main-doctor__after').on('enter', function (event, isInView) {
        $('.main-doctor__after').addClass('active');
    }).on('exit', function (event, isInView) {
        $('.main-doctor__after').removeClass('active');
    });

    inView('.subscription__img img').on('enter', function (event, isInView) {
        $('.subscription__img img').addClass('active');
    }).on('exit', function (event, isInView) {
        $('.subscription__img img').removeClass('active');
    });

    // Projects btn - click
    $(".reviews__btn").click(function(e){
        e.preventDefault();
        $(this).toggleClass("active");
        /*if($('#reviews').hasClass('active')){
            scrollbar.setPosition(0, $('.top-part').height() - 90);
        }*/
        $('#reviews').toggleClass("active")
        $('.reviews__block.hide').toggleClass("active");
    });

    $(".menu a, .header__menu a").click(function () {
        $(".header__burger").removeClass("active");
        $(".menu").removeClass("active");
        $(".menu__mobile").removeClass("active");
        $("body").removeClass("lock");
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top - 100;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 600);
        return false;
    });

    $(".main-doctor__btn").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top - 100;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 600);
        return false;
    });


    // form
	$('form').submit(function(e){

		var form   = $(this),
			errors = true,
			notice = $('.notice');

		form.find('[type="text"][data-error]').each(function(){
			if (errors) {
				var field = $(this);
				var val = field.val();
				var textError = field.attr('data-error');

				if(val == ''){
					notice.text(textError).addClass('active');
					field.addClass('error');
					setTimeout(function(){
						notice.text('').removeClass('active');
					}, 2000);
					errors = false;
					field.focus();
				} else {
					$(this).removeClass('error');
				}
			}
		});

		if (errors) {
			return true;
		} else {
			return false;
		}

	});

});


function initMap() {
        var mapOptions = {
            zoom: 16,
            disableDefaultUI: true,
            center: new google.maps.LatLng(55.423478, 37.487128),

        };
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        markerImage = 'images/marker.svg';
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(55.422882, 37.487149),
            map: map,
            icon: markerImage
        });

        var info = new google.maps.InfoWindow({
            content: '<small>адрес клиники</small><p>Подольск, ул. Академика<br> Доллежаля д.4</p>'
        });

        marker.addListener("click", function () {
            info.open(map, marker);
        });
    }

// timer slider
function sliderRun() {

    setInterval(function () {
        var step = parseInt($('.promo__slick--js').attr('data-step'));
        var widthPromoBtn = $(".progress-slider>span").width();
        var progressSliderWidth = $(".progress-slider").width();

        if (step < 101) {
            var linePercent = 100 - step;
            $(".progress-slider>span").css('transform', 'translateX(-' + linePercent + '%)');
            $('.promo-arrow__icon').attr('class', ' promo-arrow__icon c100 p' + step);
            $('.promo__slick--js').attr('data-step', step + 1);
        } else {
            $('.promo__slick--js').attr('data-step', 1);
            $('.slick-active .promo-arrow').click();
            $(".progress-slider").html('<span></span>');
        }

    }, 100);
}

function sliderEquipment() {

    setInterval(function () {
        var step = parseInt($('.equipment__slick--js').attr('data-step'));

        if (step < 101) {
            var linePercent = 100 - step;
            $('.equipment-arrow__icon').attr('class', ' equipment-arrow__icon c100 p' + step);
            $('.equipment__slick--js').attr('data-step', step + 1);
        } else {
            $('.equipment__slick--js').attr('data-step', 1);
            $('.slick-active .equipment-arrow').click();
        }

    }, 100);
}


function href(id) {

    var duration = "duration";
    var easing = "swing";

    var Jtarget = $(id);
    var newHash = "#" + Jtarget.attr('id');

    if (!Jtarget.offset()) {
        return true;
    }

    var top = Jtarget.offset().top;
    var oldLocation = window.location.href.replace(window.location.hash, '');
    var newLocation = oldLocation + newHash;

    if (oldLocation + newHash == newLocation) {
        $('html:not(:animated),body:not(:animated)')
            .animate({scrollTop: top}, duration, easing, function () {
                /*if (Boolean(self.get('isLocationHref')) === true) {
                    window.location.href = newLocation;
                }*/

            });

        return true;
    }
}

var hash = window.location.hash.substr(1);

var urlData = hash.split('&').reduce(function (result, item) {
    var parts = item.split('=');
    result[parts[0]] = parts[1];
    return result;
}, {});

