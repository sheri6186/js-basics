const user={
    username:"sheri",
    price:399,
    welcome:function Welcomemessage(){
        console.log(`Welcome ${this.username}`);
        console.log(this)
        // console.log(`Welcome ${username}`);

    }
}
// user.welcome()
// user.username="pablo"
// user.welcome()

// function addtwo(num1,num2){
//     return num1+num2
// }
// console.log(addtwo(2,3))


function addtwo(num1,num2){
    console.log(this)
}
// console.log(addtwo(2,3))

console.log(this); // this refers to the global object in non-strict mode and undefined in strict mode
()=>{}
// const chai=()=>{
//     console.log(this)
// }
// chai()


const implicitfunc=(num1,num2)=>(num1+num2)
console.log(implicitfunc(2,3))


const handleobject=()=>({
    username:"sheri",
    price:399
})
console.log(handleobject())