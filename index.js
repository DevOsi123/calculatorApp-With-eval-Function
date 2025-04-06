//Calculator Program

const display = document.getElementById("display");

function appendToDisplay (input){
    display.value += input;
}


clearDisplay = ()=>{
    display.value = "";
}

calculate = ()=>{
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "error";
    }
}