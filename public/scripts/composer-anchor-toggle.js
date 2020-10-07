$(document).ready(() => {
  const $scrollBtn = $('.anchor-toggle');
  $scrollBtn.hide();
  $(document).scroll(() => scrollFunction());
  const scrollFunction = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      // $scrollBtn.removeClass('btn-hide');
      $scrollBtn.fadeIn('fast');
    } else {
      $scrollBtn.hide();
      // $scrollBtn.addClass('btn-hide');
    }
  };
  $scrollBtn.click(() => {
    $("form").show(1200);
    document.body.scrollTop = 180;
    document.documentElement.scrollTop = 180;
  });



});