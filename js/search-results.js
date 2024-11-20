// FORMULARIO - BUSCAR (el fetch da error y no se por que, hay que arreglarlo)
let qs = location.search;

let qsObj = new URLSearchParams(qs)
let buscar = qsObj.get("buscadorNAME"); //me da el valor que escribo en el buscador
console.log(buscar);
let url = `"https://dummyjson.com/recipes?name:${buscar}"`; // intento hacer que la QS del url me llame solo una receta por su nombre

let recetas = document.querySelector(".fotorecetas")
let recetasplus = " ";

if(buscar){
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let lista = data.recipes
        console.log(lista);
        let recetas = document.querySelector(".fotorecetas")
        for (let i = 0; i < lista.length; i++) {
            recetasplus += `
                <article>
                       <img src= ${lista[i].image} alt=''>
                        <p> <a href="./detalle.html?id=${lista[i].id}"> </a> </p>
                        <p>${lista[i].name} </p>
                 </article>
             `;
        }
        recetas.innerHTML = recetasplus;
    })
    .catch(function (error) {
        console.log("error: ", error);
    });
} else{
    recetas.innerHTML = alert("<p> no se encontro la busqueda </p>");
}

