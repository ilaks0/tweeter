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
    document.body.scrollTop = 120;
    document.documentElement.scrollTop = 120;
    
    if(!$('form').is(':hidden')) {
      setTimeout(() => {
        $scrollBtn.hide();
        $('nav > button').show();
      }, 700)
      
      $("#tweet-text").focus();
    }
    else {
      $("form").show(() => {
      $scrollBtn.hide();
      $("#tweet-text").focus();
      $('nav > button').show();
    });
    }
  });
  
  $(document).scroll(() => scrollFunction());

});
