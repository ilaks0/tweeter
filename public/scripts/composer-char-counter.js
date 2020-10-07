$(document).ready(function () {
  const charLimit = 140;
  const $counter = $(".counter");

  const colorCharCounter = () => { // function that prints number of valid chars remaining
    const len = $("#tweet-text").val().length;
    if (len > charLimit) $counter.addClass("red"); // add red color to char counter when exceeds 140
    else $counter.removeClass("red");
    $counter.text(`${charLimit - len}`); // calculate difference between char limit and current value
  };

  $("#tweet-text")
    .on("input", () => {
      $(".error").empty().hide();
      $("#tweet-text").removeClass("c-error"); // remove error message on input
      colorCharCounter();
    })
    .on("focus", () => {
      $counter.removeClass("blur"); // show char counter when textbox is in focus
      colorCharCounter();
    })
    .blur(() => { // hide counter when textbox not focus
      $counter.addClass("blur");
    });
  $("div > button") // submit button in focus - show char counter
    .focus(() => {
      $counter.removeClass("blur");
      colorCharCounter();
    })
    .blur(() => { // submit button no longer in focus, hide char counter
      $counter.addClass("blur");
    });
});
