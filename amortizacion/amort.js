function calprestamo(){

    var monto = document.getElementById("monto").value;
    var tasa = document.getElementById("tasa").value;
    var meses = document.getElementById("meses").value;

    var interes = (monto*(tasa*0.01)) / meses;
    var pago = ((monto/meses)+interes).toFixed(2);

    pago = pago.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("pago").innerHTML = `A pagar por mes = $${pago}`;

}