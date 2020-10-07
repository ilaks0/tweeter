$(document).ready(() => {
  const $scrollBtn = $(".anchor-toggle");
  $scrollBtn.hide();
  $(document).scroll(() => scrollFunction());
  const scrollFunction = () => {
    if (document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200) {
      $('nav > a').hide(1000);
      $scrollBtn.fadeIn("fast");
    } else {
      $scrollBtn.hide();
      $('nav > a').show();
    }
  };
  $scrollBtn.click(() => {
    $("form").show(1200);
    document.body.scrollTop = 180;
    document.documentElement.scrollTop = 180;
    $("#tweet-text").focus();
  });
});
