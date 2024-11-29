// (TERMINADO)

let registro = document.querySelector(".registro");

let error1= document.querySelector(".errorM");
let error2= document.querySelector(".errorC");

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
});
    
    