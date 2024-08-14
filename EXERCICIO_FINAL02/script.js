
document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');
    const cartCountElement = document.querySelector('.cart-icon .cart-count');
    const cartContainer = document.getElementById('cart-container');
    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart');
    const checkoutButton = document.getElementById('checkout');
    let cartCount = 0; 
    let cart = []; 
    
    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const products = await response.json();
            displayProducts(products);
        } catch (error) {
            console.error('Erro ao buscar os produtos:', error);
        }
    };

    const displayProducts = (products) => {
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>${product.price} €</p>
                <button data-id="${product.id}">Add to cart <i class="fas fa-cart-plus"></i></button>
            `;
            productsContainer.appendChild(productElement);
        });


        const buttons = document.querySelectorAll('.product button');
        buttons.forEach(button => {
            button.addEventListener('click', addToCart);
        });
    };

    const addToCart = async (event) => {
        const productId = event.target.dataset.id;
        const product = {
            productId: parseInt(productId),
            quantity: 1
        };

        try {
            const response = await fetch('https://fakestoreapi.com/carts/7', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: 1,
                    date: new Date().toISOString().split('T')[0],
                    products: [product]
                })
            });
            const result = await response.json();
            console.log('Produto adicionado ao carrinho:', result);
            cartCount++;
            cartCountElement.textContent = cartCount;
            addToCartLocal(productId);

        } catch (error) {
            console.error('Erro ao adicionar ao carrinho:', error);
        }
    };


    const addToCartLocal = (productId) => {
        const existingProduct = cart.find(item => item.productId == productId);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({
                productId: productId,
                quantity: 1
            });
        }
        updateCartDisplay();
    };

    const updateCartDisplay = () => {
        cartItemsContainer.innerHTML = '';

        cart.forEach(item => {
            fetch(`https://fakestoreapi.com/products/${item.productId}`)
                .then(response => response.json())
                .then(product => {
                    const cartItemElement = document.createElement('div');
                    cartItemElement.classList.add('cart-item');
                    cartItemElement.innerHTML = `
                        <img src="${product.image}" alt="${product.title}">
                        <div>
                            <p>${product.title}</p>
                            <p>${product.price} €</p>
                            <p>Quantidade: ${item.quantity}</p>
                        </div>
                    `;
                    cartItemsContainer.appendChild(cartItemElement);
                })
                .catch(error => console.error('Erro ao buscar detalhes do produto:', error));
        });
    };

    const clearCart = () => {
        cart = [];
        cartCount = 0;
        cartCountElement.textContent = cartCount;
        updateCartDisplay();
        console.log('Carrinho limpo');
    };

    const checkout = async () => {
        if (cart.length === 0) {
            alert('O carrinho está vazio!');
            return;
        }

        try {
            const response = await fetch('https://fakestoreapi.com/carts/7', {
                method: 'DELETE'
            });

            if (response.ok) {
                alert('Checkout realizado com sucesso!');
                clearCart();
            } else {
                throw new Error('Erro ao processar o checkout');
            }
        } catch (error) {
            console.error('Erro ao realizar o checkout:', error);
        }
    };

    document.querySelector('.cart-icon').addEventListener('click', () => {
        if (cartContainer.style.display === 'none' || !cartContainer.style.display) {
            cartContainer.style.display = 'block';
        } else {
            cartContainer.style.display = 'none';
        }
    });

    clearCartButton.addEventListener('click', clearCart);

    checkoutButton.addEventListener('click', checkout);

    fetchProducts();
});
