// slider 
let advantagesArr = ['test1' , 'test2' ,'test3' ,'test4' ,'test5' ,'test6'];
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
        advantages.innerHTML = `<h1>${advantagesArr[currentSlider - 1]}</h1>`
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
        advantages.innerHTML = `<h1>${advantagesArr[currentSlider - 1]}</h1>`
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
