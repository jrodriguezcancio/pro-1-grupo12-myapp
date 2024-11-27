// (SIN TERMINAR)

// FALTA:
    // 1- Que la página muestre el término buscado. Ejemplo: 
        // “Resultados de búsqueda para: término ingresado en el input.”

    // 2- Para el caso de no haber resultados que coincidan con 
        //el término buscado la página debe avisar al usuario que no hay coincidencias.


//Extraigo los valores buscados por el usuario
let qs = location.search 
console.log(qs);

let qsObj = new URLSearchParams(qs);
let buscado = qsObj.get("buscadorNAME");
console.log(buscado);


let URL = `https://dummyjson.com/recipes/search${qs}`;
let recetas = document.querySelector(".fotorecetas");
let resultados = " ";

//Reutilice codigo y solo agregue el if para el buscador
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

                // nombre.toLowerCase() permite que el nombre de la receta se vea en minúscula 

                resultados += `
                <article class="article" >
                    <p class= "titulo ">${nombre} </p>
                    <img src="${imagen}" alt="${nombre}" class="imagen">
                    <a href="./receta.html?/id=${id}" class="masINFO" ><p>More information about the recipe</p></a>
                </article>
                `
            }
            
       }        
        recetas.innerHTML = resultados;
        let articles = document.querySelectorAll(".article");

            // Asignamos eventos de mouseover y mouseout con un ciclo tradicional
        for (let i = 0; i < articles.length; i++) {
            let article = articles[i];

            article.addEventListener('mouseover', function () {
                article.style.backgroundColor = "rgb(200, 245, 230)";
            });

            article.addEventListener('mouseout', function () {
                article.style.backgroundColor = ""; // vuelve al color original
            });
        }
    })

    .catch(function(error) {
        console.log("Error: " + error);
    });
