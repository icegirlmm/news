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
