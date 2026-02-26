// Show / Hide Password
function togglePassword() {
    const pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

// Age Auto Calculate
document.getElementById("dob").addEventListener("change", function () {
    const dob = new Date(this.value);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById("ageDisplay").innerText =
        "Detected Age: " + age + " years";
});

// Fake validation demo
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("errorMsg").innerText =
        "Demo mode: Backend authentication not connected yet.";
});