// (TERMINADO)

let categoriasSection = document.querySelector(".categories");
const URL = 'https://dummyjson.com/recipes/tags' // Get all recipes tags
// Esta URL nos permite extraer todas las categorias que hay 

let categoriaPlus = " ";


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
    
    // Hacemos un for para que vaya categoria por categoria y agregar cada una al HTML
    for (let i = 0; i < data.length; i++) {
        const categoria = data[i];

        categoriaPlus += `
                    <article class="category" >
                        <a href="./category.html?tag=${categoria}" >${categoria}</a>
                    </article>
                `
                categoriasSection.innerHTML = categoriaPlus;
    
    }
        
    let categArt = document.querySelectorAll(".category")

    for (let i = 0; i < categArt.length; i++) {
        let category = categArt[i];
        
        category.addEventListener('mouseover', function () {
            category.style.backgroundColor = "#efef76";
            category.style.border = "2px solid rgb(251 255 109)";

        });

        category.addEventListener('mouseout', function () {
            category.style.backgroundColor = ""; // vuelve al color original
            category.style.border = "";
        });
    }
        
})
.catch(function(error) {
    console.log("Error: " + error);
});

