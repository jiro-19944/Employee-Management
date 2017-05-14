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