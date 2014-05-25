$(document).ready(function() {
    $('div').mouseover(function() {
    $('div').addClass('blue');
    $('div').mouseleave(function() {
    $('div').removeClass('blue');
    });
    });

    $('div').on('click', function() {
    $('div').addClass('green');
    });
    
    $('div').dblclick(function() { 
    $('div').addClass('yellow');
    });
    
    $(this).keydown(function(){
    $('div').fadeOut(3000);
    });
    
});
