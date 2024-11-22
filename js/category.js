
let paramCategoria = location.search

let recetas = document.querySelector(".fotorecetas");
const URL = "https://dummyjson.com/recipes";
let recetasplus = " ";


fetch(URL)
.then(function(response) {
    return response.json();
})

.then(function(data) {

    let listaRECETAS = data.recipes
    console.log(listaRECETAS);

    for (let i = 0; i < listaRECETAS.length; i++) {
        let nombre = (listaRECETAS[i].name);
        let imagen = (listaRECETAS[i].image);
        let dificultad = (listaRECETAS[i].difficulty)
        let id = (listaRECETAS[i].id)
        let tags = (listaRECETAS[i].tags)

        // Utilizamos este for para poder filtrar las recetas que contienen la categoria seleccionada
        for (let p = 0; p < tags.length; p++) {
            const categoria = tags[p];
            
            if(paramCategoria == ("?/"+categoria)) {
                recetasplus += `
                    <article class="article" >
                        <p class= "titulo ">${nombre} </p>
                        <img src="${imagen}" alt="${nombre}" class="imagen">
                        <p class= "nivel" >${dificultad} </p>
                        <a href="./receta.html?/${id}" class="masINFO" ><p>More information about the recipe</p></a>
                    </article>
                `
            }
        }
    }

    recetas.innerHTML = recetasplus;

})

.catch(function(error) {
    console.log("Error: " + error);
});



