$(document).ready(() => {
  const $scrollBtn = $('.anchor-toggle');
  $scrollBtn.hide();
  $(document).scroll(() => scrollFunction());
  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      // $scrollBtn.removeClass('btn-hide');
      $scrollBtn.fadeIn('fast');
    } else {
      $scrollBtn.hide();
      // $scrollBtn.addClass('btn-hide');
    }
  };
  $('.anchor-toggle').click(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });



});