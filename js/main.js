console.log("js正常読み込み");
$(function(){
    $(".c-button-close").click(function(){
        $(".p-sidebar").removeClass("is-open");
        $(".c-background").removeClass("is-open");
        $("body").css("overflow","unset");

    });
    
    $(".p-header__menu").click(function(){
        $(".p-sidebar").addClass("is-open");
        $(".c-background").addClass("is-open");
        $("body").css("overflow","hidden");
    });

    $(window).resize(function(){
        let currentWidth = $(window).width();                
        $(".p-sidebar").removeClass("is-open");
        $(".c-background").removeClass("is-open");
        $("body").css("overflow","unset");
        console.log("メニュー非表示");
        
    });

});