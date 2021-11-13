var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var translateWidth = 0;
var navBtnId = 0;

$(document).ready(function () {
  $('#next-btn').click(function () {
    nextSlide();
  });

  $('#prev-btn').click(function () {
    prevSlide();
  });

  $('.rewiev__slide-nav-btn').click(function () {
    navBtnId = $(this).index();

    if (navBtnId + 1 != slideNow) {
      translateWidth = -$('#wievport').width() * navBtnId;
      $('.rewiev__slidewrapper').css({
        transform: 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      slideNow = navBtnId + 1;
    }
  });
});

function nextSlide() {
  // перевырка чи не останный слайд і чи не за межами кількості слайдів
  if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
    $('.rewiev__slidewrapper').css('transform', 'translate(0, 0)');
    slideNow = 1;
  } else {
    translateWidth = -$('#viewport').width() * slideNow;
    $('.rewiev__slidewrapper').css({
      transform: 'translate(' + translateWidth + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow++;
  }
}

function prevSlide() {
  if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
    translateWidth = -$('#wievport').width() * (slideCount - 1);
    $('.rewiev__slidewrapper').css({
      transform: 'translate(' + translateWidth + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow = slideCount;
  } else {
    translateWidth = -$('#viewport').width() * (slideNow - 2);
    $('.rewiev__slidewrapper').css({
      transform: 'translate(' + translateWidth + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow--;
  }
}
