$(document).ready(function () {
  const charLimit = 140;

  $('#tweet-text').on('input', () => {
    let length = $('#tweet-text').val().length;
    $('.error').empty().hide();
    $('#tweet-text').removeClass('c-error');
    if (length > charLimit) $('.counter').addClass('red');
    else $('.counter').removeClass('red');
    $('.counter').text(`${charLimit - length}`);
  }).on('focus', () => {
    $('.counter').removeClass('blur');
    let length = $('#tweet-text').val().length;
    if (length > charLimit) $('.counter').addClass('red');
    else $('.counter').removeClass('red');
    $('.counter').text(`${charLimit - length}`);
  }).blur(() => {
    $('.counter').addClass('blur');
  });

  $('div > button').focus(() => {
    $('.counter').removeClass('blur');
    let length = $('#tweet-text').val().length;
    if (length > charLimit) $('.counter').addClass('red');
    else $('.counter').removeClass('red');
    $('.counter').text(`${charLimit - length}`);
  }).blur(() => {
    $('.counter').addClass('blur');
  });

});