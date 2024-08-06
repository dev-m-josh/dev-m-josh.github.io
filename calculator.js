//asigning each button to a variable
let display = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".btn-clear");
let equals = document.getElementById("equals");
/*
//display the clicked number
function addToDisplay(input) {
    display.value += input;
}


//equals button
equals.addEventListener('click', getAnswer)
//get the answer after equal button is clicked
function getAnswer(){
    try {
        if (display.value === '') {
            display.value = "";
        } else {
            //use eval() to evaluate the calculations
            display.value= eval(display.value);
        }
        //catch any error
    } catch (error) {
        display.value = "Error";
    }

}

//clear the display to add another calculation
clear.addEventListener('click', clearData);
//when the button is clicked it clears the display
function clearData() {
    display.value = "";
}
*/
function addToDisplay() {
    
}

//Method 2
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





































































































































































































































































































































































































































































































