$(document).ready(function () {
  function slowScroll(id) {
    var offset = 0;
    $('html, body').animate(
      {
        scrollTop: $(id).offset().top - offset,
      },
      1000,
    );
    return false;
  }
  $('header').on('click', function (e) {
    e.preventDefault();
    if (!$(e.target).hasClass('header-nav__link')) return;
    slowScroll($(e.target).attr('href'));
  });
});