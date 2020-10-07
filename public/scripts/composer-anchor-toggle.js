$(document).ready(() => {

  const $scrollBtn = $(".anchor-toggle");
  $(document).scroll(() => scrollFunction());
  $scrollBtn.hide();
  const scrollFunction = () => {
    if ($(document).scrollTop() > 170) {
      $("nav > button").hide();
      $scrollBtn.show();
    } else {
      $scrollBtn.hide();
      $("nav > button").show();
    }
  };

  $scrollBtn.click(() => {
    
    if (!$("form").is(":hidden")) { // reveal form, then focus on it
      $(document).scrollTop(75);
      $("nav > button").show();
      $scrollBtn.hide();
      $("#tweet-text").focus();
    } else {
      $(document).scrollTop(75);
      
      $("form").show(() => {
        $("#tweet-text").focus();
        $("nav > button").show();
        scrollFunction();

      });
    }
  });
  
});
