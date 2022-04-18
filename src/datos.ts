let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");

//sigue el codigo
btnEnviar.addEventListener("click", () => {
  let numeroIngresado = Number(prompt("Ingrese un numero"));
  let cantidad = Number(prompt("Ingrese hasta que numero desea multiplicar"));
  let contador: number = 1;
  if (cantidad == 0) {
    console.log("Ud. ingreso Cero multiplicaciones");
  } else {
    while (contador <= cantidad) {
      console.log(numeroIngresado * contador);
      contador = contador + 1;
    }
  }
});
