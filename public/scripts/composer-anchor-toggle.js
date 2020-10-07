$(document).ready(() => {
  const $scrollBtn = $(".anchor-toggle");
  $scrollBtn.hide();
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 180 ||
      document.documentElement.scrollTop > 180
    ) {
      $("nav > button").hide();
      $scrollBtn.show();
    } else {
      $scrollBtn.hide();
      $("nav > button").show();
    }
  };
  $scrollBtn.click(() => {
    if (!$("form").is(":hidden")) {
      document.body.scrollTop = 120;
      document.documentElement.scrollTop = 120;
      setTimeout(() => { // fix timing on button for smoother transition
        $scrollBtn.hide();
        $("nav > button").show();
      }, 800); // smooth scrolling fix
      $("#tweet-text").focus();
    } else {
      document.body.scrollTop = 50;
      document.documentElement.scrollTop = 50;
      $("form").show(() => {
        setTimeout(() => { // smooth scrolling fix
          $scrollBtn.hide();
          $("#tweet-text").focus();
          $("nav > button").show();
        }, 800)
      });
    }
  });
  $(document).scroll(() => scrollFunction());
});
