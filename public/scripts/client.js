/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  $.ajax("/tweets", { method: "GET" }).then((tweets) => {
    renderTweets(tweets);
  });
  const createTweetElement = (tweetData) => {
    const $newAva = $("<img>").attr("src", tweetData.user.avatars);
    const $imgDiv = $("<span>").append($newAva);
    const $nameDiv = $("<span>").text(tweetData.user.name);
    const $newName = $("<span>").append($imgDiv).append($nameDiv);
    const $newHandle = $("<span>").text(tweetData.user.handle);
    const $newHeader = $("<header>").append($newName).append($newHandle);
    const $newContent = $("<div>").text(tweetData.content.text);
    const $date = $("<span>").text(
      new Date(tweetData["created_at"]).toUTCString()
    );
    const $like = $("<span>").text("Like");
    const $newFooter = $("<footer>").append($date).append($like);
    const $newArticle = $("<article>")
      .append($newHeader)
      .append($newContent)
      .append($newFooter);
    return $newArticle;
  };

  const renderTweets = (tweetsArr) => {
    $("#tweets-container").empty();
    for (const element of tweetsArr) {
      const $tweet = createTweetElement(element);
      $("#tweets-container").append($tweet);
    }
  };

  $("form").on("submit", function (event) {
    event.preventDefault();
    $(".error").hide();
    $.ajax({ method: "POST", url: "/tweets", data: $(this).serialize() })
      .done(function (msg) {
        $.ajax("/tweets", { method: "GET" }).done((tweetsArray) => {
          renderTweets(tweetsArray);
        });
        $("#tweet-text").val("");
      })
      .fail(function (xhr, status, error) {
        // error handling
        $("#tweet-text").addClass("c-error");
        $(".error").text(xhr.responseJSON.error);
        if ($(".error").first().is(":hidden")) {
          $(".error").slideDown("slow");
        }
      });
  });
  $("nav > a").click(() => {
    if ($("form").first().is(":hidden")) {
      $("form").slideDown("slow");
    } else $("form").slideUp("slow");
  });
});
