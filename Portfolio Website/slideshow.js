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

    setTimeout("changeImgOyc()", time);
}

var images2 = [];

images2[0] = './Pictures/Project2.png';
images2[1] = './Pictures/Project2-1.png';
images2[2] = './Pictures/Project2-2.png';
images2[3] = './Pictures/Project2-3.png';

function changeImgObnoxious(){
    document.slide2.src = images2[i];

    if(i < images2.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImgObnoxious()", time);
}

function addContentOyc() {
  document.getElementById("slideshow-img").style.display = "block";
  changeImgOyc();
  document.getElementById("oyc-p").style.display = "block";
  document.getElementById("oyc-p").style.textAlign = "left";
}

function addContentObnoxious() {
    document.getElementById("slideshow-img-2").style.display = "block";
    changeImgObnoxious();
    document.getElementById("obnoxious-p").style.display = "block";
    document.getElementById("obnoxious-p").style.textAlign = "left";
  }