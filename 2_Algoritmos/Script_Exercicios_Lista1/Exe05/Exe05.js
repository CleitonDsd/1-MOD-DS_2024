var metroDigitado = parseFloat(prompt("Digite o valor que queira converter de M para CM: "));

/**
 * Metros para CM 
 * 
 * M * 100 = CM 
 */

var calcularMetroParaCM = metroDigitado * 100;

alert("CONVERSÃO DE M para CM"
    + "\n========================"
    + "\n" + metroDigitado + "M convertido é igual a " + calcularMetroParaCM + "CM"
    + "\n========================"
);