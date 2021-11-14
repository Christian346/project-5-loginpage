
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
let inputs = document.querySelectorAll('.input')// selects all inputs


//obj
let expresiones = {
    nombre: /^[a-zA-Z ]{1,30}$/,    // will except a name with at least two characters\s   
    segundonom: /^[A-Za-z0-9\'\s\.\,]+$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password:/^[a-zA-Z0-9]{8,20}$/
    
    //only digits:    /^\d{2,20}$/
    
    /*Regex for not empty and not whitespace
    /^$|\s+/
    if this matched theres whitespace
    */
    
}
//obj2
let validated = {
    nombre: false,
    segundonom: false,
    email:false,
    password:false
    
}

//actions on submission


const validar= (e) =>{
    //console.log(e.target.name)
  
    switch (e.target.name){

        case "Firstname":
            if(!e.target.value == null || !e.target.value == ""){
                
                errorMsg[0].style.display ="none";
                deniedMsg[0].style.display = 'none';   
                document.getElementById('firstName').classList.remove('inputs-error')//step 2 
                //could add another green class if you were to enter correct 
                //switch campo to true
                validated.nombre = true;
                }
                else{
                 
                    errorMsg[0].style.display = 'flex'; 
                    deniedMsg[0].style.display = 'flex'; 
                    
                    document.getElementById('firstName').classList.add('inputs-error')//step 1 

                    //switch campo to true
                    validated.nombre= false;
                }
       
        break;

        case "Lastname":
            if(expresiones.segundonom.test(e.target.value)){
                
                errorMsg[1].style.display ="none";
                deniedMsg[1].style.display = 'none'; 
                
                document.getElementById('lastName').classList.remove('inputs-error')//step 2  
              
                //switch campo to true
                 validated.segundonom= true;
                }
                else{
                 
                    errorMsg[1].style.display = 'flex'; 
                    deniedMsg[1].style.display = 'flex'; 
                    
                    document.getElementById('lastName').classList.add('inputs-error')//step 1 
                    validated.segundonom= false;
                }
        
        break;

        case "Email":
            if(expresiones.email.test(e.target.value)){
                
                errorMsg[2].style.display ="none";
                deniedMsg[2].style.display = 'none'; 
                
                document.getElementById('Email').classList.remove('inputs-error')//step 2  
                validated.email= true;
                }

                else{
                 
                    errorMsg[2].style.display = 'flex'; 
                    deniedMsg[2].style.display = 'flex'; 
                    
                    document.getElementById('Email').classList.add('inputs-error')//step 1 
                    validated.email= false;
                }
        
        break;

        case "Password":
            if(expresiones.password.test(e.target.value)){
                
                errorMsg[3].style.display ="none";
                deniedMsg[3].style.display = 'none'; 
                
                document.getElementById('passWord').classList.remove('inputs-error')//step 2  
                validated.password= true;
                }
                else{
                 
                    errorMsg[3].style.display = 'flex'; 
                    deniedMsg[3].style.display = 'flex'; 
                    
                    document.getElementById('passWord').classList.add('inputs-error')//step 1 
                    validated.password = false;
                }
        break;
    }

}


inputs.forEach((input)=>{

    input.addEventListener('keyup', validar);//cuando sueltes la letra un codigo se ejecuta
    input.addEventListener('blur', validar);//cuando sueltes la letra un codigo se ejecuta

});//loop through each input element on dom


//addevent listener for submit with button
form.addEventListener('submit' , (e)=>{

 if(!validated.nombre){
    errorMsg[0].style.display = 'flex'; 
    deniedMsg[0].style.display = 'flex'; 
    document.getElementById('firstName').classList.add('inputs-error')//step 1 

 } 
 if(!validated.segundonom){
    errorMsg[1].style.display = 'flex'; 
    deniedMsg[1].style.display = 'flex'; 
    
    document.getElementById('lastName').classList.add('inputs-error')//step 1 

 } if( !validated.email){
    errorMsg[2].style.display = 'flex'; 
    deniedMsg[2].style.display = 'flex'; 
    
    document.getElementById('Email').classList.add('inputs-error')//step 1 

 }
 if(!validated.password) {
    errorMsg[3].style.display = 'flex'; 
    deniedMsg[3].style.display = 'flex'; 
    document.getElementById('passWord').classList.add('inputs-error')//step 1  
 }
//

if(validated.nombre && validated.segundonom && validated.email && validated.password){
    form.reset(); // will reset all campos if everything is alright
    alert("Login was succesful!")
}
e.preventDefault();
})
 
