function calcularmediaritmetica(lista){
   
 const sumaLista = lista.reduce (
     function (valorAcumulado = 0, nuevoElemento) {
       return valorAcumulado + nuevoElemento;
     }
   );
     
     const promedioLista=sumaLista/lista.length
     
     return promedioLista;
 
 }



//const lista1 =[
 //   100,
   // 200,
    //500,
    //700,
    //600,
    
//];
function calcularmediana(lista){
lista.sort((a, b) => a - b);
console.log(lista);

const mitadDelista1=parseInt(lista.length/2);


function espar(numero){
    if (numero % 2===0)
    return true ;
    else{
        return false;
    }
}

let mediana

if (espar(lista.length)){

    const elemento1=lista [mitadDelista1 - 1];
    const elemento2=lista [mitadDelista1 ];

    const promedioelemto1y2= calcularmediaritmetica([
        elemento1,
        elemento2,

    ]);
    mediana=promedioelemto1y2;
}else{
mediana = lista [mitadDelista1];
}
return mediana;
}