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


