//asigning each button to a variable
let display = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".btn-clear");
let equals = document.getElementById("equals");

function addToDisplay() {
    
}


//display the clicked numbers and operators
buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        display.value += e.target.dataset.num;
    })
})

//Evaluating the calculations
equals.addEventListener('click', function (e) {
    //use trycatch to ctach any errors that may occur
    try {
        if (display.value === "") {
            display.value = "";
        } else {
            console.log(display.value)
            let answer = eval(display.value);
            
            display.value = answer;
        }
        
    } catch (error) {
        console.log(error)
        display.value = "Error"
    }
})

//clear display after calculations
clear.addEventListener("click", function () {
    display.value = '';
})





































































































































































































































































































































































































































































































