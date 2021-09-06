document.getElementById("botongris").onclick = function(event){gris();};
document.getElementById("botonblanco").onclick = blanco;
document.getElementById("botonazul").addEventListener("click",azul);
document.getElementById("botonamarillo").onclick = amarillo;

var body = document.getElementsByTagName("body")[0];

function gris(){
    body.style.backgroundColor = "gray";
    body.style.color = "white";
}

function blanco(){
    body.style.backgroundColor = "white";
    body.style.color = "black";
}

function azul(){
    body.style.backgroundColor = "blue";
    body.style.color = "white";
}

function amarillo(){
    body.style.backgroundColor = "yellow";
    body.style.color = "black";
}