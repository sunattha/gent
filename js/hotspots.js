jQuery(function($) {
  var pop = $('.map-popup');
  pop.click(function(e) {
    e.stopPropagation();
  });
  
  $('a.marker').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    var scorp_map = $(this).parents('.map');
    if($(this).data('animate') == 'product_animate_1')
    {
      $(this).closest('.map').find(".layer img").removeClass('product_animate_2');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_3');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_4');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_5');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_6');
    }
    else if($(this).data('animate') == 'product_animate_2')
    {
      $(this).closest('.map').find(".layer img").removeClass('product_animate_1');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_3');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_4');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_5');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_6');
    }
    else if($(this).data('animate') == 'product_animate_3')
    {
      $(this).closest('.map').find(".layer img").removeClass('product_animate_1');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_2');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_4');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_5');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_6');
    }
    else if($(this).data('animate') == 'product_animate_4')
    {
      $(this).closest('.map').find(".layer img").removeClass('product_animate_1');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_2');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_3');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_5');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_6');
    }else if($(this).data('animate') == 'product_animate_5')
    {
      $(this).closest('.map').find(".layer img").removeClass('product_animate_1');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_2');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_3');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_4');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_6');
    }else if($(this).data('animate') == 'product_animate_6')
    {
      $(this).closest('.map').find(".layer img").removeClass('product_animate_1');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_2');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_3');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_4');
      $(this).closest('.map').find(".layer img").removeClass('product_animate_5');
    }
    $(this).next('.map-popup').toggleClass('open');
    $(this).parent().siblings().children('.map-popup').removeClass('open');
    $(this).closest('.map').find(".layer img").toggleClass($(this).data('animate'));
  });
  
  $(document).click(function() {
    pop.removeClass('open');
    $('.product_scene').removeClass('product_animate_1');
    $('.product_scene').removeClass('product_animate_2');
    $('.product_scene').removeClass('product_animate_3');
    $('.product_scene').removeClass('product_animate_4');
    $('.product_scene').removeClass('product_animate_5');
    $('.product_scene').removeClass('product_animate_6');
  });
  
  pop.each(function() {
    var w = $(window).outerWidth(),
        edge = Math.round( ($(this).offset().left) + ($(this).outerWidth()) );
    if( w < edge ) {
      $(this).addClass('edge');
    }
  });
});

