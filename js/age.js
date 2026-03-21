document.addEventListener("DOMContentLoaded", function() {

    const dobInput = document.getElementById("birthdate");
    const ageDisplay = document.getElementById("agePreview");

    if (dobInput) {
        dobInput.addEventListener("change", function() {

            const birthDate = new Date(dobInput.value);
            const today = new Date();

            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();

            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            if (ageDisplay) {
                ageDisplay.innerText = "Your Age: " + age;
            }

        });
    }

});