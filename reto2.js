
const cupones=["bronce","plata","oro",];


function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento= 100-descuento;
    const precioConDescuento=(precio*porcentajePrecioConDescuento)/100;
    
    return precioConDescuento ; 
}
function onclickpricediscount(){
    const inputPrice =document.getElementById("inputprice");
    const pricevalue=inputPrice.value;
    const inputCupon =document.getElementById("inputcupones");
    const cuponvalue=inputCupon.value;

    let descuento;

    switch(true){
     case cuponvalue==="bronce":
         descuento=15;
         break;
         case cuponvalue==="plata":
            descuento=20;
            break;
            case cuponvalue==="oro" :
         descuento=30;
         break;
         default:alert("no hay descuento");
         
    }


    const precioFinalcondescuento=calcularPrecioConDescuento(pricevalue,descuento);
    
    const resultP=document.getElementById("ResultP");
    resultP.innerText="El precio con descuento : $"  + precioFinalcondescuento;
   
}