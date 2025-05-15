for (let index = 1; index <= 10; index++) {
  // console.log(index)
}

for (let index = 1; index <= 10; index++) {
  // console.log(index)
  for (let j = 1; j <= 10; j++) {
    //    console.log(`i: ${index} j: ${j}`)
    // console.log(index+"*"+j+"="+index*j)
  }
}

for (let index = 0; index <= 10; index++) {
  if (index == 5) {
    // console.log("Detected 5")
    break;
  }
  //  console.log(index)
}

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    // console.log("Detected 5")
    continue;
  }
  // console.log(i)
}

const user = ["sheri", "pablo", "mike", "john"];
// console.log(user.length)
for (let index = 0; index <= user.length; index++) {
  //  console.log(user[index])
}

let i = 0;
while (i <= 10) {
  // console.log(i)
  i++;
}

let ahah = 0;
while (ahah < user.length) {
  // console.log(user[ahah])
  ahah++;
}

let wah = 0;
do {
//   console.log(wah);
  wah++;
} while (wah <= 10);

let wow = 0;
do {
//   console.log(user[wow]);
  wow++;
} while (wow < user.length);



// higer order function
// ["","",""]
// [[],[],[]]
// [{},{},{}]
const arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const element of arr) {
    // console.log(element)
}

for (const key of user) {
    // console.log(key)
    
}

const myobj=[
    {name:"sheri",age:22},
    {name:"pablo",age:23},
    {name:"mike",age:24},
    {name:"john",age:25}
]


for (const key of myobj) {
    // console.log(key.name,key.age)
    // console.log(key.age)
    
}

const map=new Map();
map.set("name","sheri")
// for (const key of map) {
//     console.log(key)
//     console.log(key[0])
   
// }

// for (const [key,value] of map) {
//     console.log(key)

//     console.log(value)
//     console.log(key,value)


// }
const myobject={
    name:"sheri",
    age:26
}
// for (const element of myobject) {
//     // console.log(element)
    
// }

for (const key in myobject) {
    // console.log(key)
    // console.log(myobject[key])

    // console.log(key,myobject[key])
}
for (const key in user) {
    // console.log(key)              
    // console.log(user[key])
    // console.log(key,user[key])
}


// for (const key in map) {
//   console.log(key)
//     console.log(map[key])
// }


const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach( 
  function (item){
    // console.log(item)
  }
);

coding.forEach(
  (item) => {
    // console.log(item)
  }
);
function print(item) {
  // console.log(item)
  // return item 
}
coding.forEach(print)


coding.forEach((item,index,myarr)=>{
  // console.log(item,index,myarr)
})


const myCoding = [
  {
      languageName: "javascript",
      languageFileName: "js"
  },
  {
      languageName: "java",
      languageFileName: "java"
  },
  {
      languageName: "python",
      languageFileName: "py"
  },
]


myCoding.forEach((index)=>{
  // console.log(`Languagename is:- ${index.languageName} and its shorthand Notation is:- ${index.languageFileName}`)
})





const mynumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
mynumber.forEach((index) => {
  // return index
})

const myarr=[]
mynumber.forEach((index) => {
  myarr.push(index)
  // console.log(index*2)
})
// console.log(myarr)

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks=books.filter((bk)=> bk.genre==="Fiction" && bk.edition>2005)


// console.log(userBooks)

// chaining method of loop 
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// myNumers.map((index) => console.log(index))
let chaining=myNumers.map((index)=>index*10).map((index)=>index+1).filter((index)=>index>50)
// console.log(chaining)



let num=[1,2,3]
let myval=num.reduce((acc,curr)=>acc+curr,0)
// console.log(myval)
myval=num.reduce((accumulator,currentValue)=>{
  // console.log(accumulator,currentValue)
  return accumulator+currentValue
},0)


// myval=num.reduce((acc,curr)=>{console.log(`Accumulator value:- ${acc} Current value:- ${curr}`);return acc+curr},0)
// console.log(myval)

// Shopping Cart scenario work same as reduce function

const shoppingCart = [
  {
      itemName: "js course",
      price: 2999
  },
  {
      itemName: "py course",
      price: 999
  },
  {
      itemName: "mobile dev course",
      price: 5999
  },
  {
      itemName: "data science course",
      price: 12999
  },
]

let CartDetails=shoppingCart.reduce((acc,item)=>{
  console.log(`Current ItemName:- ${item.itemName} And Current Price:- ${item.price} `)
  return acc+item.price
},0)

console.log(CartDetails)