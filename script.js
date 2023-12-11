function copyToClipboard() {
    navigator.clipboard.writeText("abhinavisgreat18@gmail.com");
}

var copy = document.getElementById("copy");
var tag = document.getElementById("tag");

function clickHandler() {
    var check = document.getElementById("check");
    check.style.display = "inline-block";
    copy.style.display = "none";
    tag.style.display = "inline-block";

    setTimeout(function() {
        check.style.display = "none";
        copy.style.display = "inline-block";
        tag.style.display = "none";
    }, 2000);
    
    copy.removeEventListener("click", clickHandler);
    
    setTimeout(function() {
        copy.addEventListener("click", clickHandler);
    }, 2000);
}

copy.addEventListener("click", clickHandler);


function instagram(){
    window.location.href="https://www.instagram.com/abhinav__not__found2/";
};
function linkedin(){
    window.location.href="https://www.linkedin.com/in/abhinav-kumar-not-found/";
};
function github(){
    window.location.href="https://github.com/Abhinav-not-found";
};


var header = document.getElementById("btn-container");
var btns=header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
    });
  }


var tl = gsap.timeline();
tl.to("#one",{
    y:-20,
    opacity:0,
    duration:0.5,
    delay:1,
    scale:0.5,
})
tl.from("#two",{
    opacity:0,
    y:20,
    duration:0.5,
    delay:0,
    scale:0.5,
})
tl.to("#two",{
    y:-20,
    opacity:0,
    duration:1,
    delay:1,
})
tl.to("#loader",{
    opacity:0,
    duration:1,
    delay:0,
     onComplete: function() {
        document.getElementById("loader").style.display = "none";
    }
})
tl.from("#logo",{
    y:20,
    opacity:0,
    duration:0.5,
    delay:-1,
})
tl.from(".btn",{
    y:-20,
    opacity:0,
    duration:0.5,
    delay:-0.5,
    stagger:0.2,
})
tl.from("#e1",{
    x:-50,
    opacity:0,
    duration:0.5,
    delay:-0,
    stagger:0.1,
})
tl.from("#e2",{
    x:50,
    opacity:0,
    duration:0.5,
})