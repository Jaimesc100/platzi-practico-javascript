console.group("cuadrado");
// codigo del cuadrado ;
const LadoCuadrado=5;
console.log("lado del cuadrado mide :"+ LadoCuadrado + "cm");

const perimetroCuadrado=LadoCuadrado*4;
console.log("el perimetro del cuadrado es :"+ perimetroCuadrado + "cm");

const areaCuadrado=LadoCuadrado*LadoCuadrado;
console.log("el area del cuadrado es :" + areaCuadrado + "cm^2");

console.groupEnd();

// codigo del triangulo ;

console.group("triangulo");
const LadoTriangulo1=6;
const LadoTriangulo2=6;
const BaseTriangulo=4;

console.log("lados del triangulo miden :"+ LadoTriangulo1 + "cm," + LadoTriangulo2 + "cm," + BaseTriangulo + "cm" );

const alturaTriangulo=5.5;
console.log("la altura del triangulo mide :"+ alturaTriangulo + "cm");

const perimetroTriangulo=LadoTriangulo1+LadoTriangulo2+BaseTriangulo;
console.log("el perimetro del triangulo es :"+ perimetroTriangulo + "cm");

const areaTriangulo=(BaseTriangulo*alturaTriangulo)/2;
console.log("el area del triangulo es :" + areaTriangulo + "cm^2");



console.groupEnd();

// codigo circulo;
console.group("circulo");

//radio
const RadioCirculo=4;
console.log("el radio del circulo es :" + RadioCirculo + "cm");

//diametro
const diametroCirculo=RadioCirculo*2;
console.log("el diametro del circulo :" + diametroCirculo + "cm");
// PI
const PI=Math.PI;

//circuferencias 
const perimetroCirculo=diametroCirculo*PI;
console.log("la circunferencia del circulo es :" + perimetroCirculo + "cm")

//area 
const areaCirculo=(RadioCirculo*RadioCirculo)*PI;
console.log("el area del circulo es :" + areaCirculo + "cm^2");
console.groupEnd();
