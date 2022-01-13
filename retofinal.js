function calculartuenDeudamiento(ingreso,gastos){
    const restaIngresoGastos= ingreso-gastos;
    const ingresosnetos =restaIngresoGastos*0.40;

    return ingresosnetos ; 
}
function onclickingresogastos(){
    const inputingreso =document.getElementById("inputingreso");
    const ingresovalue=inputingreso.value;
    const inputgastos =document.getElementById("inputgastos");
    const gastosvalue=inputgastos.value;
    const capacidadDeEndeudamiento=calculartuenDeudamiento(ingresovalue,gastosvalue);
    
    const resultP=document.getElementById("ResultP");
    resultP.innerText="capacidad de endeudamiento : $"  + capacidadDeEndeudamiento;
    
}