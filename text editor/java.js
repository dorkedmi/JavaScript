$(function() {

  var counter = 0;

  $('#title').html(localStorage['title']);
  $('#content').html(localStorage['text']);

   setInterval(function() {
        //Update counter
        counter++;
        $('#counter').html(counter);

        //Save
        localStorage['title'] = $('#title').html();
        localStorage['text'] = $('#content').html();
   }, 1000);

});