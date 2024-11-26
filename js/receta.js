// (SIN TERMINAR)

// FALTA:
    // 1 - Sacar los for y reemplazarlos en el css para reducir el código 
        // pero que quede con el mismo formato que tiene 


//Extraemos el valor del id de la receta seleccionada
let qs = location.search; // con esto podemos extraer el id
console.log(qs);

let qsObj = new URLSearchParams(qs);

let IDreceta = qsObj.get("id");
console.log(IDreceta); 

    

// Hay que lograr extraer el ID de la receta utilizando esta URL
// El problema es que al extrar por qs nos da "?/ + id "
let URL = `https://dummyjson.com/recipes/${IDreceta}`;

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
    /*for (let i = 0; i < categorias.length; i++) {
        let cats = categorias[i];
        
    } */
        
    recetasplus += `
    <article class="article" >
        <article class="artIMAGEN" >
            <img src="${imagen}" alt="${nombre}" class="imagen">
        </article>
        <article class="artTEXTO" >
            <h1 class= "titulo ">${nombre} </h1>
            <p class= "instrucciones" >${instrucciones} </p>
            <p class= "coc" >Tiempo de cocción: ${tiempococ} minutos </p>
            
        </article>
    </article>`

            receta.innerHTML = recetasplus;
    

    let artRECETAS = document.querySelectorAll(".fotorecetas")
    let articulos = document.querySelectorAll(".article")
    let artIMAGEN = document.querySelectorAll(".artIMAGEN")
    let artTEXTO = document.querySelectorAll(".artTEXTO")
    let imagenes = document.querySelectorAll(".imagen");
    let textos = document.querySelectorAll ("p")
    let titulos = document.querySelectorAll(".titulo")
    let cocción = document.querySelectorAll(".coc")
    let categ = document.querySelectorAll(".categorias")

    // ARTICULO FOTORECETA
    for (let dd = 0; dd < artRECETAS.length; dd++) {
        const receta = artRECETAS[dd];
        receta.style.display = "flex"
        receta.style.justifyContent = "center"
        receta.style.alignItems = "center"
        receta.style.marginBottom = "30px"
    }
    
    // ARTÍCULO
    for (let iii = 0; iii < articulos.length; iii++) {
        const articulo = articulos[iii];
        articulo.style.border = "2px solid black";
        articulo.style.margin = ""
        articulo.style.display = "flex"
        articulo.style.flexDirection = "row"
        articulo.style.flexWrap = "nowrap"
        articulo.style.alignItems = "center"
        articulo.style.margin = "30px 40px 10px 40px"
        articulo.style.borderRadius = "20px"
        articulo.style.backgroundColor = "#fbfbed"
        articulo.style.width = "950px"
        
    }

    // ARTICULO DE LA IMAGEN
    for (let E = 0; E < artIMAGEN.length; E++) {
        const img = artIMAGEN[E];
        
    }

    // ARTICULO DE LOS TEXTOS 
    for (let F = 0; F < artTEXTO.length; F++) {
        const tex = artTEXTO[F];
        tex.style.display = "flex"
        tex.style.flexDirection = "column"
        tex.style.alignItems = "center"
        tex.style.marginRight = "10px"
        tex.style.textDecoration = "none"
    }

    // CATEGORIAS
    for (let f = 0; f < categ.length; f++) {
        const categoria = categ[f];
        categoria.style.textDecoration = "none"
        categoria.style.fontWeight = "bold"
        categoria.style.color = "green"
        
    }

    // TEXTOS - GENERAL
    for (let iiii = 0; iiii < textos.length; iiii++) {
        const texto = textos[iiii];
        texto.style.fontSize = "20px"
        
    }

    // IMAGEN
    for (let ii = 0; ii < imagenes.length; ii++) {
        const imagen = imagenes[ii];
        imagen.style.border = 
        imagen.style.width = "300px"
        imagen.style.height = "280px"
        imagen.style.margin = "40px 40px 40px 40px"
        imagen.style.borderRadius = "20px"
        imagen.style.border = "1px solid black"
        imagen.style.filter ="drop-shadow(2px 2px 4px rgb(0, 0, 0))"
    }

    // TITULO - NOMBRE
    for (let n = 0; n < titulos.length; n++) {
        const titulo = titulos[n];
        titulo.style.color = "red"
        titulo.style.fontSize = "30px"
        titulo.style.margin = "20px 0px 5px 0px"
        titulo.style.fontWeight = "bold"
    }
    
    // COCCIÓN
    for (let S = 0; S < cocción.length; S++) {
        const coc = cocción[S];
        coc.style.height = "30px"
        coc.style.width = "320px"
        coc.style.display = "flex"
        coc.style.backgroundColor = "#ffce80"
        coc.style.fontSize = "20px"
        coc.style.alignItems = "center"
        coc.style.justifyContent = "center"
        coc.style.margin = "10px"
    }

})

.catch(function(error) {
    console.log("Error: " + error);
});