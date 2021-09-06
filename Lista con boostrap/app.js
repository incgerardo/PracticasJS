var formulario = document.getElementById("formulario");

var items = document.getElementById("items");

formulario.addEventListener("submit",cargaitem);

items.addEventListener("click",borraitem);


function cargaitem(e){

    e.preventDefault();

    var textonuevo = document.getElementById("itemnuevo");

    var filanueva=document.createElement("li")

    filanueva.textContent = textonuevo.value;

    filanueva.className = "list-group-item";

    var botonnuevo = document.createElement("button");

    botonnuevo.textContent = "X";

    botonnuevo.className = "btn btn-danger float-right eliminar";

    botonnuevo.type = "button";

    filanueva.appendChild(botonnuevo);
       
    items.insertBefore(filanueva,null);
}

function borraitem(e){
    
    if (e.target.classList.contains("eliminar")){
        var item = e.target.parentElement;
        items.removeChild(item);
    }

}

//var ultimohijo = tabla.lastElementChild;

    //console.log(filanueva);

    //console.log(ultimohijo);


//console.dir(document);
//console.log(document.title);

//document.title = "prueba";

//var tituloencabezado = document.getElementById("header-title");

//console.log(tituloencabezado);

//tituloencabezado.textContent = "cambiado";
//tituloencabezado.innerText = "cambiado2";
//tituloencabezado.innerHTML = "<h3>cambiado3</h3>";

//var lista = document.getElementsByTagName("li");

//lista[0].innerText = "ya lo cambie";

//var itemList = document.querySelector("#items");

//console.log(itemList.previousSibling);

// creo dos elementos meto uno dentro del otro, selecciono un elemento padre y un hermano y lo pongo al bloque creado antes del nuevo hermano
/*
var nuevoelemento = document.createElement("h1");

nuevoelemento.textContent ="hola mundo";

var nuevodiv = document.createElement("div");

nuevodiv.appendChild(nuevoelemento);

var contenedor = document.querySelector("header .container");

var sel = document.getElementById("header-title")

console.log(sel);

contenedor.insertBefore(nuevodiv,sel);

document.addEventListener("click",()=> {console.log("hola");});

*/

