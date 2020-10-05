$(document).ready(function () {


  $('#tweet-text').on('keydown', () => {
    
    setTimeout(() => {
      let length = $('#tweet-text').val().length;
      if(length > 140) $('[name = "counter"]').css('color', 'red');
      else $('[name = "counter"]').css('color', 'black');
      $('[name = "counter"]').text(`${140 - length}`);
    }
      , 0);

  });

});