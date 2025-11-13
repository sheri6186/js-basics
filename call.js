function user(username){
    this.username=username;
}
function userinfo(username,email,password){
    user.call(this,username);
    this.email=email;
    this.password=password;
    return this;
}
const user1=new userinfo("sheri","sheri@gmail.com","123456");
console.log(user1);
