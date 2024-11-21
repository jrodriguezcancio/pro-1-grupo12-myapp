

let formulario = document.querySelector(".formulario");

formulario.addEventListener('submit', function(e) {
    let email = (emailID.value)
    let password = (contraseñaID.value)

    if(email == "") {
            alert("El campo email no puede estar vacio");
            e.preventDefault(); // Evita que el formulario se envíe
    }
    
    if (password = "") {
        alert("El campo password no puede estar vacio");
        e.preventDefault(); // Evita que el formulario se envíe
    } 

})