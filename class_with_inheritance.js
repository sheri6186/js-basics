// class user{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }
//     encyrptPassword(){
//         return `${this.password}abc`;
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`;

//     }
// }
// const user1=new user("sheri","sheri@gmail.com","123456");
// console.log(user1.encyrptPassword());
// console.log(user1.changeUsername());
// console.log(user1);

// behind the scene of classes is functions and constructor functions
// function user(username,email,password){
//     this.username=username;
//     this.email=email;
//     this.password=password;    
// }

// const user1=new user("sheri","sheri@gmail.com","123456");

// user1.encyrptPassword=function(){
//     return `${this.password}abc`;
// }
// user1.changeUsername=function(){
//     return `${this.username.toUpperCase()}`;
// }
// console.log(user1.encyrptPassword());
// console.log(user1.changeUsername());
// console.log(user1);

// inheritence
class user{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`;
    }
}
class teacher extends user{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai=new teacher("chai","chai@gmail.com","122");
// chai.addCourse();
// chai.logMe();
// const tea=new user("tea")
// tea.logMe();
// console.log(tea instanceof user)
const iphone= new teacher("iphone","i@gmail.com")
// iphone.createId(); // static method is called on the class itself not on the instance
iphone.logMe();


