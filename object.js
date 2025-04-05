// singleton
// object.create()
// object litteral
// object constructor
// Symbol declaration
const mySym = Symbol("key");

// Object with a Symbol key
const user = {
  name: "sheri",
  age: 26,
  isLoggedIn: false,
  lastActivity: "2023-10-08",
  login: function () {
    console.log("user logged in");
  },
  hobbies: ["music", "sports", "coding"],
  [mySym]: "key2" // Using symbol as key
};

// Accessing values and types
console.log("user.name:", user.name);                    // string
console.log("user[mySym]:", user[mySym]);                // key2
console.log("typeof user[mySym]:", typeof user[mySym]);  // string
console.log("typeof mySym:", typeof mySym);              // symbol

// Displaying object
console.log("\nFull user object:");
console.log(user);

// Showing symbol keys specifically
console.log("\nSymbol keys in user object:");
console.log(Object.getOwnPropertySymbols(user));
