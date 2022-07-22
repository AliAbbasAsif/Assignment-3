// to clear thigs from screen 
var iscleaned;
function clearscreen() {
    document.getElementById('result').value = "";
}

function display(value) {
    if(iscleaned){
        clearscreen();
    }
    iscleaned = false;
    document.getElementById('result').value += value;
    
}

function calculate() {
    var a = document.getElementById('result').value;
    var b = eval(a);
    document.getElementById('result').value = b;
    iscleaned= true;
}

var currentslide = 1;
displaypics(currentslide);

function btn(num) {
    displaypics(currentslide += num);
}

function displaypics(num) {
    var x;
    var slides = document.getElementsByClassName('slide');
    if (num > slides.length) { currentslide = 1 };
    if (num < 1) { currentslide = slides.length };
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currentslide - 1].style.display = "block";
}