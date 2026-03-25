function openReading(type) {
    alert("📖 Opening " + type + " section...");
}

function checkAnswer(ans) {
    let result = document.getElementById("quizResult");

    if (ans === "b") {
        result.innerText = "✅ Correct! Reading helps in learning.";
        result.style.color = "green";
    } else {
        result.innerText = "❌ Try again!";
        result.style.color = "red";
    }
}