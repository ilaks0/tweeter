$(document).ready(function () {

  $('#tweet-text').on('input', () => {
    let length = $('#tweet-text').val().length;
    if (length > 140) $('.counter').css('color', 'red').css('font-weight', 'bold');
    else $('.counter').css('color', 'black').css('font-weight', 'normal');
    $('.counter').text(`${140 - length}`);
  });

});