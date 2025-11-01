// fetch api is used to fetch data from the server and this is promise which could be resolved or rejected
try{
    const response=await fetch("https://api.github.com/users/hiteshchoudhary");
    const data=await response.json();
    console.log(data);
}catch(error){
    console.log(error);
}finally{
    console.log("the promise is either resolved or rejected");
}
