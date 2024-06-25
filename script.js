function calcularSalario() {
    var valorHora = parseFloat(document.getElementById("valorHora").value);
    var horasTrabalhadas = parseFloat(document.getElementById("horasTrabalhadas").value);
    
    var salarioBruto = valorHora * horasTrabalhadas;
    
    var ir = salarioBruto * 0.11;
    var inss = salarioBruto * 0.08;
    var sindicato = salarioBruto * 0.05;
    
    var salarioLiquido = salarioBruto - ir - inss - sindicato;
    
    document.getElementById("resultadoSalarioBruto").innerHTML = "Salário Bruto: R$ " + salarioBruto.toFixed(2);
    document.getElementById("resultadoINSS").innerHTML = "Valor pago ao INSS: R$ " + inss.toFixed(2);
    document.getElementById("resultadoSindicato").innerHTML = "Valor pago ao sindicato: R$ " + sindicato.toFixed(2);
    document.getElementById("resultadoSalarioLiquido").innerHTML = "Salário Líquido: R$ " + salarioLiquido.toFixed(2);
}

document.getElementById("calcularBtn").addEventListener("click", calcularSalario);
