$(window).on('load', function () {
  ($preloader = $('.loaderArea')), ($loader = $preloader.find('.loader'));
  $loader.fadeOut();
  $preloader.delay(350).fadeOut('slow');
});
