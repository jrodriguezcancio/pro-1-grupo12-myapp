// TERMINADO.

let qs = location.search;
console.log(qs);

let qsObj = new URLSearchParams(qs);
let buscado = qsObj.get("buscadorNAME");  
console.log(buscado);

let URL = `https://dummyjson.com/recipes/search?q=${buscado}`;
let recetas = document.querySelector(".fotorecetas");
let terminoBuscado = document.querySelector(".terminoBuscado");
let resultados = " ";
let termino = " ";

if (buscado) {
    termino += `Resultados de búsqueda para "${buscado}": `;
    terminoBuscado.innerHTML = termino;
    if (buscado.length >= 3) {
        fetch(URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            let listaRECETAS = data.recipes;
            if (listaRECETAS.length > 0) {
                for (let i = 0; i < listaRECETAS.length; i++) {
                    let nombre = listaRECETAS[i].name;
                    let imagen = listaRECETAS[i].image;
                    let id = listaRECETAS[i].id;

                    resultados += `
                    <article class="article">
                        <p class="titulo">${nombre}</p>
                        <img src="${imagen}" alt="${nombre}" class="imagen">
                        <a href="./receta.html?id=${id}" class="masINFO"><p>More information about the recipe</p></a>
                    </article>
                    `;
                
                }

                recetas.innerHTML = resultados;
            } else {
                recetas.innerHTML = "<h3>No se encontraron coincidencias para tu búsqueda.</h3>";
            }
            // detale mouseover y out
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
        termino += " Por favor, busque algo con más de 3 caracteres";
        terminoBuscado.innerHTML = termino;
    }
} else {
    termino += "Por favor, ingrese un término de búsqueda";
    terminoBuscado.innerHTML = termino;
}
