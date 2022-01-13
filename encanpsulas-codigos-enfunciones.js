function perimetroCuadrado(Lado) {
    
   return Lado*4;
}

function areaCuadrado (Lado){
    return Lado*Lado;
}

function perimetroTriangulo(Lado1,Lado2,Base){
  return Lado1+Lado2+Base;
}

function areaTriangulo(Base,altura){
   return (Base*altura)/2;
}

function diametroCirculo(Radio){
    return Radio*2;
}
const PI=Math.PI;

function perimetroCirculo(){
    const diametro =diametroCirculo(Radio)
    
  return diametro *PI;
}

function areaCirculo(Radio){
    return (Radio*Radio)*PI;
}