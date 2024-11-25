// (TERMINADO)

let formulario = document.querySelector(".formulario");

// Login - Email
formulario.addEventListener('submit', function(e) {
    let email = (emailID.value)

    if(email == "") {
            alert("Por favor complete el campo email");
            e.preventDefault(); // Evita que el formulario se envíe
    }
})

// Login - Contraseña 
formulario.addEventListener('submit', function (e) {
    let password = (contraseñaID.value)

    if (password == "") {
        alert("Por favor complete el campo contraseña");
        e.preventDefault(); // Evita que el formulario se envíe
    } 
})
    
