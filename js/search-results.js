//extraigo los valores buscados por el usuario
let qs = location.search
let qsObj = new URLSearchParams(qs);
let buscado = qsObj.get("buscadorNAME");

let URL = `https://dummyjson.com/recipes/search${qs}`;
let recetas = document.querySelector(".fotorecetas");
let resultados = " ";

//reutilice codigo y solo agregue el if para el buscador
fetch(URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        let listaRECETAS = data.recipes
        for (let i = 0; i < listaRECETAS.length; i++) {
            let nombre = (listaRECETAS[i].name);
            let imagen = (listaRECETAS[i].image);
            let id = (listaRECETAS[i].id)
            if (buscado && nombre.toLowerCase().includes(buscado.toLowerCase())) {
                resultados += `
                <article class="article" >
                    <p class= "titulo ">${nombre} </p>
                    <img src="${imagen}" alt="${nombre}" class="imagen">
                    <a href="./receta.html?/${id}" class="masINFO" ><p>More information about the recipe</p></a>
                </article>
            `
            }
            
       }        
        recetas.innerHTML = resultados;
    })

    .catch(function(error) {
        console.log("Error: " + error);
    });
