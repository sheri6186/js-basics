let user={
    user:"chai",
    price:50,
    welcomeMessage:function(){
        console.log(`${this.user} welcome to website`);
    }

}

user.welcomeMessage();
user.user="tea";
user.welcomeMessage();


user.prototype.email=function(){
 let email=`${this.user}@gmail.com`;
 return email;
}

// console.log(user.email());

// prototype is a property of an object that allows you to add new properties and methods to the object
// prototype is a property of an object that allows you to add new properties and methods to the object

// __proto__ is a property of an object that allows you to access the prototype of the object
// __proto__ is a property of an object that allows you to access the prototype of the object

// prototype is a property of an object that allows you to add new properties and methods to the object
// prototype is a property of an object that allows you to add new properties and methods to the object

function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
