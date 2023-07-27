function calculator (first, second, oprator){
    let result;
    if(oprator === "+"){
        return result = first + second;
    }
    else if(operator === "-"){
        return result = first - second;
    }
    else if(operator === "*"){
        return result = first * second;
    }
    else if(operator === "/"){
        return result = first / second;
    }
    else{
        return "operator does not match";
    }
}

const first = 1;
const second = 2;
const operator = "+" ;

const result = calculator (first,second, operator);
console.log (result);