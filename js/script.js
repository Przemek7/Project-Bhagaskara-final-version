
$(document).ready(function(){

var ham=$(".hamburger");
var nav=$(".nav-inside");

ham.on('click',function(){
	nav.slideToggle(500);

	})

function sticky_relocate() {
    var window_top = $(window).scrollTop();


    var div_top = $('#sticky-anchor').offset().top; //pobiera odleglosc elementu sticku od gory
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
    } else {
        $('#sticky').removeClass('stick');
    }
    }

    $(window).scroll(sticky_relocate);


var ul=$(".team");
var teamContent=$(".team li");
//console.log(teamContent.length);
var next=$(".right-arrow");
var prev=$(".left-arrow");
var position=0;

var teamContentWidth=360;

ul.css("width",teamContentWidth * teamContent.length +"px");
ul.css("left",-position * teamContentWidth + "px");


next.on('click',function(event){
    position++;
    //console.log(position);
    if(position >= teamContent.length-2){
        position=-1;
    }
    else{
        ul.animate({
            "left": -position * teamContentWidth + "px"
        },500);
    };
    event.preventDefault();
});

prev.on('click',function(event){
    position--;
    if(position<=0){
        position=0;
        event.preventDefault();
    }
    ul.animate({
        "left": -position * teamContentWidth + "px"
        },500);
        event.preventDefault();
    });



});

$(document).ready(function(){
  $('.bxslider').bxSlider({

    controls: false,
    auto:true,
    pause:2000,
    pager: true
    });
});


$(document).ready(function(){

    var link=$(".portfolio-buttons a");

link.on('click',function(event){
    event.preventDefault();

    var data=$(this).attr("data");


    $(".container-portfolio .row div").hide();

    $(".container-portfolio .row div."+ data).show();
})

});
