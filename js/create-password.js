function checkPassword() {
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let error = document.getElementById("error");

    if (pass.length < 6) {
        error.innerText = "Password must be at least 6 characters";
        return;
    }

    if (pass !== confirm) {
        error.innerText = "Passwords do not match";
        return;
    }

    error.innerText = "";

    let save = confirm("Do you want to save this password?");

    if (save) {
        alert("✅ Account Created Successfully!");
        window.location.href = "../pages/dashboard.html";
    } else {
        alert("❌ Password not saved");
    }
}