/* Automatic Slideshow And Show Content When Clicking H3 */

var i = 0;
var images = [];
var time = 3000;

images[0] = './Pictures/Project1.png';
images[1] = './Pictures/Project1-2.png';
images[2] = './Pictures/Project1-3.png';
images[3] = './Pictures/Project1-4.png';

function changeImgOyc(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    const timeoutOyc = setTimeout("changeImgOyc()", time);
    timeoutOyc;
    return timeoutOyc;
}

var j = 0;
var images2 = [];
var time2 = 3000;

images2[0] = './Pictures/Project2.png';
images2[1] = './Pictures/Project2-1.png';
images2[2] = './Pictures/Project2-2.png';
images2[3] = './Pictures/Project2-3.png';

function changeImgObnoxious(){
    document.slide2.src = images2[i];

    if(j < images2.length - 1){
        j++;
    } else {
        j = 0;
    }

    const timeoutObnoxious = setTimeout("changeImgObnoxious()", time2);
    timeoutObnoxious;
    return timeoutObnoxious;
}

var first_click = true;
document.getElementById("oslo-yacht").onclick = function() {
    if (first_click) {
        addContentOyc();
        changeImgOyc();
        first_click = false;
    } else {
        document.getElementById("slideshow-img").style.display = "none";
        document.getElementById("oyc-p").style.display = "none";
        document.getElementById("caret-1").style.transform = "rotate(0deg)";
        /*clearTimeout(timeoutOyc);*/
        first_click = true;
    };
}

document.getElementById("obnoxious").onclick = function() {
    if (first_click) {
        addContentObnoxious();
        changeImgObnoxious();
        first_click = false;
    } else {
        document.getElementById("slideshow-img-2").style.display = "none";
        document.getElementById("obnoxious-p").style.display = "none";
        document.getElementById("caret-2").style.transform = "rotate(0deg)";
        /*clearTimeout(timeoutObnoxious);*/
        first_click = true;
    };
}

function addContentOyc() {
    document.getElementById("slideshow-img").style.display = "block";
    document.getElementById("oyc-p").style.display = "block";
    document.getElementById("oyc-p").style.textAlign = "left";
    document.getElementById("caret-1").style.transform = "rotate(90deg)";
    document.getElementById("slideshow-img-2").style.display = "none";
    document.getElementById("obnoxious-p").style.display = "none";
    document.getElementById("caret-2").style.transform = "rotate(0deg)";
}

function addContentObnoxious() {
    document.getElementById("slideshow-img-2").style.display = "block";
    document.getElementById("obnoxious-p").style.display = "block";
    document.getElementById("obnoxious-p").style.textAlign = "left";
    document.getElementById("caret-2").style.transform = "rotate(90deg)";
    document.getElementById("slideshow-img").style.display = "none";
    document.getElementById("oyc-p").style.display = "none";
    document.getElementById("caret-1").style.transform = "rotate(0deg)";
}

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
    document.getElementById("col-2").style.backgroundColor = "rgb(0,0,0,0)";
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
    document.getElementById("col-2").style.backgroundColor = "rgb(0,0,0,0.9)";
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

/* Change Picture Style */
const picture = document.getElementById("picture");
first_click;

picture.onclick = function() {
    if (first_click) {
        picture.style.borderRadius = "50%";
        first_click = false;
    } else {
        picture.style.borderRadius = "20px";
        first_click = true;
    };
}