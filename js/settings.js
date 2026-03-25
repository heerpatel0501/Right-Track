function changePassword() {
    let pass1 = document.querySelectorAll("input[type='password']")[0].value;
    let pass2 = document.querySelectorAll("input[type='password']")[1].value;
    let msg = document.getElementById("passMsg");

    if (pass1 === pass2 && pass1 !== "") {
        msg.style.color = "green";
        msg.innerText = "Password updated successfully!";
    } else {
        msg.style.color = "red";
        msg.innerText = "Passwords do not match!";
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}