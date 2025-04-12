// function addTwoNum(num1,num2){
//     console.log(num1+num2);
// }
function addTwoNum(num1,num2){
    return (num1+num2);
}
// console.log(addTwoNum(2,3));
// addTwoNum();
function userLogin(username){
    if(username){
        return `Welcome ${username}`;
    }else{
        return `Please enter your username`;
    }

}
// console.log(userLogin("john"));
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(2,3,4,5,6,7));
const user = {
    username: "pablo",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sheri",
    price: 399
})

    
