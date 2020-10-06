$(document).ready(function () {

  $('#tweet-text').on('input', () => {
    let length = $('#tweet-text').val().length;
    $('.error').empty().hide();
    $('#tweet-text').removeClass('c-error');
    if (length > 140) $('.counter').addClass('red');
    else $('.counter').removeClass('red');
    $('.counter').text(`${140 - length}`);
  }).on('focus', () => {
    $('.counter').removeClass('blur');
    let length = $('#tweet-text').val().length;
    if (length > 140) $('.counter').addClass('red');
    else $('.counter').removeClass('red');
    $('.counter').text(`${140 - length}`);
  }).blur(() => {
    $('.counter').addClass('blur');
  });

  $('div > button').focus(() => {
    $('.counter').removeClass('blur');
    let length = $('#tweet-text').val().length;
    if (length > 140) $('.counter').addClass('red');
    else $('.counter').removeClass('red');
    $('.counter').text(`${140 - length}`);
  }).blur(() => {
    $('.counter').addClass('blur');
  });

});