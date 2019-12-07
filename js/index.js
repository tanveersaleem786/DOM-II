// Your code goes here


// Mouse over event on navigation.
let navigation = document.querySelectorAll('nav a');

for(let i = 0; i < navigation.length; i++)
{
    navigation[i].addEventListener("mouseover", (event) => {
        
        navigation[i].style.color = "#FEBA4D";
        
    })

    navigation[i].addEventListener("mouseout", (event) => {
        
        navigation[i].style.color = "black";
    })
}

let paragraph = document.querySelectorAll('p');

// keydown event.
window.addEventListener("keydown", (key) => {
    
    if(key.keyCode == "13")
    {
        for(let i = 0; i < paragraph.length; i++)
        { 
            paragraph[i].style.color = "black"; 
        } 
    }

}, false);


// load event.
window.addEventListener("load", () => {

    for(let i = 0; i < paragraph.length; i++)
    { 
        paragraph[i].style.color = "#FEBA4D"; 
    }

});

const contentPick = document.querySelector('.content-pick');
const destination = contentPick.querySelector('.destination');
const signupBtn = destination.querySelector('.btn');

/*
contentPick.addEventListener('click', (event) => {
   alert('Click 1: Content Pick Section Clicked!');
});

destination.addEventListener('click', (event) => {
  alert('Click 2: Destination  Div Clicked!');
  event.stopPropagation();
});
*/
/*
signupBtn.addEventListener('click', (event) => {
  alert('Click 3: Signup Button Clicked!');
  event.stopPropagation();
});
*/

signupBtn.addEventListener('dblclick', (event) => {
  alert('Click 3: Signup Button Double Clicked!');
  event.stopPropagation();
});













