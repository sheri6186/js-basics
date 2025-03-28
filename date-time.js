const mydate = new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toJSON());
// console.log(mydate);

// console.log(mydate.getFullYear());
// console.log(mydate.getMonth());
// console.log(mydate.toISOString())

// const myday = new Date();
// console.log(
//   myday.toLocaleString("default", {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     timeZoneName: "short",
//   })
// );

const full = new Date();
console.log(`today is this year:${full.getFullYear()}
    and day is: ${full.toLocaleString("default", {
      weekday: "long",
    })} and hour is : ${full.toLocaleString("default", {
  hour: "2-digit",
})} and minute is : ${full.toLocaleString("default", {
  minute: "2-digit",
})} and second is : ${full.toLocaleString("default", {
  second: "2-digit",
})} `);
