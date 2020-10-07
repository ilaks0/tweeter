$(document).ready(() => {

  const $scrollBtn = $(".anchor-toggle");
  $(document).scroll(() => scrollFunction());
  $scrollBtn.hide();

  const scrollFunction = () => { // function to show/hide scroll button on scroll event
    if ($(document).scrollTop() > 170) { // show hidden button when window reaches 170px
      $("nav > button").hide();
      $scrollBtn.show();
    } else {
      $scrollBtn.hide();
      $("nav > button").show();
    }
  };

  $scrollBtn.click(() => { // scroll back to top when button clicked
    
    if (!$("form").is(":hidden")) { // reveal form, then focus on it
      $(document).scrollTop(75); // scroll 75px - suitable for both media types
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
