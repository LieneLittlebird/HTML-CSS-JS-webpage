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
    let month = (date.getMonth() + 1).toString();
    month = month.length === 1 ? "0" + month : month;
    let minutes = date.getMinutes().toString();
    minutes = minutes.length === 1 ? "0" + minutes : minutes;
    let hours = date.getHours().toString();
    hours = hours.length === 1 ? "0" + hours : hours;
    let myDate = date.getDate().toString();
    myDate = myDate.length === 1 ? "0" + myDate : myDate;

    let currentDate =
        myDate +
        "." +
        month +
        "." +
        date.getFullYear() +
        " " +
        hours +
        ":" +
        minutes;
    let message = $("#chat-message").val();
    let username = $("#chat-username").val();
    $("#chat-window").append(
        `<p >` +
            `<strong>` +
            username +
            `</strong>` +
            `<span class="chat-date">` +
            " " +
            " " +
            currentDate +
            `</span>` +
            `</p>` +
            " " +
            `<p>` +
            message +
            " " +
            `</p>`
    );
    $("#chat-message").val("");
    $("#chat-username").val("");

    return false;
});

// .css({color: "grey", "font-size": "small" })
