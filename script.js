function calcularTemperatura() {
    const temperaturaInput = parseFloat(document.getElementById("temperatura").value);
    const celsiusRadio = document.getElementById("celsiusRadio");
    const fahrenheitRadio = document.getElementById("fahrenheitRadio");

    if (celsiusRadio.checked) {
        // Convertir de Celsius a Fahrenheit
        const temperaturaFahrenheit = (temperaturaInput * 9/5) + 32;
        alert(`La temperatura calculada es ${temperaturaFahrenheit.toFixed(2)} °F`);
    } else if (fahrenheitRadio.checked) {
        // Convertir de Fahrenheit a Celsius
        const temperaturaCelsius = (temperaturaInput - 32) * 5/9;
        alert(`La temperatura calculada es ${temperaturaCelsius.toFixed(2)} °C`);
    } else {
        alert("Seleccione una unidad de temperatura.");
    }
}
