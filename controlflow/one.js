const isUserLoggedIn = true;
const temperature = 30;
// if (isUserLoggedIn) {
//   console.log("Welcome back!");
// }


if(temperature<=5){
    console.log("temperature is 5")
}else if(temperature<=10){  
    console.log("temperature is 10")    
}else if(temperature<=15){  
    console.log("temperature is 15")        
}
else if(temperature<=20){   
    console.log("temperature is 20")  
}
else if(temperature<=25){
    console.log("temperature is 25")  
}else if(temperature<=30){
    console.log("temperature is 30")
}else{
    console.log("temperature is not in range")
}


const user=[]
if(user.length==0){
    console.log("array is empty")
}

let obj={}
if(Object.keys(obj).length==0){
    console.log("object is empty")
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
const balance = 2  //if balance is 3, allow to buy course else not  
if (userLoggedIn && debitCard && balance==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


if (balance < 500) console.log("test"),console.log("test2");