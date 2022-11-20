for (let i = 0; i < 100; i++) {
  let result ="";
  if (i % 3 === 0) {
     result = result = "fizz";
  }

   if (i % 5 === 0) {
      result = result + "buzz";
   }
   if (i % 3 !== 0 && i % 5 !== 0) {
      result = i;
   }
   console.log(result);
}

