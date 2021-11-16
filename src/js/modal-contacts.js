$(document).ready(function () {
  $('.trigger-1').on('click', function () {
    $('.modal-wrapper-1').toggleClass('open-1');
    $('.page-wrapper-1').toggleClass('blur-it');
    return false;
  });
});

$(document).ready(function () {
  $('.trigger-2').on('click', function () {
    $('.modal-wrapper-2').toggleClass('open-2');
    $('.page-wrapper-2').toggleClass('blur-it');
    return false;
  });
});
