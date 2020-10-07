/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  $.ajax("/tweets", { method: "GET" }).then((tweets) => renderTweets(tweets));

  const createTweetElement = (tweetData) => {
    const $newAva = $("<img>").attr("src", tweetData.user.avatars);
    const $imgDiv = $("<span>").append($newAva);
    const $nameDiv = $("<span>").text(tweetData.user.name);
    const $newName = $("<span>").append($imgDiv).append($nameDiv);
    const $newHandle = $("<span>").text(tweetData.user.handle);
    const $newHeader = $("<header>").append($newName).append($newHandle);
    const $newContent = $("<div>").text(tweetData.content.text);

    const timeDiff = timeSincePost(tweetData['created_at']);
    const $date = $("<span>").text(timeDiff);
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
      .done(function () {
        $.ajax("/tweets", { method: "GET" }).done((tweetsArray) => {
          renderTweets(tweetsArray);
        });
        $('.counter').text(140);
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
      $("form").slideDown("slow", () => {
        $('#tweet-text').focus();
      });
    } else $("form").slideUp("slow");
  });

  const timeSincePost = dateEpoch => {
    let unit = 'seconds';
    diff = ((new Date).getTime() - dateEpoch) / 1000;
    
    
    
    
    
    if (diff >= 2592000) {
      diff = parseInt(diff / 2592000);
      unit = 'month';
      if (diff > 1)
        unit += 's';
    }
    else if (diff >= 86400) {
      diff = parseInt(diff / 86400);
      unit = 'day';
      if (diff > 1)
        unit += 's';
    }
    else if (diff >= 3600) {
      diff = parseInt(diff / 3600);
      unit = 'hour';
      if (diff > 1)
        unit += 's';
    }
    else if (diff >= 60) {
      diff = parseInt(diff / 60);
      unit = 'minute';
      if (diff > 1)
        unit += 's';
    }


    return `${diff} ${unit} ago`;
  };



});
