$(document).ready(function () {

  $('#tweet-text').on('input', () => {
    let length = $('#tweet-text').val().length;
    if (length > 140) $('.counter').addClass('red');
    else $('.counter').removeClass('red');
    $('.counter').text(`${140 - length}`);
  });

});