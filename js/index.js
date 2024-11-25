// (TERMINADO)

let recetas = document.querySelector(".fotorecetas");
let cargarMas = document.querySelector(".cargar");
let URL = "https://dummyjson.com/recipes?limit=10&skip="; // URL limit and skip recipes
let recetasplus = " ";
let skip = 0;

// El skip en 0 sirve para que la URL no se saltee las primeras 10 recetas

function obtenerRecetas(skip){
    fetch(URL + skip)
    .then(function(response) {
        return response.json();
    })

    .then(function(data) {
        let listaRECETAS = data.recipes

        for (let i = 0; i < listaRECETAS.length; i++) {
            let nombre = (listaRECETAS[i].name);
            let imagen = (listaRECETAS[i].image);
            let dificultad = (listaRECETAS[i].difficulty)
            let id = (listaRECETAS[i].id)

            recetasplus += `
                <article class="article" >
                    <p class= "titulo ">${nombre} </p>
                    <img src="${imagen}" alt="${nombre}" class="imagen">
                    <p class= "nivel" >${dificultad} </p>
                    <a href="./receta.html?/id=${id}"  class="masINFO" ><p>More information about the recipe</p></a>
                </article>
            `
        }

        recetas.innerHTML = recetasplus;

        if (listaRECETAS.length < 10) {
            cargarMas.style.display = 'none';
            // Este if nos va a permitir que solo se impriman por pantalla 
            // hasta 10 recetas
        }

    })
}

obtenerRecetas(skip)

// Botón de cargar más 
cargarMas.addEventListener('click', function() {
    skip += 10
    // Agregarle 10 a la variable skip nos permite que la URL saltee las primeras 10 recetas
    // si le agregamos 10 más se saltea las primeras 20 y asi sucesivamente  
    obtenerRecetas(skip)
})

