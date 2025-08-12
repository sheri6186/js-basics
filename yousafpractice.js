// write a function which takes an array of numbers and returns the sum of the squares of the numbers


// [2,3]  return 13

function sumofarr(sh){
    let sum=0;
    for(let i=0;i<sh.length;i++){
        sum=sum+(sh[i]*sh[i])
    }
    return sum
}

let squares=[2,3]
console.log(sumofarr(squares))