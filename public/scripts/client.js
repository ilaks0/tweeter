$(document).ready(function () {
  $.ajax("/tweets", { method: "GET" }).then((tweets) => renderTweets(tweets));

  const createTweetElement = (tweetData) => {
    // construct each object and tag with text data
    const $newAva = $("<img>").attr("src", tweetData.user.avatars);
    const $imgDiv = $("<span>").append($newAva); // append each tag to its parent
    const $nameDiv = $("<span>").text(tweetData.user.name);
    const $newName = $("<span>").append($imgDiv).append($nameDiv);
    const $newHandle = $("<span>").text(tweetData.user.handle);
    const $newHeader = $("<header>").append($newName).append($newHandle);

    const $newContent = $("<body>").text(tweetData.content.text);
    const timeDiff = timeSincePost(tweetData["created_at"]); // calculate time difference since post creation
    const $date = $("<span>").text(timeDiff);
    const $flag = $("<img>").attr("src", "./images/flag.png");
    const $retweet = $("<img>").attr("src", "./images/retweet.png");
    const $heart = $("<img>").attr("src", "./images/heart.png");

    const $like = $("<div>").append($flag).append($retweet).append($heart);
    const $newFooter = $("<footer>").append($date).append($like);
    const $newArticle = $("<article>")
      .append($newHeader) // append all elements to article parent
      .append($newContent)
      .append($newFooter);

    return $newArticle; // return tweet (JQ object)
  };

  const renderTweets = (tweetsArr) => {
    $("#tweets-container").empty(); // empty tweet section to prevent duplication
    for (const element of tweetsArr) {
      const $tweet = createTweetElement(element);
      $($tweet).hover(
        // add hover event handler to each article
        function () {
          $("footer > div", this).addClass("hover-div"); // on hover, footer icons become visible
          $("header img", this).addClass("hover-div"); // avatar img more visible
        },
        function () {
          $("footer > div", this).removeClass("hover-div"); // no longer hovered, remove visibility
          $("header img", this).removeClass("hover-div");
        }
      );
      $("#tweets-container").append($tweet); // inject tweet into html container
    }
  };

  $("form").on("submit", function (event) {
    event.preventDefault();
    $(".error").hide();
    $.ajax({ method: "POST", url: "/tweets", data: $(this).serialize() })
      .done(() => {
        $.ajax("/tweets", { method: "GET" }).done((tweetsArray) => {
          renderTweets(tweetsArray);
        });
        $(".counter").text(140); // reset and show char count after submitting
        $("#tweet-text").val(""); // empty text area
      })
      .fail((xhr) => {
        // error handling
        $("#tweet-text").addClass("c-error");
        $(".error").text(xhr.responseJSON.error);
        if ($(".error").first().is(":hidden")) {
          $(".error").slideDown("slow");
        }
      });
  });

  $("nav > button").click(() => {
    // compose button in nav - toggle form's hideability
    if ($("form").first().is(":hidden")) {
      $("form").slideDown("fast", () => {
        $("#tweet-text").focus();
      });
    } else $("form").slideUp("fast");
  });

  const timeSincePost = (dateEpoch) => {
    // calculate time difference since post creation
    let unit = "second";
    let diff = (new Date().getTime() - dateEpoch) / 1000;

    if (diff >= 60) {
      // convert to minutes
      diff /= 60;
      unit = "minute";
      if (diff >= 60) {
        // '' hours
        diff /= 60;
        unit = "hour";
        if (diff >= 24) {
          // '' days
          diff /= 24;
          unit = "day";
          if (diff >= 30) {
            // '' months
            diff /= 30;
            unit = "month";
            if (diff >= 12) {
              // '' years
              diff /= 12;
              unit = "year";
            }
          }
        }
      }
    }
    diff = parseInt(diff);
    if (diff !== 1) unit += "s";
    return `${diff} ${unit} ago`;
  };
});
