// ===== Scroll to Top ====
$(window).scroll(function () {
  if ($(this).scrollTop() >= 100) {
    // If page is scrolled more than 100px
    $('#top').fadeIn('fast'); // Fade in the arrow
  } else {
    $('#top').fadeOut('fast'); // Else fade out the arrow
  }
});
$('#top').click(function () {
  // When arrow is clicked
  $('body,html').animate(
    {
      scrollTop: 0, // Scroll to top of body
    },
    500,
  );
});
