$(document).ready(function(){
    $("#employee, #leave, #salary, #footballTeam").click(function(){
    	$("#header_ul li").css('background-color', '#4C87BF');
    	$("#header_ul li a").css('color', 'white');
        $(this).css('background-color', 'white');
        $(this).find("a").css('color', '#4C87BF');
    });

    $("#basic_info_li, #personal_li, #job_li, #salary_li, #vocation_li").click(function(){
    	$("#basic_info_ul li").css('background-color', 'white');
    	$("#basic_info_ul li a").css('color', '#4172AA');
        $(this).css('background-color', '#B8D1E7');
        $(this).find("a").css('color', '#005D8A');
    });
});