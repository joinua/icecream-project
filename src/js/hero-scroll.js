$(function () {
  $('a.scroll').click(function () {
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top + 'px',
      },
      {
        duration: 1000,
        easing: 'swing',
      },
    );
    return false;
  });
});

$(function () {
  $('.mobile-menu__link').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top + 'px',
      },
      {
        duration: 1000,
        easing: 'swing',
      },
    );
    $('.js-menu-container').toggleClass('is-open');
    return false;
  });
});
