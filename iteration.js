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
  console.log(user[wow]);
  wow++;
} while (wow < user.length);
