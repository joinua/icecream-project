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
  $('hero').on('click', function (e) {
    e.preventDefault();
    if (!$(e.target).hasClass('scroll')) return;
    slowScroll($(e.target).attr('href'));
  });
});