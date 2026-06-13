let botonConversor = document.getElementById("botonConversor");
let mensaje = document.getElementById("mensaje");
let resultado = document.getElementById("resultado");
const constanteKelvin = 273.15;

botonConversor.addEventListener("click", convertirTemperatura);

function convertirTemperatura() {
  mensaje.innerHTML = "";
  resultado.innerHTML = "";
  let temperatura = document.getElementById("inputTemperatura").value;
  temperatura = parseInt(temperatura);

  if (Number.isNaN(temperatura)) {
    mensaje.innerHTML = "Debe ser númerico";
  } else {
    let gradosKelvin = calcularGradosKelvin(temperatura);
    let gradosFahrenheit = calcularGradosFahrenheit(temperatura);

    resultado.innerHTML = `Grados Kelvin: ${gradosKelvin}
                           <br>Grados Fahrenheit: ${gradosFahrenheit} `;
  }
}

function calcularGradosKelvin(gradosCelcius) {
  return gradosCelcius + constanteKelvin;
}

function calcularGradosFahrenheit(gradosCelcius) {
  return gradosCelcius * (9 / 5) + 32;
}
