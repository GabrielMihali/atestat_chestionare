let imagine = document.getElementById("imagine");
let text = document.getElementById("text");
let button = document.getElementById("button");

setInterval(optimizare, 100);

function optimizare(){
    imagine.style.width = window.innerWidth + "px";
    imagine.style.height = window.innerHeight + "px";

    if (window.innerWidth <= 946){
        text.style.width = window.innerWidth + "px";
        button.style.top = "460px";
    }
    else{
        button.style.top = "343px";
        text.style.width = "946px";
    }

    if (window.innerWidth - 1024 > 0){
        text.style.left = window.innerWidth - 1024 + "px";
    }
    else{
        text.style.left = "0px";
    }

    if (window.innerWidth - 588 >= 60){
        button.style.left = window.innerWidth - 588 + "px";
    }
    else{
        button.style.left = "60px";
    }
}