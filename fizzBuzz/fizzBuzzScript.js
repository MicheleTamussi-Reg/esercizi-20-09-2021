for (var i = 1;i<101; i++){
   if (i%3 == 0 && i%5 == 0){
       console.log("frizzBuzz");
   }
   else if (i%3 == 0){
       console.log("friz");
   }
   else if (i%5 == 0){
       console.log("buzz");
   }
   else console.log(i);
}

