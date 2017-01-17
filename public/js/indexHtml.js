$(document).ready(function(){
    $("#employee, #leave, #salary, #footballTeam").click(function(){
    	$("#header_ul li").css('background-color', '#4C87BF');
    	$("#header_ul li a").css('color', 'white');
        $(this).css('background-color', 'white');
        $(this).find("a").css('color', '#4C87BF');
    });
});