let a=300
if (true) {
    let a=10
    const b=20
    var c=30
    console.log("inner: ",a)}
// console.log(a)
// console.log(b)

function one(){
    const username="sheri"
    function two(){
        const website="google.com"
        console.log(username)
    }
    two()
    // console.log(website)


}
// one()


if(true){
    let username="sheri"
    function two(){
        const website="google.com"
        console.log(username)
    }
    // console.log(website)
    // two()
}
console.log(addone(5))

function addone(num){
    return num+1
}
// console.log(addtwo(5)) function addtwo cannot be accessed here because it is not hoisted

const addtwo=function(num){
    return num+1
}


