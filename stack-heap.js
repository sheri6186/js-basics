// Stack(primitive copy) Heap(non-primitive reference) 
// stack (shallow copy) vs heap (deep copy)
// A shallow copy of an object is a copy whose properties share the same references
let myyoutubename="asrarulhaq";
let anotheryoutubechannel=myyoutubename;
anotheryoutubechannel="zohan";
console.log(myyoutubename); 
console.log(anotheryoutubechannel);

// stack is used to store primitive values, and each variable holds its own copy of the value
// heap is used to store non-primitive values, and variables store a reference to the value
// when we assign the value of one variable to another, the value is copied to the new variable
// when we assign the value of one non-primitive variable to another, the reference is copied to the new variable
// when we change the value of the new variable, the reference is updated in the heap
// when we change the value of the original variable, the reference is not updated in the heap


// Heap(non-primitive)
// A deep copy of an object is a copy whose properties do not share the same references 
let userone={
    email:"sheri.6186@gmail.com",
    password:"123456"
}
let usertwo=userone;
usertwo.email="sheri@hydrasoft.io"
console.log(userone.email)
console.log(usertwo.email)
