// (SIN TERMINAR)

// FALTA:
    // 1-  abajo todas las recetas

// Extraemos los valores 
let qs = location.search
let qsObj = new URLSearchParams(qs);
let paramCategoria = qsObj.get('tag');


const URL = `https://dummyjson.com/recipes/tag/${paramCategoria}` // Get recipe by a tag
let recetas = document.querySelector(".fotorecetas");
let recetasplus = " ";
let tit = " ";


let titucat = document.querySelector(".titulocat");
tit += `Categoria seleccionada: "${paramCategoria}"`; 
console.log(tit);
titucat.innerText = tit;

//probando subit para el buscador (FUNCIONA)
let formularioBusqueda = document.querySelector(".buscador");
let buscador = document.querySelector(".formu");

formularioBusqueda.addEventListener("submit", function(event) {
    let buscado = buscador.value;
    
    if (buscado.length > 0 && buscado.length < 3){
        alert("Busque algo de mínimo 3 caracteres");
        event.preventDefault(); // Evita que el formulario se envíe
    } else if (buscado === ""){
        alert("No deje el campo vacío");
        event.preventDefault(); // Evita que el formulario se envíe
    }
});



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
                    <a href="./receta.html?id=${id}" class="masINFO" ><p>More information about the recipe</p></a>
                </article>
            `       
    }
    recetas.innerHTML = recetasplus;
    let articles = document.querySelectorAll(".article");
    let img = document.querySelectorAll(".imagen");

    // Asignamos eventos de mouseover y mouseout con un ciclo tradicional
    for (let i = 0; i < articles.length; i++) {
        let article = articles[i];
        let imagen = img[i]

        article.addEventListener('mouseover', function () {
            article.style.backgroundColor = "rgb(200, 245, 230)";
            article.style.border = "2px solid #57b4ad";
        });

        article.addEventListener('mouseout', function () {
            article.style.backgroundColor = ""; // vuelve al color original
            article.style.border = "";
        });
    }
})

.catch(function(error) {
    console.log("Error: " + error);
});

