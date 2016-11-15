$(document).ready(function(){
    $("#1st_li, #2rd_li, #3nd_li, #4th_li, #5th_li").click(function(){
    	$("#header_ul li").css('background-color', '#4C87BF');
    	$("#header_ul li a").css('color', 'white');
        $(this).css('background-color', 'white');
        $(this).find("a").css('color', '#4C87BF');
    });
});