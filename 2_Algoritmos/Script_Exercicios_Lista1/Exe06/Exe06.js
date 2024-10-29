var raioCirculo = parseFloat(prompt("Digite o raio do círculo: "));

const valorPI = 3.14; 

var areaCirculo = valorPI * raioCirculo * raioCirculo;
//var areaCirculo = Math.PI * Math.pow(raioCirculo, 2);

alert("Calculando área do Círculo"
    +"\n========================="
    +"\nRaio do Círculo: " + raioCirculo 
    +"\nÁrea do Círculo: " + areaCirculo
    +"\n========================="
);
