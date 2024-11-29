// (TERMINADO)

// Buscador 

let qs = location.search;
console.log(qs);

let qsObj = new URLSearchParams(qs);
console.log("qsObj:" +qsObj);

let buscado = qsObj.get("buscadorNAME");  
console.log(buscado);

let URL = `https://dummyjson.com/recipes/search?q=${buscado}`; // URL search recipes
let recetas = document.querySelector(".fotorecetas");
let terminoBuscado = document.querySelector(".terminoBuscado");
let buscador = document.querySelector(".buscador")
let resultados = " ";
let termino = " ";

//probando subit para el buscador (FUNCIONA)
let formularioBusqueda = document.querySelector(".buscador");
let formu = document.querySelector(".formu");

formularioBusqueda.addEventListener("submit", function(event) {
    let buscado = formu.value;
    
    if (buscado.length > 0 && buscado.length < 3){
        alert("Busque algo de mínimo 3 caracteres");
        event.preventDefault(); // Evita que el formulario se envíe
    } else if (buscado === ""){
        alert("No deje el campo vacío");
        event.preventDefault(); // Evita que el formulario se envíe
    }
});

if (buscado) {
    termino += `Resultados de búsqueda para "${buscado}": `;
    terminoBuscado.innerHTML = termino;
    if (buscado.length >= 3) {
        fetch(URL)
        .then(function(response) {
            console.log(response);
            
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
               alert("No se encontraron coincidencias para tu búsqueda.")
            }

            // detale mouseover y out
            let articles = document.querySelectorAll(".article");
            for (let i = 0; i < articles.length; i++) {
                let article = articles[i];

                article.addEventListener('mouseover', function () {
                    article.style.backgroundColor = "rgb(200, 245, 230)";
                    article.style.border = "2px solid #57b4ad";
                });

                article.addEventListener('mouseout', function () {
                    article.style.backgroundColor = "";  // Vuelve al color original
                    article.style.border = "";
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
} 

else {
    buscador.addEventListener('submit', function(e) {
        //let busc = (buscadorID.value)
    
        if(buscado === "") {
            alert("Por favor, ingrese un término de búsqueda");
                e.preventDefault(); }
    })
}
