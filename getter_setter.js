// class user{
//     constructor(email,password){
//         this.email=email;
//         this.password=password;

//     }
//     get email(){
//         return this._email.toUpperCase()
//     }
//     set email(value){
//         this._email=value;
//     }

//     get password(){
//         return this._passowrd.toUpperCase()
//     }
//     set password(value){
//         this._passowrd=value;
//     }
// }
// const chai=new user("h@hc.com","abc");
// console.log(chai.email)
// console.log(chai.password)


// GETTER AND SETTER HAVE RACE CONDITION WHEN THEY SET AND GET METHOD IN STACK WHICH GET STACK OVERRIDES THE SET METHOD


// function getter and setter


// function User(email, password) {
//     this._email = email;
//     this._password = password

//     Object.defineProperty(this, 'email', {
//         get: function () {
//             return this._email.toUpperCase()
//         },
//         set: function (value) {
//             this._email = value
//         }
//     })
//     Object.defineProperty(this, 'password', {
//         get: function () {
//             return this._password.toUpperCase()
//         },
//         set: function (value) {
//             this._password = value
//         }
//     })

// }

// const chai = new User("chai@chai.com", "chai")

// console.log(chai.email);




// object properties 


// const User = {
//     _email: 'h@hc.com',
//     _password: "abc",


//     get email(){
//         return this._email.toUpperCase()
//     },

//     set email(value){
//         this._email = value
//     }
// }

// const tea = Object.create(User)
// console.log(tea.email);
