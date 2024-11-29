// (TERMINADO))

//Extraemos el valor del id de la receta seleccionada
let qs = location.search; // con esto podemos extraer el id
let qsObj = new URLSearchParams(qs);
let IDreceta = qsObj.get("id");
console.log(IDreceta); 

// Hay que lograr extraer el ID de la receta utilizando esta URL
// El problema es que al extrar por qs nos da "?/ + id "
let URL = `https://dummyjson.com/recipes/${IDreceta}`; // URL Get a single recipe

let receta = document.querySelector(".fotorecetas");
let recetasplus = " ";

fetch(URL)
.then(function(response) {
    return response.json();
})

.then(function(data) {
    console.log(data);
        
    let nombre = (data.name);
    let imagen = (data.image);
    let tiempococ = (data.prepTimeMinutes)
    let instrucciones = (data.instructions)
    let ID = (data.id)
    let categorias = (data.tags) 
    console.log(categorias);
    
        
    recetasplus += `
    <article class="articleRECETA" >
        <article class="artIMAGENr" >
            <img src="${imagen}" alt="${nombre}" class="imagenR">
        </article>
        <article class="artTEXTOr" >
            <h1 class= "titulo1 ">${nombre} </h1>
            <p class= "instrucciones" >${instrucciones} </p>
            <p class= "coc" >Tiempo de cocción: ${tiempococ} minutos </p>
            <article class="artCatg" >
        `

    for (let t = 0; t < categorias.length; t++) {
        let categoria = categorias[t];        

        recetasplus +=`            
            <a class="categoriasClase" href="./category.html?tag=${categoria}" >${categoria}</a>
        `
        receta.innerHTML = recetasplus;
    } 

    recetasplus += 
                    `</article>
                </article> 
            </article>` 

    receta.innerHTML = recetasplus;

})

.catch(function(error) {
    console.log("Error: " + error);
});