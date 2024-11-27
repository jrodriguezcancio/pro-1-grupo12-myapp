// (SIN TERMINAR)

// FALTA:
    // 1- Que la página muestre el término buscado. Ejemplo: 
        // “Resultados de búsqueda para: término ingresado en el input.”

    // 2- Para el caso de no haber resultados que coincidan con 
        //el término buscado la página debe avisar al usuario que no hay coincidencias.

let qs = location.search;
console.log(qs);

let qsObj = new URLSearchParams(qs);
let buscado = qsObj.get("buscadorNAME");  
console.log(buscado);

let URL = `https://dummyjson.com/recipes/search?q=${buscado}`;
let recetas = document.querySelector(".fotorecetas");
let resultados = " ";

if (buscado) {
    if (buscado.length >= 3) {
        fetch(URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            let listaRECETAS = data.recipes;

            for (let i = 0; i < listaRECETAS.length; i++) {
                let nombre = listaRECETAS[i].name;
                let imagen = listaRECETAS[i].image;
                let id = listaRECETAS[i].id;

                resultados += `
                <article class="article">
                    <p class="titulo">${nombre}</p>
                    <img src="${imagen}" alt="${nombre}" class="imagen">
                    <a href="./receta.html?/id=${id}" class="masINFO"><p>More information about the recipe</p></a>
                </article>
                `;
            }

            
            recetas.innerHTML = resultados;

            // Asignamos eventos de mouseover y mouseout a los artículos
            let articles = document.querySelectorAll(".article");
            for (let i = 0; i < articles.length; i++) {
                let article = articles[i];

                article.addEventListener('mouseover', function () {
                    article.style.backgroundColor = "rgb(200, 245, 230)";
                });

                article.addEventListener('mouseout', function () {
                    article.style.backgroundColor = "";  // Vuelve al color original
                });
            }
        })
        .catch(function(error) {
            console.log("Error: " + error);
        });
    } else {
        recetas.innerHTML = "<p>Por favor, busque algo con más de 3 caracteres.</p>";
    }
} else {
    
    recetas.innerHTML = "<p>Por favor, ingrese un término de búsqueda.</p>";
}
