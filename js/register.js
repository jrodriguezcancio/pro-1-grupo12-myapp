// (TERMINADO)

let registro = document.querySelector(".registro");

let error1= document.querySelector(".errorM");
let error2= document.querySelector(".errorC");
let error3= document.querySelector(".errorCheck");
registro.addEventListener("submit",function(e) {

    let isvalid = true;
    let email = (emailID.value)

    if(email === ""){
        error1.style.display= "block"
        isvalid=false;
    }
    else{
        error1.style.display="none";
    }

    let password = (contraseñaID.value)

    if(password === ""){
        error2.style.display= "block"
        isvalid=false;
    }
    else{
        error2.style.display="none";
    }
    if (!isvalid) {
        e.preventDefault();
    }

    
let checkbox = (acepto.checked)

    if(!checkbox){
        error3.style.display= "block"
        isvalid=false;
    }
    else{
        error3.style.display="none";
    }
    if (!isvalid) {
        e.preventDefault();
    }
});
    