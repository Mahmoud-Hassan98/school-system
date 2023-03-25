// ---------------------------5- Write a function that, takes an array of integers as input------------------------------
const arr = [3,4,5,,6];
let newarr=[];

arr.forEach( (value)=>{
    newarr.push (Math.pow(2, value))
})
console.log(newarr);


// ------------------------6- Write a function that, takes an array of numbers ------------------
//   const arr2 = [3,4,5,,6];
// let newarr=arr2.map((value)=>{
//      if(  typeof value ==='string' )
//     return "N/A";
//     else if(value%2===0) 
//         return "even";
//         else return "odd";
//             }
//     )
//     console.log(newarr);
 
//  -----------------------------------  7- Write a function named fizzbuzz----------------------------
// function fizzbuzz(arrr){

//     return arrr.map( (value)=>{
//       if (value % 3 === 0 && value % 5 === 0) {
//           return "Fizz Buzz";
//         } else if (value % 3 === 0) {
//           return "Fizz";
//         } else if (value % 5 === 0) {
//           return "Buzz";
//         } else {
//           return value;
//         }
//   })
//  }
//  let arrr= [3,1,1,5,6,9];
//  let output = fizzbuzz(arrr);
//  console.log(output);