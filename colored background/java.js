$(function(){

    //color generator
    function changeColor()
    {
        return '#' + Math.random().toString(16).slice(2,8);
    };

    //set background color style
    function backgroundColor(){
        var color = changeColor();
        $('body').css('background',color);
    };
    
    //space action
    $(window).keypress(function (e){
        if (e.keyCode === 32)
            {
                backgroundColor();
                document.getElementById('test').innerHTML=changeColor();
            }
    });
    backgroundColor();
});
    
   