
//outer variables

let firstname = document.querySelector("#firstName").value
//console.log(firstname)

let lastname = document.querySelector("#lastName").value
//console.log(lastname)

let email = document.querySelector("#Email").value
//console.log(email)

let password = document.querySelector("#passWord").value
//console.log(password)

let form = document.querySelector("#form")// select the whole form


let errorMsg = document.querySelectorAll('.errorwrap')//select errorwrap classes

let deniedMsg = document.querySelectorAll('.denied')//selects all denied classes

//inner variables
var mailvalidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

//actions on submission

form.addEventListener('submit' , (e)=>{

    //firtname
if(firstname === '' || firstname == null || firstname == "First Name"){
errorMsg[0].style.display = 'flex'; 
deniedMsg[0].style.display = 'flex'; 
}
else{

    errorMsg[0].style.display ="none";
    deniedMsg[0].style.display = 'none'; 
    window.location.reload(true);
}
//lastname
if(lastname === '' || lastname == null){
    errorMsg[1].style.display = 'flex'; 
    deniedMsg[1].style.display = 'flex'; 
}
else{
    errorMsg[1].style.display ="none";
    deniedMsg[1].style.display = 'none'; 
}

//email
 if (!mailvalidation.test(email)){ 
    errorMsg[2].style.display = 'flex'; 
    deniedMsg[2].style.display = 'flex'; 
}
else{
    errorMsg[2].style.display ="none";
    deniedMsg[2].style.display = 'none'; 
}
 
 //password
 if(password === '' || password == null){
    errorMsg[3].style.display = 'flex'; 
    deniedMsg[3].style.display = 'flex'; 
}
else{
    errorMsg[3].style.display ="none";
    deniedMsg[3].style.display = 'none'; 
}
    

//refresh method 

e.preventDefault()//prevent from submitting

})