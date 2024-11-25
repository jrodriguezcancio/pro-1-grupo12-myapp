// (TERMINADO)

let categoriasSection = document.querySelector(".categories");
const URL = 'https://dummyjson.com/recipes/tags' // Get all recipes tags
// Esta URL nos permite extraer todas las categorias que hay 

let categoriaPlus = " ";


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
})

.catch(function(error) {
    console.log("Error: " + error);
});
