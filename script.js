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
console.log(servImgs);