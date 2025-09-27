const promiseone=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("promise one is resolved")
        
    }, 1000);
    resolve()
})
promiseone.then(()=>{
    console.log("promise one is comepleted")
})