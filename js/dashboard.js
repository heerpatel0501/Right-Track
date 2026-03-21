const skillsData = {
    coding: {
        title: "Coding 💻",
        do: "Start with HTML, CSS basics",
        why: "Coding builds logic and problem solving",
        action: "Code 30 mins daily"
    },
    fitness: {
        title: "Fitness 🏃",
        do: "Do basic exercise daily",
        why: "Keeps body and mind healthy",
        action: "15 min workout today"
    },
    reading: {
        title: "Reading 📖",
        do: "Read books or articles",
        why: "Improves knowledge and focus",
        action: "Read 10 pages today"
    }
};

function selectSkill(card){
    document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
event.currentTarget.classList.add("active");


    // toggle selection
    card.classList.toggle("active");

}
do: "💻 Learn basics and build small projects.",
why: "🚀 High demand skill for future.",
action: "🔥 Start coding today."
document.getElementById("skill-info").scrollIntoView({
    behavior: "smooth"
});
