// media query for phone 
const phone = window.matchMedia('(max-width: 768px)');

// nav bar on phone 
let navBtn = document.getElementById("navOnPhone");
let navList = document.querySelector('.intro  nav .container ul');
let count = 0;
navBtn.onclick = () => {
    if(count === 0){
        count++;
        navList.style.opacity  = '1';
        navList.style.top  = ' 92px';
    }else{
        count = 0;
        navList.style.opacity  = '0';
        navList.style.top  = '-43px';
        setTimeout(() => {
            navList.style.opacity  = '0';
            navList.style.top  = '119px';
        }, 500);
    }
}



// slider 
let advantagesArr = [
    "<h1>Customer focus makes us stronger</h1>",
    "<h1>We hold ourselves accountable</h1>",
    "<h1>Our people respect one another</h1>",
    "<h1>We use initiative to solve problems</h1>",
    "<h1>We work as one team.</h1>"
];
let advantages = document.getElementById("advantages");
advantages.innerHTML = `<h1>${advantagesArr[0]}</h1>`
// get slider items 
let slider = document.getElementById("slider"); 
let imgs = Array.from(document.querySelectorAll(".slider img"));

// get number of items 
let numberOfImgs = imgs.length

// set current slider
let currentSlider = 1;

// previous and next buttons
let previous = document.getElementById("arrL");
let next = document.getElementById("arrR");

// handel click on next and previous buttons 
next.onclick = nextSlide ;
previous.onclick = preSlide ;

// create bobs based on number of imgs
let bobs = document.getElementById("bobs");
for (let index = 0; index < numberOfImgs; index++) {
    let bob = document.createElement('div');
    bob.setAttribute("id" , `bob#${index+1}`);
    if(index === 0){
        bob.className = 'active';
    }
    bobs.appendChild(bob);
}

// next slider
function nextSlide() {
    if(currentSlider < numberOfImgs){
        currentSlider++;
        // handel advantages
        advantages.innerHTML = advantagesArr[currentSlider - 1];
        imgs[currentSlider-1].className = 'active';
        document.getElementById(`bob#${currentSlider}`).className = 'active';
        for(let i = 0 ; i < numberOfImgs ; i++){
            if(i != currentSlider-1){
                imgs[i].className = '';
                document.getElementById(`bob#${i+1}`).className = '';
            }
        }
    }
}

// previous slider
function preSlide() {
    if(currentSlider <= numberOfImgs && currentSlider > 1){
        currentSlider--;
        // handel advantages
        advantages.innerHTML = advantagesArr[currentSlider - 1];
        imgs[currentSlider-1].className = 'active';
        document.getElementById(`bob#${currentSlider}`).className = 'active';
        for(let i = 0 ; i < numberOfImgs ; i++){
            if(i != currentSlider-1){
                imgs[i].className = '';
                document.getElementById(`bob#${i+1}`).className = '';
            }
        }
    }
}


// bob click
for(let i = 0 ; i < numberOfImgs ; i++){
    document.getElementById(`bob#${i+1}`).onclick = () =>{
        currentSlider = i + 1 ;
        imgs[i].className = 'active';
        document.getElementById(`bob#${currentSlider}`).className = 'active';
        for(let i = 0 ; i < numberOfImgs ; i++){
            if(i != currentSlider-1){
                imgs[i].className = '';
                document.getElementById(`bob#${i+1}`).className = '';
            }
        }
    }
}

// handel preview 
let preview = document.getElementById("preview");
for(let i = 0 ; i < numberOfImgs ; i++){
    document.getElementById(`bob#${i+1}`).onmouseover = () =>{
        document.querySelector("#preview img").src = `${imgs[i].src}`
        document.querySelector("#preview img").style.transition = 'all 0.5s ease-in-out'
        document.querySelector("#preview img").style.width = '70px'
        document.querySelector("#preview img").style.height = '70px'
    }
    document.getElementById(`bob#${i+1}`).onmouseout = () =>{
        document.querySelector("#preview img").style.width = '0px'
        document.querySelector("#preview img").style.height = '0px'
    }
}

// services section 
let servImgs = document.querySelectorAll('.services .container .images div img');
let hard = document.getElementById("hard");
let soft = document.getElementById("soft");


// our partners slide
let partnerNext = document.getElementById("next");
let partnerPre = document.getElementById("pre");
let partnersImg = Array.from(document.querySelectorAll('#partnersImg img'));
let partnersSlide = document.getElementById("partnersSlide");
let partnersArray;
let MAX;
if (phone.matches) {
    MAX = 2;
}else {
    MAX = 5;
}
let count2 = 0;
let numberOfSections = Math.ceil(partnersImg.length / MAX);
for(let i = 0 ; i < numberOfSections ; i++){
    let section = document.createElement('section');
    section.id = `part${i+1}`;
    if(partnersImg.length > MAX ){
        for(let j = 0 ; j < MAX ; j++){
            section.appendChild(partnersImg.shift());
        }
    }else{
        while (partnersImg.length != 0) {
            section.appendChild(partnersImg.shift());
        }
    }
    partnersSlide.appendChild(section);
}

