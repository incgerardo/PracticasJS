var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radio = canvas.height/2 ;
ctx.translate(radio,radio);
radio = radio * 0.9;

setInterval(dibujaReloj,1000);

function dibujaReloj(){
    dibujafrente(ctx, radio);
    dibujaNumeros(ctx, radio);
    dibujaTiempo(ctx,radio);
}

function dibujafrente(ctx, radio){
    var grados;
    //dibuja el circulo mayor del reloj
    ctx.beginPath();
    ctx.arc(0,0,radio,0,Math.PI*2); //(x, y, radio, startAngle, endAngle, antihorario)
    ctx.fillStyle ="white";
    ctx.fill();

    //hace el gradiente de color del borde del reloj
    grados = ctx.createRadialGradient(0,0,radio*0.95,0,0,radio*1.05);
    grados.addColorStop(0,"#333");
    grados.addColorStop(0.5,"white");
    grados.addColorStop(1,"#333");
    ctx.strokeStyle = grados;
    ctx.lineWidth = radio*0.1;
    ctx.stroke();

    //hace el circulo del centro del reloj
    ctx.beginPath();
    ctx.arc(0,0,radio*0.1,0,2*Math.PI);
    ctx.fillStyle ="#333";
    ctx.fill();

}  

function dibujaNumeros(ctx, radio){

    var angulo;
    var numero;

    ctx.font = radio*0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    for(numero = 1; numero < 13; numero++){
        angulo = numero * Math.PI / 6;
        
        ctx.rotate(angulo);
        ctx.translate(0, -radio*0.85);
        ctx.rotate(-angulo);
        
        ctx.fillText(numero.toString(),0,0);

        ctx.rotate(angulo);
        ctx.translate(0,radio*0.85);
        ctx.rotate(-angulo);
    }
}

function dibujaTiempo(ctx, radio ){
    var ahora = new Date();
    var hora = ahora.getHours();
    var minutos = ahora.getMinutes();
    var segundos = ahora.getSeconds();

    hora = hora%12;
    hora = (hora*Math.PI/6)+(minutos*Math.PI/(6*60))+(segundos*Math.PI/(6*60*60));
    drawHand(ctx, hora, radio*0.5, radio*0.07);
    minutos = (minutos*Math.PI/30)+(segundos*Math.PI/(30*60));
    drawHand(ctx, minutos, radio*0.8, radio*0.07);
    segundos = (segundos*Math.PI/30);
    drawHand(ctx, segundos, radio*0.9, radio*0.02);
    
    
    console.log(hora);
    console.log(minutos);
    console.log(segundos);
}

function drawHand(ctx, posicion, largo, ancho){
    ctx.beginPath();
    ctx.lineWidth = ancho;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(posicion);
    ctx.lineTo(0,-largo);
    ctx.stroke();
    ctx.rotate(-posicion);
}