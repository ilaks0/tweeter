$(document).ready(function () {


  $('#tweet-text').on('keydown', () => {
    
    setTimeout(() => {
      let length = $('#tweet-text').val().length;
      $('[name = "counter"]').text(`${140 - length}`);
    }
      , 0);

  });

});