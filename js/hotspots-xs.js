// jQuery(function($) {
//   var pop = $('.mobi-popup');
//   pop.click(function(e) {
//     e.stopPropagation();
//   });
  
//   $('a.marker').click(function(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     if($(this).data('animate') == 'product_animate_4')
//     {
//       $('.product_scene').removeClass('product_animate_5');
//       $('.product_scene').removeClass('product_animate_6');
//     }
//     else if($(this).data('animate') == 'product_animate_5')
//     {
//       $('.product_scene').removeClass('product_animate_4');
//       $('.product_scene').removeClass('product_animate_6');
//     }
//     else if($(this).data('animate') == 'product_animate_6')
//     {
//       $('.product_scene').removeClass('product_animate_4');
//       $('.product_scene').removeClass('product_animate_5');
//     }
//     $(this).next('.mobi-popup').toggleClass('open');
//     $(this).parent().siblings().children('.mobi-popup').removeClass('open');
//     $(this).closest('.map').find(".layer img").toggleClass($(this).data('animate'));
//   });
  
//   $(document).click(function() {
//     pop.removeClass('open');
//     $('.product_scene').removeClass('product_animate_4');
//     $('.product_scene').removeClass('product_animate_5');
//     $('.product_scene').removeClass('product_animate_6');
//   });
  
//   pop.each(function() {
//     var w = $(window).outerWidth(),
//         edge = Math.round( ($(this).offset().left) + ($(this).outerWidth()) );
//     if( w < edge ) {
//       $(this).addClass('edge');
//     }
//   });
// });