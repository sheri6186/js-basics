// const user={
//     username:"sheri",
//     loginCount:8,
//     signedIn:true,

//     getUserDetails:function(){
//         console.log("Got user details from database");
//         console.log(`Username: ${this.username} and login count: ${this.loginCount}`);
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());

function user(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.getUserDetails=function(){
         console.log(`Username: ${this.username} and login count: ${this.loginCount}`);
    }
    return this;
}

const userOne=new user("sheri",12,true);
const userTwo=new user("pablo",10,false);
console.log(userOne.username);
userOne.getUserDetails()
console.log(userTwo.username);
userTwo.getUserDetails()
