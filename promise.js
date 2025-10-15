const promiseone = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise one is resolved")

    }, 1000);
    resolve("promise one is resolved")
})
promiseone.then(() => {
    console.log("promise one is comepleted")
})
const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise two is resolved")
        resolve("promise two is resolved")
    }, 1000);
})
promiseTwo.then(() => { console.log("promise two is comepleted") })


const promiseThree = new Promise((resolve, reject) => {
    resolve({ username: "sheri", email: "sheri@gmail.com" })


})
promiseThree.then((user) => {
    console.log(user)
})


const promiseFour = new Promise((resolve, reject) => {
    let error = false;
    if (!error) {
        resolve({ username: "sheri", password: "123" })

    } else {
        reject("something went wrong")
    }
})
promiseFour
.then((user) => { return user.username })
.then((username) => console.log(username))
.catch((error) => console.log(error))
.finally(() => console.log("the promise is either resolved or rejected"))
