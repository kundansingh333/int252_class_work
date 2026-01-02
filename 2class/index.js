import {users} from "./info.js";


// console.log('This is 2class/index.js');

// let arr = new Array(5,4,"hello",3.4,true);
// console.log(arr);

// let city = ["New York", "Los Angeles", "Chicago"];
// console.log(city);

// let combine = arr.concat(city);
// console.log(combine);
// city.push("Delhi");

// combine = arr.concat(city);
// console.log(combine);


// //every methods
// let num = [8,2,4,4,16,1];
// let a = num.every(x=>x%2==0);
// console.log(a);
// console.log(num.length);


// // push
// let fruits = ["apple","guava","orange"];
// fruits.push("litchi");
// console.log(fruits);
// //pop
// fruits.pop("guava");
// console.log(fruits);
// //unshift
// fruits.unshift("banana");
// console.log(fruits);
// //shift
// fruits.shift();
// console.log(fruits);


// //split methods

// let str1="hello my name is kundan";
// let new_str1=str1.split(" ");
// console.log(new_str1)
// //join
// let joined_str1=new_str1.join("?");
// console.log(joined_str1);

// //filter
// let names=["rohan","mohan","sohan"];
// let new_names = names.filter((name,index)=>
//   name=="mohan"

// );
// console.log(new_names);

// let names1=["rohan","mohan","sohan"];
// let new_names1 = names.filter((name,index)=>{
//   let a=name!="mohan"
//   return a;
// }
// );
// console.log(new_names1);


// // map function

// users.map((user,index)=>{
//   console.log(user);
// })

// /////// filter using objects. 
// let newUser = users.filter((user,index)=>{
//   let a = user.id>3;
//   return a;
// })
// console.log(newUser);

//find methods

let vechicles =["car","bike","motorcycle","truck","cycle"];

let findVechicle = vechicles.find((vechicle,index)=>{
  return vechicle=="cycle";
})
console.log(findVechicle);
vechicles.forEach((element,idx) => {
  console.log(` ${element} is a vechicle and its index is ${idx}`);
});





