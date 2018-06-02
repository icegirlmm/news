$(window).resize(function ()// 绑定到窗口的这个事件中
{
  var whdef = 100/1920;// 表示1920的设计图,使用100PX的默认值
  var wH = window.innerHeight;// 当前窗口的高度
  var wW = window.innerWidth;// 当前窗口的宽度
  var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
  $('html').css('font-size', rem + "px");
});

window.onload = function () {
    // var big =document.getElementById("big_wz");
    $("#top").css("opacity","0");
    $("#top").animate({
        opacity: 1
    }, 2000, function () {
        $("#big_wz").css("display", "block");
    $("#big_wz").addClass("animated zoomIn");
    $("#small_wz").css("display", "block");
    $("#small_wz").addClass("animated bounceInRight");
    var time=window.setInterval(function(){
        $("#big_wz").removeClass("animated zoomIn");
     $("#big_wz").addClass("animated shake");

    },1000);
 });
}