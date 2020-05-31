$(function(){
    function toggleChangeBtn(){

        var slideIndex=$('.slide').index($('.active'));
    $('.change-btn').show();
    if(slideIndex==0){
        $('.prev-btn').hide();
    }else if(slideIndex==$('.slide').length-1){
        $('.next-btn').hide();
    }

    }

    $('.index-btn').click(function(){
        $('.active').removeClass('active');
        var clickedIndex=$('.index-btn').index($(this));
        $('.slide').eq(clickedIndex).addClass('active');

    
        toggleChangeBtn();

    });

    $('.change-btn').click(function(){
        var $displaySlide=$('.active');
        $displaySlide.removeClass('active')
        if($(this).hasClass('next-btn')){
            $displaySlide.next().addClass('active');
        }else{
            $displaySlide.prev().addClass('active');
        }

        toggleChangeBtn();
    });

    

    $('.signup-show').click(function(){
        $('#signup-modal1').fadeIn();

    });
    

    $('.close-modal').click(function(){
        $('#signup-modal1').fadeOut();
    });

    $('.signup-show2').click(function(){
        $('#signup-modal2').fadeIn();

    });
    

    $('.close-modal').click(function(){
        $('#signup-modal2').fadeOut();
    }); 

    $('.signup-show3').click(function(){
        $('#signup-modal3').fadeIn();

    });
    

    $('.close-modal').click(function(){
        $('#signup-modal3').fadeOut();
    }); 

    $('.signup-show4').click(function(){
        $('#signup-modal4').fadeIn();

    });
    $('.close-modal').click(function(){
        $('#signup-modal4').fadeOut();
    });

    　　$('.signup-show5').click(function(){
        $('#signup-modal5').fadeIn();

    });
    $('.close-modal').click(function(){
        $('#signup-modal5').fadeOut();
    });


    　$('.signup-show6').click(function(){
        $('#signup-modal6').fadeIn();

    });
    $('.close-modal').click(function(){
        $('#signup-modal6').fadeOut();
    });

    $('.signup-show7').click(function(){
        $('#signup-modal7').fadeIn();

    });
    $('.close-modal').click(function(){
        $('#signup-modal7').fadeOut();
    });
    $('.signup-show8').click(function(){
        $('#signup-modal8').fadeIn();

    });
    $('.close-modal').click(function(){
        $('#signup-modal8').fadeOut();
    });

    $('.signup-show9 ').click(function(){
        $('#signup-modal9 ').fadeIn();

    });
    $('.close-modal').click(function(){
        $('#signup-modal9').fadeOut();
    });

    $('.signup-show10 ').click(function(){
        $('#signup-modal10 ').fadeIn();

    });
    $('.close-modal').click(function(){
        $('#signup-modal10').fadeOut();
    });

    $('.signup-show11 ').click(function(){
        $('#signup-modal11 ').fadeIn();

    });
    $('.close-modal').click(function(){
        $('#signup-modal11').fadeOut();
    });

    $('.signup-show12 ').click(function(){
        $('#signup-modal12 ').fadeIn();

    });
    $('.close-modal').click(function(){
        $('#signup-modal12').fadeOut();
    });

    $('.signup-show22 ').click(function(){
        $('#signup-modal22 ').fadeIn();

    });
    $('.close-modal').click(function(){
        $('#signup-modal22').fadeOut();
    });

    $('.signup-show13 ').click(function(){
        $('#signup-modal13 ').fadeIn();

    });
    $('.close-modal').click(function(){
        $('#signup-modal13').fadeOut();
    });

    $('.signup-show17 ').click(function(){
        $('#signup-modal17 ').fadeIn();

    });
    $('.close-modal').click(function(){
        $('#signup-modal17').fadeOut();
    });

    $('.signup-show18 ').click(function(){
        $('#signup-modal18 ').fadeIn();

    });
    $('.close-modal').click(function(){
        $('#signup-modal18').fadeOut();
    });

    $('.signup-show19 ').click(function(){
        $('#signup-modal19 ').fadeIn();

    });
    $('.close-modal').click(function(){
        $('#signup-modal19').fadeOut();
    });


    $('.signup-show20 ').click(function(){
        $('#signup-modal20 ').fadeIn();

    });
    $('.close-modal').click(function(){
        $('#signup-modal20').fadeOut();
    });

    $('.signup-show29 ').click(function(){
        $('#signup-modal29 ').fadeIn();

    });
    $('.close-modal').click(function(){
        $('#signup-modal29').fadeOut();
    });

    $('.signup-show16 ').click(function(){
        $('#signup-modal16 ').fadeIn();

    });
    $('.close-modal').click(function(){
        $('#signup-modal16').fadeOut();
    });

    $('.signup-show32 ').click(function(){
        $('#signup-modal32 ').fadeIn();

    });
    $('.close-modal').click(function(){
        $('#signup-modal32').fadeOut();
    });
    $('.signup-show30 ').click(function(){
        $('#signup-modal30 ').fadeIn();

    });
    $('.close-modal').click(function(){
        $('#signup-modal30').fadeOut();
    });

    $('.signup-showc ').click(function(){
        $('#signup-modalc ').fadeIn();

    });
    $('.close-modal').click(function(){
        $('#signup-modalc').fadeOut();
    });

    $('.signup-showp ').click(function(){
        $('#signup-modalp ').fadeIn();

    });
    $('.close-modal').click(function(){
        $('#signup-modalp').fadeOut();
    });





    $('#top-btn').click(function(){
        $('html,body').scrollTop(0);
    });

    $('.team-detail a').click(function(){
        var id=$(this).attr('href');
        var position=$(id).offset().top;
        $('html,body').animate({
            'scrollTop':position
        },500);
    });
});
