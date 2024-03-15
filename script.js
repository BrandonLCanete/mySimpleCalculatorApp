function calculate(){

    const numberOne = document.getElementById("numberOneId").value;
    const operator = document.getElementById("operatorsId").value;
    const numberTwo = document.getElementById("numberTwoId").value;

    const number_One = Number(numberOne);
    const number_Two = Number(numberTwo); 

    const calculation = {
        adding: add(number_One,number_Two),
        subtracting: minus(number_One,number_Two),
        multiplying: times(number_One,number_Two),
        dividing: divide(number_One,number_Two),
    };

    if(operator === "+"){
        alert(calculation.adding);
    }else if(operator === "-"){
        alert(calculation.subtracting);
    }else if(operator === "*"){
        alert(calculation.multiplying);
    }else if(operator === "/"){
        alert(calculation.dividing);
    }else{
        alert("Error Operator Please Try Again!");
    }
}



function add(numberOne,numberTwo){
    return numberOne + numberTwo;
}
function minus(numberOne,numberTwo){
    return numberOne - numberTwo;
}
function times(numberOne,numberTwo){
    return numberOne * numberTwo;
}
function divide(numberOne,numberTwo){
    return numberOne / numberTwo;
}

function clear(){
    document.getElementById("numberOneId").value = null;
    document.getElementById("operatorsId").value = null;
    document.getElementById("numberTwoId").value = null;
}