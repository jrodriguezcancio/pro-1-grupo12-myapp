let qs = location.search;
let qsobj = new URLSearchParams(qs);
let idreceta = qsobj.get("id");
let recetas = document.querySelector(".fotorecetas");
let URL = `https://dummyjson.com/recipes/${idreceta}`;
let recetasplus = " ";


fetch(URL)
.then(function(response) {
    return response.json();
})

.then(function(data) {

    let lista = data.recipes
    console.log(lista);
    
    for (let i = 0; i < lista.length; i++) {
        let nombre = (lista[i].name);
        let imagen = (lista[i].image);
        let tiempococ = (lista[i].prepTimeMinutes)
        let instrucciones = (lista[i].instructions)
        
        
        recetasplus += `
            <article class="article" >
                <p class= "titulo ">${nombre} </p>
                <img src="${imagen}" alt="${nombre}" class="imagen">
                <p class= "instrucciones" >${instrucciones} </p>
                <p class= "tiempo de coccion:" >${tiempococ} </p>
                <a href="./receta.html" class="masINFO" ><p>More information about de recipe</p></a>
            </article>
        `}
   
    recetas.innerHTML = recetasplus;

    let articulos = document.querySelectorAll(".article")
    let imagenes = document.querySelectorAll(".imagen");
    let textos = document.querySelectorAll ("p")
    let titulos = document.querySelectorAll(".titulo")
    let niveles = document.querySelectorAll(".nivel")
    let infos = document.querySelectorAll(".masINFO")

    for (let n = 0; n < titulos.length; n++) {
        const titulo = titulos[n];
        titulo.style.color = "red"
        titulo.style.fontSize = "20px"
        titulo.style.margin = "20px 0px 5px 0px"

    }

    /*for (let t = 0; t < niveles.length; t++) {
        const nivel = niveles[t];
        
    }

    for (let u = 0; u < infos.length; u++) {
        const info = infos[iiii];
        
    }*/

    for (let iiii = 0; iiii < textos.length; iiii++) {
        const texto = textos[iiii];
        
        texto.style.color = "black"
    }

    for (let ii = 0; ii < imagenes.length; ii++) {
        const imagen = imagenes[ii];
        imagen.style.border = 
        imagen.style.width = "250px"
        imagen.style.height = "250px"
        imagen.style.margin = "20px 40px 20px 40px"
        imagen.style.borderRadius = "20px"
        imagen.style.border = "1px solid black"
        imagen.style.filter ="drop-shadow(2px 2px 4px rgb(0, 0, 0))"
    }

    for (let iii = 0; iii < articulos.length; iii++) {
        const articulo = articulos[iii];
        articulo.style.border = "2px solid black";
        articulo.style.margin = ""
        articulo.style.display = "flex"
        articulo.style.flexDirection = "column"
        articulo.style.flexWrap = "nowrap"
        articulo.style.alignItems = "center"
        articulo.style.margin = "30px 40px 10px 40px"
        articulo.style.borderRadius = "20px"
        articulo.style.backgroundColor = "#fbfbed"
    }

})

.catch(function(error) {
    console.log("Error: " + error);
});