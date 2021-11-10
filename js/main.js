console.log("js正常読み込み");
$(function(){
    $(".c-close").click(function(){
        $(".p-sidebar").removeClass("is-open");
        $(".c-background").removeClass("is-open");
        $("main").removeClass("is-fixed");
    });
    
    $(".p-header__menu").click(function(){
        $(".p-sidebar").addClass("is-open");
        $(".c-background").addClass("is-open");
        $("main").addClass("is-fixed");
    });


    if (window.matchMedia('(max-width: 1200px)').matches) {
        $(".has-submenu").hover(function(){//サブメニューの表示非表示
            console.log("ホバーを検出");
            $(this).children("ul").stop(true).slideDown();
        },function(){
            $(this).children("ul").stop(true).slideUp();
    });}


    
    $(window).resize(function(){
        let currentWidth = $(window).width();                
        $(".gnavi-opened").hide();
        $(".drawermenu").removeClass("opened");
        console.log("ハンバーガーメニュー非表示");

        if(currentWidth>1200){
            $(".gnavi-opened").show();
            console.log("ヘッダーメニュー表示")
        }
        
    });

});