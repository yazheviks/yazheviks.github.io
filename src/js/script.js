$(document).ready(function(){
    $('.slick').slick({
        infinite: true,
        speed: 1200,
        arrows: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/left.png" alt="previous"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png" alt="next"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                infinite: true,
                dots: true,
                arrows: false,
                dotsClass: 'slick-dots',
                pauseOnDotsHover: true
              }
            }
          ]

    });

	$('ul.catalog__items').on('click', 'li:not(.catalog__item_active)', function() {
		$(this)
		  .addClass('catalog__item_active').siblings().removeClass('catalog__item_active')
		  .closest('div.container').find('div.products').removeClass('products_active').eq($(this).index()).addClass('products_active');
	});

	

	function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.products__main').eq(i).toggleClass('products__main_active');
				$('.products__sub').eq(i).toggleClass('products__sub_active');
			})
		});
	};

	toggleSlide('.products__link');
  toggleSlide('.products__sub-link');

  //models

  $('[data-modal=consultation]').on('click',function() {
    $('.modals, #consultation').fadeIn();
  });

  $('.modal__close').on('click',function() {
    $('.modals, #consultation, #order, #thanks').fadeOut();
  });

  $('.button_products').each(function(i) {
    $(this).on('click',function() {
      $('#order .modal__descr').text($('.products__title').eq(i).text());
      $('.modals, #order').fadeIn();
    });
  });

  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.modals, #thanks').fadeIn();

        $('form').trigger('reset');
    });
    return false;
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $("a[href^=#up]").click(function() {
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  new WOW().init();
});


