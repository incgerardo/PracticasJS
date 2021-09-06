document.getElementById("boton").addEventListener("click",calcula);

function calcula(){
    var peso=parseFloat(document.getElementById("peso").value);
    var altura=parseFloat(document.getElementById("altura").value);

    console.log(peso);
    console.log(altura);

    altura = altura/100;

    var imc = peso / (altura*altura);
    imc = imc.toFixed(1);

    console.log(imc);
    document.getElementById("resultado").innerHTML = imc;

}