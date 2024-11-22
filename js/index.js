// COSAS PARA PREGUNTAR 

// 1 - Como hacer lo de "cargar más", utilizo longitud en el for y no funciona
// 2 - Como sacar el "?/" del qs en receta.js y category.js, preguntar si esta bien escrito eso o deberia estar escrito al reves (/?)
// 3 - Como hacer el titulo de la categoria en category.js
// 4 - Preguntar que hay que poner en el register.js, ya que utilizamos el required en el html para avisar que los campos estan sin completar 
// 5 - Como hacer lo de search-results
// 6 - Preguntar si esta bien modificar los articlos desde el js y no desde el css


let recetas = document.querySelector(".fotorecetas");
let URL = "https://dummyjson.com/recipes?limit=10&skip=10&select=name,image";
let recetasplus = " ";


fetch(URL)
.then(function(response) {
    return response.json();
})

.then(function(data) {

    let listaRECETAS = data.recipes
    console.log(listaRECETAS);
    
/*function recetasMAS() {
    for (let i = 0; i < longitud; i++) {
        let nombre = (listaRECETAS[i].name);
        let imagen = (listaRECETAS[i].image);
        let dificultad = (listaRECETAS[i].difficulty)
        let id = (listaRECETAS[i].id)
        
        recetasplus += `
            <article class="article" >
                <p class= "titulo ">${nombre} </p>
                <img src="${imagen}" alt="${nombre}" class="imagen">
                <p class= "nivel" >${dificultad} </p>
                <a href="./receta.html?/${id}" class="masINFO" ><p>More information about de recipe</p></a>
            </article>
            
        `
    }
    recetas.innerHTML = recetasplus;
    longitud += 10
}*/
    
// BOTON DE CARGAR MÁS (NO FUNCIONA) 
//hay que lograr que entre al for de arriba cada vez que se haga click en cargar más

    let cargarMas = document.querySelector(".cargar")
    
    cargarMas.addEventListener('click', recetasMAS);
    recetasMAS();

})

.catch(function(error) {
    console.log("Error: " + error);
});


// FORMULARIO - BUSCADOR 


// Probando submit para el buscador (FUNCIONA)
let buscador = document.querySelector(".buscador");

buscador.addEventListener('submit', function(e) {
    let variableID = (buscadorID.value)

    if(variableID == "") {
            alert("El campo no puede estar vacio");
            e.preventDefault(); // Evita que el formulario se envíe
    }
    else if (variableID.length < 3) {
            alert("El campo debe tener mínimo 3 caracteres");
            e.preventDefault(); // Evita que el formulario se envíe
    }
})