// Your code goes here

// Mouse over and mouse out event on navigation. [Event 1 & 2]
let navigation = document.querySelectorAll('nav a');

for(let i = 0; i < navigation.length; i++)
{
    navigation[i].addEventListener("mouseover", (event) => {
        
        navigation[i].style.color = "#FEBA4D";
        gsap.from(navigation[i], {duration:2, rotate:360});   
        
    })

    navigation[i].addEventListener("mouseout", (event) => {
        
        navigation[i].style.color = "black";
    })

    navigation[i].addEventListener("click", (event) => {      
      event.preventDefault();
   })

    
}


// scroll event. [Event 3]
const adventureImg = document.querySelector(".img-content img:first-child");
const funImg = document.querySelector(".inverse-content img");
const allImg = document.querySelectorAll('img');

 
window.addEventListener("scroll", function() {
    gsap.to(funImg, {duration:2, rotate:window.pageYOffset+"deg"});
    gsap.to(adventureImg, {duration:2, rotate:window.pageYOffset+"deg"});
    //funImg.style.transform = "rotate("+window.pageYOffset+"deg)";
    //adventureImg.style.transform = "rotate(-"+window.pageYOffset+"deg)";

    for(let i = 0; i < allImg.length; i++)
    { 
        allImg[i].style.filter = "drop-shadow(0 0 0.75rem crimson)";
    }
});


// keydown event. [Event 4]
let paragraph = document.querySelectorAll('p');
window.addEventListener("keydown", (key) => {
    
    if(key.keyCode == "13")
    {
        for(let i = 0; i < paragraph.length; i++)
        { 
            paragraph[i].style.color = "black"; 
        }
        
        for(let i = 0; i < allImg.length; i++)
        { 
            allImg[i].style.filter = "none";
        }
    }

}, false);


// Load Event. [Event 5]
window.addEventListener("load", () => {

    // headerImg.style.filter = "drop-shadow(0 0 0.75rem crimson)";

    for(let i = 0; i < paragraph.length; i++)
    { 
        paragraph[i].style.color = "#FEBA4D"; 
    }

    for(let i = 0; i < allImg.length; i++)
    { 
        allImg[i].style.filter = "hue-rotate(3.142rad)";
    }
});


// Click Event and Stop Propagation [Event 6]
const contentPick = document.querySelector('.content-pick');
const destination = contentPick.querySelector('.destination');
const signupBtn = destination.querySelector('.btn');


contentPick.addEventListener('click', (event) => {
   alert('Click 1: Content Pick Section Clicked!');   
   contentPick.style.backgroundColor = "yellow";
});

destination.addEventListener('click', (event) => {
  alert('Click 2: Destination  Div Clicked!');
  destination.style.backgroundColor = "blue";
  event.stopPropagation();
});

signupBtn.addEventListener('click', (event) => {
  alert('Click 3: Signup Button Clicked!');
  signupBtn.style.backgroundColor = "gray";
  event.stopPropagation();
});


// Double Click Event [Event 7]
const logoImg = document.querySelector('.logo-heading');
logoImg.addEventListener('dblclick', (event) => { 
  logoImg.classList.toggle("glow");
  gsap.from(".nav-link", {duration:2, opacity:0, y:150, stagger:0.25, scale:0.5});   
});

// Mouse Move and Mouse Leave Event [Event 8 & 9]
const introTitle = document.querySelector('.intro h2');
const introP = document.querySelector('.intro p');

introTitle.addEventListener('mousemove', (event) => {  
  introP.style.transform = "scale(1.2)";
  introP.style.transition = "all 0.3s";
});

introTitle.addEventListener('mouseleave', (event) => {  
  introP.style.transform = "scale(1.0)";
  introP.style.transition = "all 0.3s";
});


// Cut Event [Event 10]
const source = document.querySelector('div.source');
source.addEventListener('cut', (event) => {
    const selection = document.getSelection();    
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());    
    selection.deleteFromDocument();
    event.preventDefault();
});














