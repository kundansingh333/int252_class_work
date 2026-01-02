console.log("try");

let data=[
  {
    name:"Kundan",
    age:56,
    city:"Delhi",
    skills:["HTML","CSS","JS"]
  },
  {
    name:"Rohan",
    age:25,
    city:"Mumbai",
    skills:["Python","Django","Flask"]
  }
]
let results= document.querySelector("#tab");
console.log(data);
// data.map((item,key)=>{
//   return `
//   <tr>
//     <td>${item.name}</td>
//     <td>${item.age}</td>
//     <td>${item.city}</td>

//   </tr> 
//   `
// })
results.innerHTML= data.map((item,key)=>{
  return `
  <tr>
    <td>${item.name}</td>
    <td>${item.age}</td>
    <td>${item.city}</td>

  </tr> 
  `
}).join("");  



