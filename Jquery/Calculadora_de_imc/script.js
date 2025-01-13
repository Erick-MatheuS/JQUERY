$(function() {
    let button = $("button").bind("click", () => {
        let altura = parseFloat($("#altura").val());
        let peso = parseFloat($("#peso").val());
        let resposta = $("#resposta");

        let imc = peso / (altura * altura);

        let descricao;

        if(imc <= 16) {
            descricao = "Magreza grave";
        } else if(imc >= 16 && imc <= 16.99) {
            descricao = "Magreza moderada";
        } else if(imc >= 17 && imc <= 18.5) {
            descricao = "Magreza leve";
        } else if(imc >= 18.6 && imc <= 24.9) {
            descricao = "Peso ideal";
        } else if(imc >= 25 && imc <= 29.9) {
            descricao = "Sobrepeso";
        } else if(imc >= 30 && imc <= 34.9) {
            descricao = "Obesidade grau I";
        } else if(imc >= 35 && imc <= 39.9) {
            descricao = "Obesidade II ou severa";
        } else if(imc >= 40) {
            descricao = "Obesidade grau III ou mórbida";
        }

        resposta.html("Seu IMC é " + imc.toFixed(2) + " e o resultado é: " + descricao);
    });
});
