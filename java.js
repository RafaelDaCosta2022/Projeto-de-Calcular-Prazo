function calcularData() {
    const dataInicial = document.getElementById('dataInicial').value;
    const diasAdicionais = parseInt(document.getElementById('diasAdicionais').value);

    if (!dataInicial || isNaN(diasAdicionais)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const data = new Date(dataInicial);
    data.setDate(data.getDate() + diasAdicionais);

    const resultado = data.toLocaleDateString('pt-BR');
    document.getElementById('resultado').value = resultado;
}

function copiarResultado() {
    const resultado = document.getElementById('resultado');
    resultado.select();
    document.execCommand('copy');
    alert('Resultado copiado para a área de transferência!');
}

function limparCampos() {
    document.getElementById('dataInicial').value = '';
    document.getElementById('diasAdicionais').value = '';
    document.getElementById('resultado').value = '';
}
