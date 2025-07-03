function calcularData() {
    const dataInicial = document.getElementById('dataInicial').value;
    const diasAdicionais = parseInt(document.getElementById('diasAdicionais').value);

    if (!dataInicial || isNaN(diasAdicionais)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Divide a data inicial (formato YYYY-MM-DD) em partes
    const partes = dataInicial.split('-');
    const ano = parseInt(partes[0]);
    const mes = parseInt(partes[1]) - 1; // Mês começa do zero
    const dia = parseInt(partes[2]);

    const data = new Date(ano, mes, dia);

    // Soma usando milissegundos para maior precisão
    const novaData = new Date(data.getTime() + diasAdicionais * 24 * 60 * 60 * 1000);

    const resultado = novaData.toLocaleDateString('pt-BR');
    document.getElementById('resultado').value = resultado;
}

function copiarResultado() {
    const resultado = document.getElementById('resultado').value;

    // Usa API moderna Clipboard
    navigator.clipboard.writeText(resultado).then(() => {
        alert('Resultado copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar: ', err);
        alert('Erro ao copiar para a área de transferência.');
    });
}

function limparCampos() {
    document.getElementById('dataInicial').value = '';
    document.getElementById('diasAdicionais').value = '';
    document.getElementById('resultado').value = '';
}
