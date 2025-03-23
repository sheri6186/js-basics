const name = "John";
const age = 30;
// string interpoloation
console.log(`hello my name is ${name} and age is ${age}`);

const gameName = new String("pubg");
console.log(gameName.charAt(0));
console.log(gameName.toUpperCase());
console.log(gameName.includes("u"));
console.log(gameName.includes("hero"));
const newGame = gameName.split("");
console.log(newGame);
console.log(gameName);
console.log(newGame.indexOf("u"));
console.log(gameName.substring(0, 2));

const url = "https://www.google.com";
console.log(url.replace("google", "facebook"));

const userName = "   john    ";
console.log(userName.trim());
console.log(userName);
console.log(`username is ${userName.slice(3,8)}`);

const number=new String(10);
console.log(number.toString()); 
console.log(typeof number);
console.log(typeof age)
