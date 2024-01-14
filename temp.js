function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}


function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}


function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}


function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}


function clearInputs() {
    document.getElementById('celsius').getElementsByTagName('input')[0].value = '';
    document.getElementById('fahrenheit').getElementsByTagName('input')[0].value = '';
    document.getElementById('kelvin').getElementsByTagName('input')[0].value = '';
}


function convertTemperature() {
    const celsiusInput = parseFloat(document.getElementById('celsius').getElementsByTagName('input')[0].value);
    const fahrenheitInput = parseFloat(document.getElementById('fahrenheit').getElementsByTagName('input')[0].value);
    const kelvinInput = parseFloat(document.getElementById('kelvin').getElementsByTagName('input')[0].value);

    if (!isNaN(celsiusInput)) {
        document.getElementById('fahrenheit').getElementsByTagName('input')[0].value = celsiusToFahrenheit(celsiusInput).toFixed(2);
        document.getElementById('kelvin').getElementsByTagName('input')[0].value = celsiusToKelvin(celsiusInput).toFixed(2);
    } else if (!isNaN(fahrenheitInput)) {
        document.getElementById('celsius').getElementsByTagName('input')[0].value = fahrenheitToCelsius(fahrenheitInput).toFixed(2);
        document.getElementById('kelvin').getElementsByTagName('input')[0].value = celsiusToKelvin(fahrenheitToCelsius(fahrenheitInput)).toFixed(2);
    } else if (!isNaN(kelvinInput)) {
        document.getElementById('celsius').getElementsByTagName('input')[0].value = kelvinToCelsius(kelvinInput).toFixed(2);
        document.getElementById('fahrenheit').getElementsByTagName('input')[0].value = celsiusToFahrenheit(kelvinToCelsius(kelvinInput)).toFixed(2);
    } else {
        alert('Please enter a valid temperature.');
    }
}