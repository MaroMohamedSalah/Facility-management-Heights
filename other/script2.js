// handel p display with scroll

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");

window.onscroll = () => {
    console.log(window.scrollY);
    if(window.scrollY >= 0 && window.scrollY <= 560){
        p1.style.opacity = "1";
        p1.style.transform = "translateX(0px)";
    }else{
        p1.style.opacity = "0";
        p1.style.transform = "translateX(91px)";
    }
    if(window.scrollY >= 560 && window.scrollY <= 1000){
        p2.style.opacity = "1";
        p2.style.transform = "translateX(0px)";
    }else{
        p2.style.opacity = "0";
        p2.style.transform = "translateX(-91px)";
    }
    if(window.scrollY >= 1000){
        p3.style.opacity = "1";
        p3.style.transform = "translateX(0px)";
    }else{
        p3.style.opacity = "0";
        p3.style.transform = "translateX(91px)";
    }
}