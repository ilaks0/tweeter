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
    const $newContent = $("<body>").text(tweetData.content.text);

    const timeDiff = timeSincePost(tweetData['created_at']);
    const $date = $("<span>").text(timeDiff);
    const $flag = $('<img>').attr('src', './images/flag.png');
    const $retweet = $('<img>').attr('src', './images/retweet.png');
    const $heart = $('<img>').attr('src', './images/heart.png');
    const $like = $("<div>").append($flag).append($retweet).append($heart);
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
      $($tweet).hover(function () {
        $('footer > div', this).addClass('hover-div');
      },
        () => {
          $('footer > div', this).removeClass('hover-div');
        }
      );
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
  // $('article').hover(() => {
  //   $('article > div').addClass('hover-opacity');
  // })


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

    if (diff >= 60) {
      diff /= 60;
      unit = 'minute';
      if (diff >= 60) {
        diff /= 60;
        unit = 'hour';
        if (diff >= 24) {
          diff /= 24;
          unit = 'day';
          if (diff >= 30) {
            diff /= 30;
            unit = 'month';
            if (diff >= 12) {
              diff /= 12;
              unit = 'year';
            }
          }
        }
      }
    }
    diff = parseInt(diff);
    if (diff > 1)
      unit += 's';
    return `${diff} ${unit} ago`;
  };



});
