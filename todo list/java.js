$(function(){
  $(window).keypress(function(e){
        if(e.keyCode==13)
            {
                newitem();
            }
    });
    
    $('ul').on('click','li',function(e){
        $(e.target).remove();
    });
    
    function newitem(){
        var item = $('input').val();
        $('ul').append('<li>'+ item +'</li>');
        $('input').val('');
    }
    
  });