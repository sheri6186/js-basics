const promiseone=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("promise one is resolved")
        
    }, 1000);
    resolve("promise one is resolved")
})
promiseone.then(()=>{
    console.log("promise one is comepleted")
})
const promiseTwo=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("promise two is resolved")
        resolve("promise two is resolved")
    }, 1000);
})
promiseTwo.then(()=>{console.log("promise two is comepleted")})


const promiseThree=new Promise((resolve,reject)=>{
    resolve({username:"sheri",email:"sheri@gmail.com"})

   
})
promiseThree.then((user)=>{
    console.log(user)
})

