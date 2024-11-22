let recetas = document.querySelector(".fotorecetas");
let cargarMas = document.querySelector(".cargar");
let URL = "https://dummyjson.com/recipes?limit=10&skip=";
let recetasplus = " ";
let skip = 0;

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
                    <a href="./receta.html?/${id}" class="masINFO" ><p>More information about the recipe</p></a>
                </article>
            `
        }
        recetas.innerHTML = recetasplus;
        if (listaRECETAS.length < 10) {
            cargarMas.style.display = 'none';
        }
    })
}

obtenerRecetas(skip)

cargarMas.addEventListener('click', function() {
    skip += 10
    obtenerRecetas(skip)
})

