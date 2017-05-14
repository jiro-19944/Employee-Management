$(document).ready(function() {
    $("#employee, #leave, #salary, #footballTeam").click(function() {
        $("#header_ul li").css("background-color", "#4C87BF");
        $("#header_ul li a").css("color", "white");
        $(this).css("background-color", "white");
        $(this).find("a").css("color", "#4C87BF");
    });

    $("#signinTrigger, #signupTrigger").click(function() {
        if (this.id == "signinTrigger") {
            $(this).next("#signinContent").slideToggle();
        } else if (this.id == "signupTrigger") {
            $(this).next("#signupContent").slideToggle();
        }

        $(this).toggleClass("active");
        $(this).toggleClass("nonClicking");

        if ($(this).hasClass("active")) {
            $(this).find("span").html("&#x25B2;")
        } else {
            $(this).find("span").html("&#x25BC;")
        }
    });

    $(document).click(function(e) {
        if ((!$(e.target).hasClass("nonClicking") || e.target.id == "signupTrigger") &&
            (!$(e.target).hasClass("span") || e.target.id == "signUpSpan") && $("#signinTrigger").hasClass("active")) {
            $("#signinTrigger").next("#signinContent").slideToggle();
            $("#signinTrigger").find("span").html("&#x25BC;");
            $("#signinTrigger").toggleClass("active");
            $("#signinTrigger").toggleClass("nonClicking");
            $("#signInUsername").val("");
            $("#signInPassword").val("");
        } else if ((!$(e.target).hasClass("nonClicking") || e.target.id == "signinTrigger") &&
            (!$(e.target).hasClass("span") || e.target.id == "signInSpan") && $("#signupTrigger").hasClass("active")) {
            $("#signupTrigger").next("#signupContent").slideToggle();
            $("#signupTrigger").find("span").html("&#x25BC;")
            $("#signupTrigger").toggleClass("active");
            $("#signupTrigger").toggleClass("nonClicking");
            $("#signUpUsername").val("");
            $("#signUpPassword").val("");
        }
    });
});