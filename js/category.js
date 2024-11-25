// (SN TERMINAR)

// FALTA:
    // 1- Poner un tiulo, h1, que diga el nombre de la caegoria seleccionada
        // y abajo todas las recetas

// Extraemos los valores 
let qs = location.search
let qsObj = new URLSearchParams(qs);
let paramCategoria = qsObj.get('tag');

const URL = `https://dummyjson.com/recipes/tag/${paramCategoria}` // Get recipe by a tag
let recetas = document.querySelector(".fotorecetas");
let recetasplus = " ";

let titulo = document.querySelectorAll("h1")


fetch(URL)
.then(function(response) {
    return response.json();
})

.then(function(data) {
    console.log(data);
    
    let recetasCATEG = data.recipes
    console.log(recetasCATEG);

    for (let i = 0; i < recetasCATEG.length; i++) {
        let nombre = (recetasCATEG[i].name);
        let imagen = (recetasCATEG[i].image);
        let dificultad = (recetasCATEG[i].difficulty)
        let id = (recetasCATEG[i].id)

            recetasplus += `
                <article class="article" >
                    <p class= "titulo ">${nombre} </p>
                    <img src="${imagen}" alt="${nombre}" class="imagen">
                    <p class= "nivel" >${dificultad} </p>
                    <a href="./receta.html?/${id}" class="masINFO" ><p>More information about the recipe</p></a>
                </article>
            `        
    }

    recetas.innerHTML = recetasplus;

})

.catch(function(error) {
    console.log("Error: " + error);
});

