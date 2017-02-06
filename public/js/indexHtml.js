$(document).ready(function()
{
    $("#employee, #galary, #salary, #footballTeam").click(function()
    {
    	$("#header_ul li").css("background-color", "#4C87BF");
    	$("#header_ul li a").css("color", "white");
        $(this).css("background-color", "white");
        $(this).find("a").css("color", "#4C87BF");
    });

    $("#signin-trigger, #signup-trigger").click(function()
    {
        if(this.id == "signin-trigger")
        {
            $(this).next("#signin-content").slideToggle();
        }
        else if(this.id == "signup-trigger")
        {
            $(this).next("#signup-content").slideToggle();
        }

        $(this).toggleClass("active");
        $(this).toggleClass("nonClicking");
        
        if($(this).hasClass("active"))
        {
            $(this).find("span").html("&#x25B2;")
        }
        else
        {
            $(this).find("span").html("&#x25BC;")
        }
    });

    $(document).click(function(e) 
    {
        if((!$(e.target).hasClass("nonClicking") || e.target.id == "signup-trigger") &&
         $("#signin-trigger").hasClass("active"))
        {
            $("#signin-trigger").next("#signin-content").slideToggle();
            $("#signin-trigger").find("span").html("&#x25BC;");
            $("#signin-trigger").toggleClass("active");
            $("#signin-trigger").toggleClass("nonClicking");
        }
        else if((!$(e.target).hasClass("nonClicking") || e.target.id == "signin-trigger") &&
         $("#signup-trigger").hasClass("active"))
        {
            $("#signup-trigger").next("#signup-content").slideToggle();
            $("#signup-trigger").find("span").html("&#x25BC;")
            $("#signup-trigger").toggleClass("active");
            $("#signup-trigger").toggleClass("nonClicking");
        }
        
    })

});