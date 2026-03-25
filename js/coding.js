let seconds = 0;

// load previous time
if (localStorage.getItem("codingTime")) {
    seconds = parseInt(localStorage.getItem("codingTime"));
}

setInterval(() => {
    seconds++;
    document.getElementById("time").innerText = seconds + " sec";

    // save time
    localStorage.setItem("codingTime", seconds);
}, 1000);