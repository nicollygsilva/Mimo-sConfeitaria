// Adiciona o evento de clique para os botões "Adicionar ao Carrinho"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.getAttribute('data-name');
        const itemPrice = parseFloat(button.getAttribute('data-price'));
        addToCart(itemName, itemPrice);
    });
});

// Inicializa o carrinho
let cart = [];
updateCartUI();

// Função para adicionar itens ao carrinho
function addToCart(name, price) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCartUI();
}

// Atualiza a interface do carrinho
function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        cartItems.innerHTML += `
            <li>${item.name} - R$${item.price.toFixed(2)} x ${item.quantity} = R$${itemTotal.toFixed(2)}</li>
        `;
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}

// Exibe o carrinho
document.getElementById('view-cart').addEventListener('click', () => {
    document.getElementById('cart-overlay').style.display = 'flex';
});

// Fecha o carrinho
document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart-overlay').style.display = 'none';
});

// Estilo e lógica do botão "Finalizar Compra" podem ser adicionados aqui
// por exemplo, um redirecionamento para uma página de checkout
document.getElementById('checkout').addEventListener('click', () => {
    alert('Funcionalidade de checkout ainda não implementada.');
    // Aqui você pode redirecionar para uma página de checkout ou realizar outras ações
});
