function atualizarPedidos() {
    const quantidade = document.getElementById('quantidadePedidos').value;
    const pedidosContainer = document.getElementById('pedidosContainer');
    
    // Limpa a área de pedidos
    pedidosContainer.innerHTML = '';

    // Cria novos campos de pedido
    for (let i = 0; i < quantidade; i++) {
        const pedidoSection = document.createElement('div');
        pedidoSection.classList.add('pedido-section');
        
        // Adiciona as seções de pedido (espeto, arroz, acompanhamentos)
        pedidoSection.innerHTML = `
            <h3>Pedido ${i + 1}</h3>
            <h4>Escolha o Espeto:</h4>
            <label><input type="radio" name="espeto_${i}" class="espeto" data-nome="Gado" data-preco="18"> Gado - R$18,00</label><br>
            <label><input type="radio" name="espeto_${i}" class="espeto" data-nome="Frango" data-preco="15"> Frango - R$15,00</label><br>
            <label><input type="radio" name="espeto_${i}" class="espeto" data-nome="Toscana" data-preco="15"> Toscana - R$15,00</label><br>
            <label><input type="radio" name="espeto_${i}" class="espeto" data-nome="Gado e Toscana" data-preco="15"> Gado e Toscana - R$15,00</label><br>
            <label><input type="radio" name="espeto_${i}" class="espeto" data-nome="Gado e Frango" data-preco="15"> Gado e Frango - R$15,00</label><br>
            <label><input type="radio" name="espeto_${i}" class="espeto" data-nome="Toscana e Frango" data-preco="15"> Toscana e Frango - R$15,00</label><br>
            <label><input type="radio" name="espeto_${i}" class="espeto" data-nome="Gado, Frango e Toscana" data-preco="15"> Gado, Frango e Toscana - R$15,00</label><br>
            
            <h4>Escolha o Arroz:</h4>
            <label><input type="radio" name="arroz_${i}" class="arroz" data-nome="Baião de Dois"> Baião de Dois</label><br>
            <label><input type="radio" name="arroz_${i}" class="arroz" data-nome="Arroz de Cenoura"> Arroz de Cenoura</label><br>
            <label><input type="radio" name="arroz_${i}" class="arroz" data-nome="Sem arroz"> Sem Arroz</label><br>
            
            <h4>Escolha os Acompanhamentos:</h4>
            <label><input type="checkbox" class="acompanhamentos" data-nome="Salada"> Salada</label><br>
            <label><input type="checkbox" class="acompanhamentos" data-nome="Purê de Batata"> Purê de Batata</label><br>
            <label><input type="checkbox" class="acompanhamentos" data-nome="Farofa"> Farofa</label>
            <label><input type="checkbox" class="acompanhamentos" data-nome="Vatapá de Camarão"> Vatapá de Camarão sem pimenta</label><br>
            <label><input type="checkbox" class="acompanhamentos" data-nome="Vatapá de Camarão"> Vatapá de Camarão com pimenta</label><br>
        `;
        
        pedidosContainer.appendChild(pedidoSection);
    }
}

function finalizarPedido() {
    const espetoSelecionado = [];
    const arrozSelecionado = [];
    const acompanhamentosSelecionado = [];
    let algumItemSelecionado = false;
    let mensagem = "Olá, gostaria de fazer um pedido no Espetinho Delivery ZD:\n";

    // Iterando sobre todos os pedidos
    const pedidos = document.querySelectorAll('.pedido-section');
    pedidos.forEach((pedido, index) => {
        let espeto = [];
        let arroz = [];
        let acompanhamentos = [];

        // Coletando os itens selecionados de espeto
        pedido.querySelectorAll('.espeto:checked').forEach(function(espetoItem) {
            espeto.push(espetoItem.getAttribute('data-nome'));
            algumItemSelecionado = true;
        });

        // Coletando os itens selecionados de arroz
        pedido.querySelectorAll('.arroz:checked').forEach(function(arrozItem) {
            arroz.push(arrozItem.getAttribute('data-nome'));
            algumItemSelecionado = true;
        });

        // Coletando os itens selecionados de acompanhamentos
        pedido.querySelectorAll('.acompanhamentos:checked').forEach(function(acompanhamentoItem) {
            acompanhamentos.push(acompanhamentoItem.getAttribute('data-nome'));
            algumItemSelecionado = true;
        });

        // Verificando se pelo menos uma opção foi selecionada em cada categoria
        if (espeto.length === 0 || arroz.length === 0 || acompanhamentos.length === 0) {
            alert('Você deve escolher ao menos um espeto, um arroz e um acompanhamento para finalizar o pedido!');
            return;
        }

        // Adicionando os detalhes do pedido na mensagem
        mensagem += `\n\nPedido ${index + 1}:\n`;
        mensagem += `Espetos: ${espeto.join(", ")}\n`;
        mensagem += `Arroz: ${arroz.join(", ")}\n`;
        mensagem += `Acompanhamentos: ${acompanhamentos.join(", ")}\n`;
    });

    // Verificando se algum item foi selecionado
    if (!algumItemSelecionado) {
        alert('Você deve escolher ao menos um item em cada categoria para finalizar o pedido!');
        return;
    }

    // Encaminhando para o WhatsApp com a mensagem
    const numeroWhatsApp = "5511999999999"; // Substitua pelo seu número de WhatsApp (com DDD)
    const urlWhatsApp = `https://wa.me/${5598985349559}?text=${encodeURIComponent(mensagem)}`;
    
    // Abrir o WhatsApp
    window.open(urlWhatsApp, "_blank");
}
