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

    $("#submitForgot").click(function() {
        var gotUsername = $("#username").val();
        console.log(gotUsername);
        $.post("http://localhost:8080/checkUsername", {
            username: gotUsername
        }, function(data, status) {

            if (data === "wrong username") {
                $("#username").val("");
            } else {
                $("#username").prop("readonly", true);
                $("#addInputs").append('<input id="question" type="text" name="question" style="width:238px;" required>');
                $("#question").val(data.question).prop("readonly", true);
                $("#addInputs").append('<input id="answer" type="text" name="answer" placeholder="Your answer" required>');
                $("#submitForgot").remove();
                $("#addButtons").append('<button class="submit check">Nexxxxxxt</button>');
            }
        });
    });

    $("#addButtons").on("click", "button.check", function() {
        var gotUsername = $("#username").val();
        var gotanswer = $("#answer").val();
        if (!gotanswer) {
            alert("Answer field is required");
            return;
        }
        $.post("http://localhost:8080/checkUsername", {
            username: gotUsername,
            answer: gotanswer
        }, function(data, status) {
            if (data === "wrong answer") {
                alert("Answer is wrong");
                $("#answer").val("");
                return;
            }
            var html = $.parseHTML(data);
            $("html").html(html);
        });
    });
});