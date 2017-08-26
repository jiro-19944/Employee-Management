$(document).ready(function() {
    $('#submitForgot').click(function() {
        var gotUsername = $('#username').val();
        $.post('http://localhost:8080/user/checkUsername', {
            username: gotUsername
        }, function(data, status) {
            if (data === 'wrong username') {
                $('#username').val('');
                // TODO: show red error message that username is wrong
            } else {
                $('#username').prop('readonly', true);
                $('#addInputs').append('<input id="question" type="text" name="question" style="width:238px;" required>');
                $('#question').val(data.question).prop('readonly', true);
                $('#addInputs').append('<input id="answer" type="text" name="answer" placeholder="Your answer" required>');
                $('#submitForgot').remove();
                $('#addButtons').append('<button id="check" class="submit check">Check</button>');
            }
        });
    });

    $('#addButtons').on('click', 'button.check', function() {
        var gotUsername = $('#username').val(),
            gotanswer = $('#answer').val();
        if (!gotanswer) {
            alert('Answer field is required');
            return;
        }
        $.post('http://localhost:8080/user/checkUsername', {
            username: gotUsername,
            answer: gotanswer
        }, function(data, status) {
            if (data === 'wrong answer') {
                // TODO: show red error message that answer is wrong
                $('#answer').val('');
                return;
            }
            $('#question').remove();
            $('#check').remove();
            $('#answer').remove();
            $('#addInputs').append('<input id="newPass" type="password" name="newPass" placeholder="New password" required>');
            $('#addInputs').append('<input id="confirmPass" class="confirmPass" type="password" name="confirmPass" placeholder="Confirm password" required>');
            $('#addInputs').append('<span id="confirmMessage" style="visibility: hidden;"></span>');
            $('#addButtons').append('<button id="confirmBtn" class="submit confirm" type="submit" form="form" disabled>Confirm</button>');
        });
    });

    $('#addInputs').on('keyup', 'input.confirmPass', function() {
        if ($("#newPass").val() === $("#confirmPass").val()) {
            $("#confirmPass").css('background-color', '#66cc66');
            $('#confirmMessage').css('color', '#66cc66');
            $('#confirmMessage').css('visibility', '');
            $('#confirmMessage').text('Passwords Match!');
            $('#confirmMessage').show();
            $('#confirmBtn').prop('disabled', false);
        } else {
            $('#confirmPass').css('background-color', '');
            $('#confirmBtn').prop('disabled', true);
            $('#confirmMessage').hide();
        }
    });
});
