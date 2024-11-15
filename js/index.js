let recetas = document.querySelector(".fotorecetas");
const URL = "https://dummyjson.com/recipes";
let recetasplus = " ";

fetch(URL)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    
    let lista = data.recipes
    console.log(lista);
    
    for (let i = 0; i < lista.length; i++) {
        let name = (lista[i].name);
        let image = (lista[i].image);
        let id = (lista[i].id);
        
        
        recetasplus += `
            <article>
                <p>Name: ${name} </p>
                <img src="${image}" alt="${name}" class="imagen">
            </article>
        `
    }
   
    recetas.innerHTML = recetasplus;
})
.catch(function(error) {
    console.log("Error: " + error);
});