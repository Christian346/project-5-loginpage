
//outer variables

let firstname = document.querySelector("#firstName").value
//console.log(firstname)

let lastname = document.querySelector("#lastName").value
//console.log(lastname)

let email = document.querySelector("#Email").value
//console.log(email)

let password = document.querySelector("#passWord").value
//console.log(password)

let form = document.querySelector(".form")// select the whole form

//inner variables
var mailvalidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

//actions on submission

form.addEventListener('submit' , (e)=>{

if(firstname === '' || firstname == null ){
console.log(" First name cannot be empty") 
}

if(lastname === '' || lastname == null){
    console.log(" Last name cannot be empty") 
 }

 if (!mailvalidation.test(email))
    { 
        console.log("this is not a valid email")
    } 
 if(password === '' || password == null){
     console.log("Password cannot be empty")
 }   
       

e.preventDefault()
})