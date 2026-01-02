
const names= document.getElementById("names");
const items= document.querySelector("#items ul");
let data=[];

const handleClick = ()=>{
  // alert("Hello how are you " + names.value);
 
  const newName= names.value;
  if(newName===""){
    alert("Please enter a name");
    return;
  } 
  data.push(newName);
  console.log(data);

  
  names.value="";
  items.innerHTML="";
  // console.log(names.value);

  data.forEach((item)=>{
  const li= document.createElement("li");
  li.innerText= item;
  items.appendChild(li);
  })
}
let flower="Rose";
let flowers=document.querySelector("#newlist").innerHTML= flower;



// console.log(items.innerText);