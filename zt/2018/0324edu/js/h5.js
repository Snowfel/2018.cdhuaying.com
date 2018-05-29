$(document).ready(function() {
});
var mySwiper = new Swiper('.swiper-container',{
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        mousewheelControl : true
    },
    direction: 'vertical',
	moveStartThreshold: 50,
	loop: true
});
mySwiper.on('imagesReady', function () {
    $(".spinner").hide();
    $(".u-sect1").show();
    $(".u-sect2").css({"display": "none"});
    console.log('imagesReady');
});
mySwiper.on('slideChange', function () {
    $max = 9;
    $k = mySwiper.activeIndex;
    if($k == 0){
        $k = $max;
    }
    else if ($k > $max){
        $k = 1;
    }
    if($k == 1){
        $p = $max;
    } else {
        $p = $k-1;
    }
    if($k == $max){
        $n = 1;
    } else {
        $n = $k+1;
    }
    console.log(mySwiper.previousIndex);
    $(".swiper-slide .m-sect"+$k).show();
    $(".swiper-slide .m-sect"+$p).css({"display": "none"});
    $(".swiper-slide .m-sect"+$n).css({"display": "none"});

/*
    $(".m-offer-slide li").eq(i).addClass("on").siblings(".m-offer-slide li").removeClass("on");
    $('.m-offer-slide table').eq(i).show().siblings('.m-offer-slide table').hide();

    if (mySwiper.activeIndex==1) {
        $(".m-sect".index).show();
        $(".m-sect2").css({"display": "none"});
    }
    if (mySwiper.activeIndex == 2) {
        $(".m-sect1").css({"display": "none"});
        $(".m-sect2").show();
    }
    if (mySwiper.activeIndex == 3) {
        $(".m-sect2").css({"display": "none"});
        $(".u-sectm").show();
        $(".u-sect4").css({"display": "none"});
    }*/
});

$('.fish').on('click', function(e){
	e.preventDefault();
	mySwiper.swipeNext();
});
var request;


