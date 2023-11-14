const botonCirculo = document.querySelector(".btn_circulo");
const botonTriangulo = document.querySelector(".btn_triangulo");

const triangulo = () => {
  const base = parseInt(prompt("Ingrese base del triangulo (CM)"));
  const altura = parseInt(prompt("Ingrese altura de triangulo (CM)"));
  const areaTriangulo = (base * altura) / 2;

  console.log(`El area del triangulo es: ${areaTriangulo} cm²`);
};

const circulo = () => {
  const pi = 3.14;
  const radio = parseInt(prompt("Ingrese radio del circulo"));
  const areaCirculo = pi * radio ** 2;

  console.log(`El area del circulo es: ${areaCirculo} cm²`);
};

botonCirculo.addEventListener("click", circulo);

botonTriangulo.addEventListener("click", triangulo);
