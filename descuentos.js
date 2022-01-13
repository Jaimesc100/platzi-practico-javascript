//const precioOriginal=100;
//const descuento=15;

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento= 100-descuento;
    const precioConDescuento=(precio*porcentajePrecioConDescuento)/100;

    return precioConDescuento ; 
}
function onclickpricediscount(){
    const inputPrice =document.getElementById("inputprice");
    const pricevalue=inputPrice.value;
    const inputDiscount =document.getElementById("inputdiscount");
    const discountvalue=inputDiscount.value;
    const precioFinalcondescuento=calcularPrecioConDescuento(pricevalue,discountvalue);
    
    const resultP=document.getElementById("ResultP");
    resultP.innerText="El precio con descuento : $"  + precioFinalcondescuento;
    
}


//console.log({
    //precioOriginal,
   // descuento,
   // porcentajePrecioConDescuento,
  //  precioConDescuento


 