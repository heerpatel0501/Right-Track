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

function showSkill(skill) {
    const info = document.getElementById("skill-info");
    info.classList.remove("hidden");

    if(skill === "web") {
        document.getElementById("skill-title").innerText = "Web Development";
        document.getElementById("skill-do").innerText = "Learn HTML, CSS, JS and build projects.";
        document.getElementById("skill-why").innerText = "High demand and freelancing opportunities.";
        document.getElementById("skill-action").innerText = "Start with a simple website today.";
    }

    if(skill === "ai") {
        document.getElementById("skill-title").innerText = "AI & ML";
        document.getElementById("skill-do").innerText = "Learn Python and basic ML concepts.";
        document.getElementById("skill-why").innerText = "Future-proof and high-paying field.";
        document.getElementById("skill-action").innerText = "Try small AI projects.";
    }

    if(skill === "design") {
        document.getElementById("skill-title").innerText = "UI/UX Design";
        document.getElementById("skill-do").innerText = "Learn Figma and design basics.";
        document.getElementById("skill-why").innerText = "Important for user-friendly apps.";
        document.getElementById("skill-action").innerText = "Redesign any app screen.";
    }
}

function openSettings() {
    document.getElementById("settingsPanel").classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

function closeSettings() {
    document.getElementById("settingsPanel").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}
function openProfile() {
    document.getElementById("profilePanel").classList.add("active");
}

/* CLOSE WHEN CLICK OUTSIDE */
document.addEventListener("click", function(e) {
    let panel = document.getElementById("profilePanel");

    if (!panel.contains(e.target) && !e.target.classList.contains("profile-btn")) {
        panel.classList.remove("active");
    }
});

