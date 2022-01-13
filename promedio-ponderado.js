const notas= [
    {
        materia:"matematicas",
        nota:9,
        credito:4,

    },
    {
        materia:"programacion",
        nota:8,
        credito:3,
    },
    {
        materia:"fisica",
        nota:9,
        credito:3,
    }
]
//parte de arriba de la formula
const notaxcredito=notas.map(function(notaMateria){
    return notaMateria.nota * notaMateria.credito;
});

const sumaNotasConCredito = notaxcredito.reduce (
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  
// parte de abajo de formula
  const credito=notas.map(function(notaMateria){
    return notaMateria.credito;
});

const sumaCredito = credito.reduce (
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );

const promedioPonderado = sumaNotasConCredito / sumaCredito;




