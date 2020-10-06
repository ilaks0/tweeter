/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  };

  const createTweetElement = (tweetData) => {
    const newAva = $('<img>').attr('src', tweetData.user.avatars);
    const imgDiv = $('<span>').append(newAva);
    const nameDiv = $('<span>').text(tweetData.user.name);
    const newName = $('<span>').append(imgDiv).append(nameDiv);
    const newHandle = $('<span>').text(tweetData.user.handle);
    const newHeader = $('<header>').append(newName).append(newHandle);
    const newContent = $('<div>').text(tweetData.content.text);
    const date = $('<span>').text((new Date(tweetData['created_at'])).toUTCString());
    const like = $('<span>').text('Like');
    const newFooter = $('<footer>').append(date).append(like);
    const $newArticle = $('<article>').append(newHeader).append(newContent).append(newFooter);
    return $newArticle;
  };

  const renderTweets = (tweetsArr) => {
    for(const element of tweetsArr) {
      const $tweet = createTweetElement(element);
      $('#tweets-container').append($tweet);
    }
  }

  $('form').on('submit',function() {
    event.preventDefault();
    // console.log($(this).serialize().length);
    $.ajax({method: 'POST', url: '/tweets', data: $('form').serialize()})
    .done(function( msg ) {
    $.ajax('/tweets',{method: 'GET' })
    .done(tweetsArray => {
      renderTweets(tweetsArray);
    })
  });
  })


  




  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet);


});

