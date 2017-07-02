$(document).ready(function() {
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
                $("#addButtons").append('<button id="check" class="submit check">Check</button>');
            }
        });
    });

    $("#addButtons").on("click", "button.check", function() {
        var gotUsername = $("#username").val(),
            gotanswer = $("#answer").val();
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
            $("#question").remove();
            $("#check").remove();
            $("#answer").remove();
            $("#addInputs").append('<input id="newPass" type="password" name="newPass" placeholder="New password" style="width:238px;" required>');
            $("#addInputs").append('<input id="confirmPass" class="confirmPass" type="password" name="confirmPass" placeholder="Confirm password" style="width:238px;" required>');
            $("#addInputs").append('<span id="confirmMessage" class="confirmMessage"></span>');
            $("#addButtons").append('<button id="confirmBtn" class="submit confirm" type="submit" disabled>Confirm</button>');

            // var html = $.parseHTML(data);
            // $("html").html(html);
        });
    });

    $("#form").on("click", "input.confirmPass", function() {
        console.log("---------------");
        if ($("#newPass").val() === $("#confirmPass").val()) {
            console.log("////////////////////");
            $("#confirmPass").css("background-color", "#66cc66");
            $("#confirmMessage").css("color", "#66cc66");
            $("#confirmMessage").text("Passwords Match!")
            $("confirmBtn").prop('disabled', false);
        } else {
            $("#confirmPass").css("background-color", "#ff6666");
            $("#confirmMessage").css("color", "#ff6666");
            $("#confirmMessage").text("Passwords Do Not Match!")
        }
    });
});
