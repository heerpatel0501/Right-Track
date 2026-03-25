function startWorkout(type) {
    alert("🔥 Starting " + type + " workout!");
    
    let calories = document.getElementById("calories");
    calories.innerText = parseInt(calories.innerText) + 50;
}

function markDone() {
    alert("✅ Great job! Keep going 💪");
}

function newQuote() {
    let quotes = [
        "Push yourself, because no one else will!",
        "Small steps every day lead to big results.",
        "Consistency beats motivation.",
        "Your only limit is you."
    ];

    let random = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerText = random;
}