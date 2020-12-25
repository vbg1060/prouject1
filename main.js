$(document).ready(function(){
    $("#heading").css('color','orange');
    $('.heading-box').css({'background-color':'blue','padding':'20px'});
    $('.heading-box h1').css('background-color','yellow');
    $('input[type="text"]').css('padding','50px');
    $('.list li:last').css({'color':'orange','list-style-type':'none'});
  
    $('.heading-box h1').on('dblclick',function(){
       $('.list').toggle();
    })

    $('#name').keyup(function(e){
        var code = e.which;
        if(code === 13){
            $('.list').append('<li>'+e.target.value+'</li>');
        }
    })

    $('#name').on('click',function(){
         var box = $('.heading-box');
        box.animate({

            left:400
        }),
        box.animate({
            top:200
        }),
        box.animate({
            left:200
        }),
        box.animate({
            top:0
        })
        })
    
})  