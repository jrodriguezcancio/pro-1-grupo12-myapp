
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
    console.log(lista);

    let categorias = [ ]
    for (let i = 0; i < lista.length; i++) {
        let categoria = (lista[i].tags)
        let nombre = (lista[i].name)
        console.log("categoria:" +categoria);
        
        for (let t = 0; t < categoria.length; t++) {
            let catg = categoria[t]
            categorias.push(catg)
            console.log("catg:" +catg);
            console.log("categorias:" +categorias);

            for (let j = 0; j < categorias.length; j++) {
                let catgRepetida = categorias[j];
                console.log("catg Repetida:"  +catgRepetida);

                if (catg == catgRepetida){
                    console.log("cccc:" +catgRepetida);
                    
                    continue
                }
                else {
                    /*categoriaPlus += `
                        <article class="category${t}" >
                            <a href="./category.html">${catg}</a>
                        </article>
                `
                    categoriasSection.innerHTML = categoriaPlus;*/
                }
               // Preguntar porque repite tantas vecs todo
            }
        }    
}
})

.catch(function(error) {
    console.log("Error: " + error);
});
