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
