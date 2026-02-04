let word = "QA"
let reverseword=word.split("").reverse().join("");
console.log(reverseword);


// const arr=[1,2,3,4,5,6,7,8,9,10];
// arr.forEach((item)=>{
//     if(item%2===0){
//         console.log(`${item} is even`);
//     }else{
//         console.log(`${item} is odd`);
//     }
// })

// const one=44;
// const two=33;
// if (one>two){
//     console.log(`${one} is greater than ${two}`);
// }else{
//     console.log(`${two} is greater than ${one}`);
// }

// let string=String(123);
// let reverseString=string.split("").reverse().join("");
// if(string===reverseString){
//     console.log(`${string} is a palindrome`);
// }else{
//     console.log(`${string} is not a palindrome`);
// }

// let duplicated ="aabbcc";
// let uniquestring=[];
// duplicated.split("").map((item)=>{
//     if(!uniquestring.includes(item)){
//         uniquestring.push(item);
//     }
//     return uniquestring;
// })
// console.log(uniquestring);

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// accountcity="lahore";
// // console.log(accountcity);
// accountcity="karachi";
// console.log(accountcity);


// let a=10;
// console.log(a)
// let b=20;
// console.log(b)
// let swap;
// swap=a;
// a=b;
// b=swap;
// console.log(a)
// console.log(b)

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);


// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// console.log(newStringOne.trim());

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// // console.log(gameName.split('-'));


// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"}))

// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push()
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

//  // console.log( newArr);


// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);

// const arr = [1, 2, 3, 4, 5];

// // Replace element at index 2 with '99'
// arr.splice(2, 1, 99);
// // deleteCount = 1 means delete 1 element, then insert

// console.log(arr); // [1, 2, 99, 4, 5]


// const arr = [100, 20, 5, 42];
// arr.sort((a, b) => a - b); 

// console.log(arr);


function maxarr(arr){
   let max=arr[0];
   for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
   }
   return max;
}
console.log(maxarr([100, 20, 5, 42]));



function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

// console.log(newNums);


const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

let timeleft=10;

const countdown = (timeRemain) => {
    if (timeRemain > 0) {
        console.log(`you have ${timeRemain} seconds left remaining`);
        setTimeout(() => countdown(timeRemain - 1), 1000);
    } else {
        console.log("starts game");
    }
}

countdown(timeleft);