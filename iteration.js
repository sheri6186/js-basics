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
  console.log(item,index,myarr)
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
  console.log(`Languagename is:- ${index.languageName} and its shorthand Notation is:- ${index.languageFileName}`)
})