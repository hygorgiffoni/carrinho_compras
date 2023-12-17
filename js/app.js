let total;
limpar();

// cria a função para adicionar o produto
function adicionar() {
    // recuperar nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    // verifica se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }
    // calcular o preço e o subtotal do produto
    let subtotal = quantidade * valorProduto;
    // adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML +
    `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
    </section>`;
    // atualizar o valor total da compra
    total = total + subtotal;
    let carrinhoTotal = document.getElementById('valor-total');
    carrinhoTotal.textContent = `R$ ${total}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}