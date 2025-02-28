function agePhase(age){

    if(age>0 && age<7){
        console.log("kid")
    }else if(age>=7 && age<13){
        console.log("young")
        
    }else if(age>13 && age<18){
        console.log("teen")
    }else if(age>18 && age<30){
        console.log("young")
    }else if(age>=30 && age<50){
        console.log("Middle agee")
    }else if(age>50 && age<130){
        console.log("old")
    }else {
        console.log("not born")
    }
  }
  let zohanage=600;
  agePhase(zohanage)