/* Dark Mode On/Off */

document.getElementById("toggle-off").onclick = function() {
    darkMode();
}

document.getElementById("toggle-on").onclick = function() {
    normalMode();
}

function darkMode() {
    document.getElementById("html").style.backgroundColor = "rgb(0, 0, 0, 0.9)";
    document.getElementById("html").style.color = "white";
    document.getElementById("darkmode").style.background = "rgb(0,0,0,0)"
    document.getElementById("toggle-off").style.color = "white";
    document.getElementById("toggle-off").style.display = "none";
    document.getElementById("toggle-on").style.display = "block";
    document.getElementById("a-about").style.color = "white";
    document.getElementById("a-projects").style.color = "white";
    document.getElementById("a-skills").style.color = "white";
    document.getElementById("a-contact").style.color = "white";
    document.getElementById("linkedin").style.color = "white";
    document.getElementById("github").style.color = "white";
    document.getElementById("mail").style.color = "white";
}

function normalMode() {
    document.getElementById("html").style.backgroundColor = "white";
    document.getElementById("html").style.color = "black";
    document.getElementById("darkmode").style.background = "rgb(0,0,0,0)"
    document.getElementById("toggle-off").style.color = "black";
    document.getElementById("toggle-off").style.display = "block";
    document.getElementById("toggle-on").style.display = "none";
    document.getElementById("a-about").style.color = "black";
    document.getElementById("a-projects").style.color = "black";
    document.getElementById("a-skills").style.color = "black";
    document.getElementById("a-contact").style.color = "black";
    document.getElementById("linkedin").style.color = "black";
    document.getElementById("github").style.color = "black";
    document.getElementById("mail").style.color = "black";
}