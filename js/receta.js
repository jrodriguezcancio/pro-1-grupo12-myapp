let qs = location.search; // con esto podemos extraer el id

let qsobj = new URLSearchParams(qs);
let idreceta = qsobj.get("id");
let recetas = document.querySelector(".fotorecetas");
let URL = `https://dummyjson.com/recipes`;
let URLcateg = 'https://dummyjson.com/recipes/tag';
alert(URLcateg)
console.log(URLcateg);

let recetasplus = " ";

// preguntar de que sirve qsobj y idreceta, 
//ya que unicamente con qs pudimos extraer el id


fetch(URL)
.then(function(response) {
    return response.json();
})

.then(function(data) {

    let lista = data.recipes
    
    for (let i = 0; i < lista.length; i++) {
        let nombre = (lista[i].name);
        let imagen = (lista[i].image);
        let tiempococ = (lista[i].prepTimeMinutes)
        let instrucciones = (lista[i].instructions)
        let ID = (lista[i].id)
        let categorias = (lista[i].tags) // aca hacer el for
        console.log(categorias);
        
        if (qs == ("?/"+ID)) { 
        //qs es el id de la receta que clickeamos y ?/+ID ayuda a encontrar la receta 
            
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

            recetas.innerHTML = recetasplus;
        
        } else {
            continue
        }

        let catHTML = document.querySelector(".categorias")
        alert("CatHTML:" +catHTML)
        for (let j = 0; j < categorias.length; j++) {
            const catESPECIFICA = categorias[j];
            alert(catESPECIFICA)
            catHTML += `<a  href="./category.html"><p>${catESPECIFICA}</p></a>`

        // preguntar que codigo hacer para poder rescatar categoria por categoria
        // y que este definidas en variables distintas para que cuando se haga click
        // en cada categoria en la página, nos lleve a la categoria específica 
        }
    }

    

    let artRECETAS = document.querySelectorAll(".fotorecetas")
    let articulos = document.querySelectorAll(".article")
    let artIMAGEN = document.querySelectorAll(".artIMAGEN")
    let artTEXTO = document.querySelectorAll(".artTEXTO")
    let imagenes = document.querySelectorAll(".imagen");
    let textos = document.querySelectorAll ("p")
    let titulos = document.querySelectorAll(".titulo")
    let instrucciones = document.querySelectorAll(".instrucciones")
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

    // INTSRUCCIONES
    for (let q = 0; q < instrucciones.length; q++) {
        const instruccion = instrucciones[q];
    }

    

})

.catch(function(error) {
    console.log("Error: " + error);
});



