function add(num1,num2){
    return num1+num2;
}

function subtraction(num1,num2){
    return num1-num2;
}

function multiplication(num1,num2){
    return num1*num2;
}

function division(num1,num2){
    return num1/num2;
}
function calculate(a,b,opretor){
 if(opretor==add){
    return add(a,b);
 }else if(opretor==subtraction){
    return subtraction(a,b);
 }else if(opretor==multiplication){
    return multiplication(a,b);
 }else if(opretor==division){
    return division(a,b);
 }else if(!opretor){
    return "please give funtion operator";
 }else{
    return "something is missing";
 }
}
console.log(calculate(100,50,add));

