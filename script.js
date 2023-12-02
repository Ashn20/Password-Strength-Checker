const password = document.getElementById("password");
const strength = document.getElementById("strength");
const message = document.getElementById("message");
const submitButton = document.querySelector("button");



password.addEventListener("input", function () {

    const passwordValue = password.value;
    const passwordLength = passwordValue.length;


    let strengthValue = '';

    if (password === 0) {
        strengthValue = '';
    } else if (passwordLength < 6) {
        strengthValue = 'Weak';
        message.style.color = "red";
    } else if (passwordLength < 10) {
        strengthValue = 'Medium';
        message.style.color = "orange";
    } else {
        strengthValue = 'Strong';
        message.style.color = "rgb(24, 202, 24)";
    }
    strength.textContent = strengthValue;
    message.style.display = "block";

});

submitButton.addEventListener("click", function () {

    let passwordtype = password.getAttribute("type");
    if (passwordtype === 'password') {
        password.setAttribute("type", "text");
    } else {
        password.setAttribute("type", "password");
    }
});