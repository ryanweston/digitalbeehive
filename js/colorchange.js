$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var os = $('#aboutTab').offset().top;
    var os2 = $('#workTab').offset().top;
    var ht = $('#aboutTab').height();
    if(scroll > os - 100 ){
        $("#span1").css("background-color", "white");
        $("#span2").css("background-color", "white");
        $("#span3").css("background-color", "white");
        $("#logo").attr("src","img/whitelogo.png")
    }
    else if(scroll < os){
    	$("#span1").css("background-color", "#333");
    	$("#span2").css("background-color", "#333");
    	$("#span3").css("background-color", "#333");
        $("#logo").attr("src","img/smalllogo.png")
    }
    else if(scroll > os2 - 200){
    	$("#span1").css("background-color", "#333");
    	$("#span2").css("background-color", "#333");
    	$("#span3").css("background-color", "#333");
        $("#logo").attr("src","img/smalllogo.png")
    }
});
