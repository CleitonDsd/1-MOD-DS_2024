var primeiraNota = parseFloat(prompt("Digite a 1° nota: "));
var segundaNota = parseFloat(prompt("Digite a 2° nota: "));
var terceiraNota = parseFloat(prompt("Digite a 3° nota: "));
var quartaNota = parseFloat(prompt("Digite o a 4° nota: "));

var mediaBimestre = parseFloat((primeiraNota + segundaNota + terceiraNota + quartaNota) / 4);


alert("===================================" 
    + "\n Notas bimestrais "
    + "\n ==================================="
    + "\n 1° Nota: " + primeiraNota
    + "\n 2° Nota: " + segundaNota
    + "\n 3° Nota: " + terceiraNota
    + "\n 4° Nota: " + quartaNota
    + "\n ==================================="
    + "\n Média: " + mediaBimestre 
);
