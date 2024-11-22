
let paramCategoria = location.search

let recetas = document.querySelector(".fotorecetas");
const URL = "https://dummyjson.com/recipes";
let recetasplus = " ";


fetch(URL)
.then(function(response) {
    return response.json();
})

.then(function(data) {

    let listaRECETAS = data.recipes
    console.log(listaRECETAS);
    

    for (let i = 0; i < listaRECETAS.length; i++) {
        let nombre = (listaRECETAS[i].name);
        let imagen = (listaRECETAS[i].image);
        let dificultad = (listaRECETAS[i].difficulty)
        let id = (listaRECETAS[i].id)
        let tags = (listaRECETAS[i].tags)

        // Utilizamos este for para poder filtrar las recetas que contienen la categoria seleccionada
        for (let p = 0; p < tags.length; p++) {
            const categoria = tags[p];
            
            if(paramCategoria == ("?/"+categoria)) {
                recetasplus += `
                    <article class="article" >
                        <p class= "titulo ">${nombre} </p>
                        <img src="${imagen}" alt="${nombre}" class="imagen">
                        <p class= "nivel" >${dificultad} </p>
                        <a href="./receta.html?/${id}" class="masINFO" ><p>More information about de recipe</p></a>
                    </article>
                `
            }
        }
    }

    recetas.innerHTML = recetasplus;

    let articulos = document.querySelectorAll(".article")
    let imagenes = document.querySelectorAll(".imagen");
    let textos = document.querySelectorAll ("p")
    let titulos = document.querySelectorAll(".titulo")
    let niveles = document.querySelectorAll(".nivel")
    let infos = document.querySelectorAll(".masINFO")


    // TEXTOS EN GENERAL
    for (let iiii = 0; iiii < textos.length; iiii++) {
        const texto = textos[iiii];
        
        texto.style.color = "black"
    }

    // ARTÍCULO
    for (let iii = 0; iii < articulos.length; iii++) {
        const articulo = articulos[iii];
        articulo.style.border = "2px solid black";
        articulo.style.margin = ""
        articulo.style.display = "flex"
        articulo.style.flexDirection = "column"
        articulo.style.flexWrap = "nowrap"
        articulo.style.alignItems = "center"
        articulo.style.margin = "30px 30px 10px 30px"
        articulo.style.borderRadius = "20px"
        articulo.style.backgroundColor = "#fbfbed"
        articulo.style.padding = "5px"
    }

    // TÍTULO 
    for (let n = 0; n < titulos.length; n++) {
        const titulo = titulos[n];
        titulo.style.color = "black"
        titulo.style.fontSize = "22px"
        titulo.style.margin = "20px 0px 5px 0px"
        titulo.style.fontWeight = "bold"
    }

    // IMAGEN
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

    for (let r = 0; r < niveles.length; r++) {
        const nivel = niveles[r];
        nivel.style.padding = "6px 12px 6px 12px"

        if (nivel == "Easy") {
            nivel.style.backgroundColor = "#a7f9b7"
        }
        else if (nivel == "Medium") {
            nivel.style.backgroundColor = "yellow"
        }
    }
})

.catch(function(error) {
    console.log("Error: " + error);
});


// TODO FOTORECETAS
recetas.style.display = "flex"
recetas.style.flexWrap = "wrap"
recetas.style.alignContent = "center"
recetas.style.justifyContent = "center"
recetas.style.margin = "0px"
