
let categoriasSection = document.querySelector(".categories");
const URL = "https://dummyjson.com/recipes";
let categoriaPlus = " ";
let longitud = 0

fetch(URL)
.then(function(response) {
    return response.json();
})

.then(function(data) {

    let recetas = data.recipes
    console.log(recetas);

    let categoriaARRAY = [ ]
    for (let i = 0; i < recetas.length; i++) {
        let categoria = (recetas[i].tags)
        /*let nombre = (lista[i].name)*/
        
        for (let t = 0; t < categoria.length; t++) {
            let catg = categoria[t]
            categoriaARRAY.push(catg + " ")
            
            
        }
    }

    let categoriasORDENADAS = categoriaARRAY.sort()
    console.log("ORDENADAS:" +categoriasORDENADAS);

    let ordenadaANT = " "

    for (let D = 0; D < categoriasORDENADAS.length; D++) {
        const ordenadasNEW = categoriasORDENADAS[D];
        
        if (ordenadasNEW == ordenadaANT) {
            console.log("REPETIDA:" +ordenadasNEW);   
            continue
        }
        else {
            console.log("No repetida:" +ordenadasNEW);
            ordenadaANT = ordenadasNEW
            
                categoriaPlus += `
                    <article class="category" >
                        <a href="./category.html?/${ordenadasNEW}">${ordenadasNEW}</a>
                    </article>
                `
                categoriasSection.innerHTML = categoriaPlus;
            }
    }
})

.catch(function(error) {
    console.log("Error: " + error);
});
