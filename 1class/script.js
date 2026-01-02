
let name=document.getElementById("name");
let email=document.getElementById("email");
let pass=document.getElementById("password");

let submit=document.getElementById("submit");

submit.addEventListener("click",(e)=>{
    e.preventDefault(); 
    console.log("Form submitted:", {
        name: name.value,
        email: email.value,
        password: pass.value
    }); 
    name.value="";
    email.value="";
    pass.value="";
})