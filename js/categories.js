
let categoriasSection = document.querySelector(".categories");
const URL = "https://dummyjson.com/recipes";
let categoriaPlus = " ";
let longitud = 0

fetch(URL)
.then(function(response) {
    return response.json();
})

.then(function(data) {

    let lista = data.recipes
    alert(lista)
    console.log(lista);

    for (let i = 0; i < lista.length; i++) {
        let categoria = (lista[i].tags)

        let categorias = [ ]
        for (let s = 0; s < categoria.length; s++) {
            let catg = categoria[s];

            if (catg in categorias){
                continue
            }
            else {
                categorias.push(catg)
                categoriaPlus += `
                    <article class="category${s}" >
                        <a href="./category.html">${catg}</a>
                    </article>
            `
            categoriasSection.innerHTML = categoriaPlus;
            }
            }
            alert(categorias)
            }      
})

.catch(function(error) {
    console.log("Error: " + error);
});
