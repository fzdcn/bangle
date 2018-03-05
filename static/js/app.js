$(function () {
    roll();
    tabChange();
    rigthFix();
    leftFix();
})

//index左右滚动
function roll() {
    $(".advantage .count").dayuwscroll({
        parent_ele: '.advantage #wrap-box',
        list_btn: '.advantage #tabT04',
        pre_btn: '.advantage #left',
        next_btn: '.advantage #right',
        path: 'left',
        auto: true,
        time: 3000,
        num: 4,
        gd_num: 4,
        waite_time: 1000

    })
}
//关于我们tab切换
function tabChange() {
    $(".wasteland-cleaning-nav li:not(:nth-child(1)):not(:nth-child(2))").on("click",function () {
        var index = $(this).index()-2;
        $(this).addClass("font-color-3ba712").siblings().removeClass("font-color-3ba712");
        $(this).addClass("border-style").siblings().removeClass("border-style");
        $(".min-section .section").eq(index).removeClass("hide").addClass("show").siblings().addClass("hide").removeClass("show");
    });
}

//右边咨询联系
function rigthFix() {
    $(".rigth-fix ul li").each(function(i) {
        $(this).hover(function() {
            $(this).addClass("on");
            $(this).siblings().removeClass("on");
            $(this).children("div").fadeIn();
            $(this).siblings().children("div").fadeOut();
        });
    });
    $(".rigth-fix>.li4").hover(function() {
        $(".rigth-fix ul li").children("div").fadeOut();
    });
}

//左边客服咨询
function leftFix() {
    $(".left-img-tab").on("click",function () {
        $(".left-fix").slideToggle(500);
        if ($(this).css("left") == "150px"){
            $(this).animate({left:'0px'},500);
        }else {
            $(this).animate({left:'150px'},500);
        }
    })
}