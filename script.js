var queryStack = "";
var ans = 0;
var digit;
const result = document.getElementById("result")

function isOperator(text){
    if(text == "+" || text == "-" || text == "*" || text == "/" || text == "%" || text == "="){
        return true;
    }
    return false;
}

function getCalculations(num1, num2, operator){
    if(operator == "+"){
        return num1 + num2;
    }
    else if(operator == "-"){
        return num1 - num2;
    }
    else if(operator == "*"){
        return num1 * num2;
    }
    else if(operator == "/"){
        return num1 / num2;
    }
    else if(operator == "%"){
        return num1 % num2;
    }
    return 0;
}

function resetCalculator(){
    queryStack = "";
    ans = 0;
    result.innerText = 0;
    return;
}

function intializeQuerystack(text){
    queryStack += " " + text;
    result.innerText = queryStack;
    return;
}

function intializeResult(){
    result.innerText = ans;
    return;
}

function handleQuery(e){
    const target = e.target;
    const text = target.innerText;
    // console.log(text);
    if(isOperator(text)){
        if(text == "="){
            intializeResult();
            setTimeout(resetCalculator, 5000);
            return;
        }
        intializeQuerystack(text);
        return;
    }
    else if(text == "A/C"){
        resetCalculator();
        return;
    }
    else{
        if(text.length > 1){
            digit = parseFloat(text);
        }
        else{
            digit = parseInt(text);
        }
    }
    var operator = "";
    if(ans == 0){
        ans = digit;
    }
    if(queryStack.length >= 1){
        let len = queryStack.length;
        operator = queryStack[len - 1];
    }
    intializeQuerystack(text);
    if(isOperator(operator)){
        ans = getCalculations(ans, digit, operator);
    }
    return;
}

document.addEventListener('click', handleQuery);