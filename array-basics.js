// arrray
const myarr = [1, 2, 3, 4, 5];
// console.log(myarr);
// console.log(myarr.length);
// console.log(myarr[0]);
// myarr.push(6)// add to the end
// myarr.pop()// remove from the end
// console.log(myarr);

// myarr.unshift(9)// add to the beginning
// console.log(myarr);
// myarr.shift()// remove from the beginning
// console.log(myarr);

const arr = new Array(1, 2, 3, 4, 5);
// console.log(typeof arr);
// console.log(typeof myarr);
// const myn=arr.join("");
// console.log(myn);
// console.log(typeof myn);

console.log("A", arr); // Logs the original array: [1, 2, 3, 4, 5]

// Using slice (does not modify the original array)
console.log(arr.slice(1, 3)); // Logs [2, 3] (elements from index 1 to 2)

// Logs the array after slice (unchanged): [1, 2, 3, 4, 5]
console.log("B", arr);

// Using splice (modifies the original array)
console.log(arr.splice(1, 3)); // Removes 3 elements starting from index 1: [2, 3, 4]

// Logs the array after splice: [1, 5]
console.log("C", arr);

// Logs the final state of the array: [1, 5]
console.log(arr);
