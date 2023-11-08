var nota1 = parseInt(prompt("Digite a nota 1: "));
var nota2 = parseInt(prompt("Digite a nota 2: "));
var nota3 = parseInt(prompt("Digite a nota 3: "));
var soma = nota1 + nota2 + nota3;
var media = soma / 3;

if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 5) {
    console.log("Em recuperação");
} else {
    console.log("Reprovado");
}

var mediaElement = document.getElementById("media");
mediaElement.textContent = "Média: " + media;

