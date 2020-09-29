// $(".carousel").carousel("pause");

// $(".carousel").carousel({
//     interval: 1000,
// });

$("#reg-form").submit(() => {
    $(".error-msg").hide();
    let isValid = true;
    if ($("#username").val() === "") {
        $("#username-error").show();
        isValid = false;
    }

    if ($("#password").val() === "") {
        $("#password-error").show();
        if ($("#password").length <= 8) {
            $("#password-length").show();
        }
        isValid = false;
    }

    if ($("#password").val() !== $("#re-password").val()) {
        $("#repassword-error-match").show();
        isValid = false;
    }

    if ($("#first-name").val() === "") {
        $("#first-name-error").show();
        isValid = false;
    }

    if ($("#last-name").val() === "") {
        $("#last-name-error").show();
        isValid = false;
    }

    if ($("#country").val() === null) {
        $("#country-error").show();
        isValid = false;
    }

    if (!$("#check-it").prop("checked")) {
        $("#checkbox-error").show();
        isValid = false;
    }

    return isValid;
});

$("#chat-form").submit(() => {
    const date = new Date();

    let currentDate =
        date.getDate() +
        "." +
        date.getMonth() +
        "." +
        date.getFullYear() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes();

    let message = $("#chat-message").val();
    let username = $("#chat-username").val();
    $("#message-box").append(
        `<p>` +
            `<strong>` +
            username +
            `</strong>` +
            " " +
            message +
            " " +
            currentDate +
            `</p>`
    );
    $("#chat-message").val("");
    $("#chat-username").val("");

    return false;
});
