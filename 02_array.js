const marvel_heroes = ["Thor","Ironman","Hulk","Black Widow","Captain America"];
const Dc_heroes=["superman","batman","wonderwoman","greenlantern","flash"];
const all_heroes = [...marvel_heroes,...Dc_heroes];
// console.log(all_heroes);
const allheroes=marvel_heroes.concat(Dc_heroes);
// console.log(allheroes);
const mynumber=[1,2,3,[4,5,6],[7,8,[9,10]]]
// console.log(mynumber.flat(Infinity))
const score1=100
const score2=200
const score3=300
// console.log([score1,score2,score3])
// console.log(Array.of(score1,score2,score3))
const new_array=Array.isArray(marvel_heroes)
// console.log(new_array)
// console.log(Array.from("sheri"))



const obj={
    name:"sheri",
    age:23,
    country:"USA"
}
// console.log(Array.from(obj)) //The Array.from() method is used to create an array from an iterable object (like a string, Set, or Map) or an array-like object (like arguments or objects with a length property). However, a plain object like the one in your code is not iterable, so Array.from(obj) will throw an error.


console.log(Object.values(obj));
console.log(Object.keys(obj)); 