partnersArray = Array.from(document.querySelectorAll("#partnersSlide section"))
partnerNext.onclick = () => {
    if(count2 >= 0 && count2 < numberOfSections -1){
        count2++;
        partnersArray[count2].style.transform = "translateX(0)"
        partnersArray[count2-1].style.transform = "translateX(100%)"

        setTimeout(() => {
            partnersArray[count2-1].style.display = "none";
            partnersArray[count2-1].style.transform = "translateX(-100%)";
            setTimeout(() => {
                partnersArray[count2-1].style.display = "flex";
            }, 500);
        }, 1000);
    }
    else if(count2 == numberOfSections - 1) {
        count2=0;
        partnersArray[count2].style.transform = "translateX(0)"
        partnersArray[numberOfSections - 1].style.transform = "translateX(100%)"
        setTimeout(() => {
            partnersArray[numberOfSections - 1].style.display = "none";
            partnersArray[numberOfSections - 1].style.transform = "translateX(-100%)";
            setTimeout(() => {
                partnersArray[numberOfSections - 1].style.display = "flex";
            }, 500);
        }, 1000);
    }
}

partnerPre.onclick = () => {
    if(count2 > 0 ){
        count2--;
        console.log(partnersArray[count2]);
        partnersArray[count2].style.transform = "translateX(0)"
        partnersArray[count2+1].style.transform = "translateX(-100%)"

        setTimeout(() => {
            partnersArray[count2+1].style.display = "none";
            partnersArray[count2+1].style.transform = "translateX(-100%)";
            setTimeout(() => {
                partnersArray[count2+1].style.display = "flex";
            }, 500);
        }, 1000);
    }
    else if(count2 == 0) {
        count2 = numberOfSections - 1;
        console.log(partnersArray[count2])
        partnersArray[count2].style.transform = "translateX(0)"
        partnersArray[count2 - 1].style.transform = "translateX(100%)"
        setTimeout(() => {
            partnersArray[count2 - 1].style.display = "none";
            partnersArray[count2 - 1].style.transform = "translateX(-100%)";
            setTimeout(() => {
                partnersArray[count2 - 1].style.display = "flex";
            }, 500);
        }, 1000);
    }
}

// handel repeat next slide
setInterval(() => {
    partnerNext.click();
}, 7000);


// contact
let logo = document.querySelector("#logo img");

// to top btn
let toTop = document.getElementById("topBtn");
window.onscroll = () => {
    console.log(window.scrollY)
    if(window.scrollY > 670){
        toTop.style.opacity = '1';
        toTop.style.transform = "translateY(-30px)"
    }else{
        toTop.style.opacity = '0';
        toTop.style.transform = "translateY(0px)"
    }
    if(window.scrollY > 5000){
        logo.style.opacity = '1';
    }
    // nav onscroll
    let nav = document.querySelector(".intro nav");
    let navPointer = document.getElementById("pointer");
    let navLogo = document.getElementById("navLogo");
    let navListItems = Array.from(document.querySelectorAll(".intro  nav .container ul a li"));
    let navLinkList = Array.from(document.querySelectorAll(".intro  nav .container ul a"));
    if(!phone.matches){
        if(window.scrollY >= 550){
        navListItems[0].textContent = 'Soft Services'
        navListItems[1].textContent = 'Hard Services'
        navLinkList[0].href = '#soft';
        navLinkList[1].href = '#hard';
        nav.style.cssText = `background-color: var(--second-color); opacity: 0.75;`
        navLogo.style.display = "none"
        document.querySelector(".intro nav .container").style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        height: 51px;`
        navList.style.width = '98%'
        navPointer.style.display = 'block'
        if(window.scrollY >= 736 && window.scrollY < 2000){
            navPointer.style.left = '12.5%'
        }else if (window.scrollY >= 2000 && window.scrollY < 4400){
            navPointer.style.left = '36.45%'
        }else if(window.scrollY > 4400 && window.scrollY < 4750) {
            navPointer.style.left = '59%'
        }else if(window.scrollY > 4750){
            nav.style.display = 'none'
        }
        }else{
            navListItems[0].textContent = 'About'
            navListItems[1].textContent = 'Services'
            navPointer.style.display = "none"
            nav.style = window.getComputedStyle(nav);
            navLogo.style.display = "block";
            document.querySelector(".intro nav .container").style = window.getComputedStyle(document.querySelector(".intro nav .container"));
            document.querySelector(".intro nav .container ul").style.width = "53%";
        }
    }
}
toTop.onclick = () => {
    window.scrollTo(0,0);
}


