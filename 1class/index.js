// const selector = document.querySelector('button');

// let course1="React";
// let course2="NodeJS";
// let arr=["React","NodeJS","MongoDB"];
// let arr1=new Array("Math","Science","English");

// // for(let i=0;i<arr1.length;i++){
// //     console.log(`Course ${i+1}: ${arr1[i]}`);
// // }

// //spread operator
// let newArr = [...arr, "ExpressJS"];
// // console.log("Using spread operator:");
// console.log(newArr);
// let [c1, c2, c3] = arr;

// // console.log(`Courses from array: ${c1}, ${c2}, ${c3}`); 

// // console.log(`Courses: ${course1}, ${course2}`);

// selector.addEventListener('click', function() {
//   alert('Button clicked!');
// });


let arr=[3,5,2,8,6,1,4,7];
//using function
function work(x,y){
    console.log(`x is ${x} and y is ${y}`);
}
arr.map(work);
console.log("----");
arr.map((x,y)=>{
  console.log(`x is ${x} and y is ${y}`);
})
console.log("----");
const reversed = arr.reverse();
console.log(reversed);
console.log("----");

let friends = ["Kundan", "Aman", "Ravi", "Rahul"];

// friends.forEach((friend,index)=>{
//   console.log(friend.toUpperCase(),index);
// })
console.log("----");

friends.map((friend,index)=>{
  friend = friend.toUpperCase();

  console.log(friend,index);
})

console.log("----");
 
let fruits = ["Apple", "mango","banana","litchi"];
 const foundFruit = fruits.find((fruit)=>fruit.toLowerCase()==="apple");

 if(foundFruit){
  console.log("Fruit found:",foundFruit);
 }else{
  console.log("Fruit not found");
 }
 let nums=[2,5,3,2,9,4,1,1,8,4];
 let newNums = new Set(nums); //return objects
 console.log(newNums);

//  convert set to array

 let newNumsArray = Array.from(newNums);
 console.log(newNumsArray);

 //convert array to object with as it is
 let numsArray = Array.from(arr);
 console.log(numsArray);

 let numbers = [2,4,3,5,35,21,87,6,54];

//sum using reduce
const sum = numbers.reduce((accumulator,currentValue)=>{
  return accumulator + currentValue;
},0);
console.log(sum);

console.log(nums,friends);
console.log("---------")
console.log(...nums,...friends,"Arpita");

function summation(...num){
  let total =0;
  for(const number of num){
    total += number;
  }
  return total;
}
let su=summation(4,35,3);
console.log(su);

/// deconstruction of array

let vegetables = ["carrot","potato","onion","cabbage"];

let [veg1,veg2,veg3,veg4]=vegetables;
console.log(veg1,veg2,veg3,veg4);

// object deconstruction
let person = {
  name: "Kundan Kumar Singh",
  age: 21,
  city: "Patna"
};

let {name,age,city}=person;
console.log(name,age,city);

//object deconstruction with alias
let {name:fullName,age:personAge,city:personCity}=person;
console.log(fullName,personAge,personCity);
