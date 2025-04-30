// immediately invoke the function
(function chai(){
    console.log("DB connected")
})();

((name)=>{
    console.log(`Welcome ${name}`)
})("sheri")
// IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined.