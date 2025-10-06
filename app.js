const products = [
  {
    id: 1,
    name: 'Trufa Tradicional',
    flavors: ['Chocolate ao Leite', 'Chocolate Branco', 'Meio Amargo'],
    price: 3.50,
    image: 'https://images.pexels.com/photos/5949893/pexels-photo-5949893.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Trufas',
    description: 'Trufas clássicas feitas com chocolate belga de alta qualidade'
  },
  {
    id: 2,
    name: 'Trufa Premium',
    flavors: ['Nutella', 'Pistache', 'Caramelo Salgado', 'Maracujá'],
    price: 5.00,
    image: 'https://images.pexels.com/photos/3735174/pexels-photo-3735174.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Trufas',
    description: 'Trufas sofisticadas com recheios especiais e coberturas artesanais'
  },
  {
    id: 3,
    name: 'Trufa Especial',
    flavors: ['Champagne', 'Red Velvet', 'Limão Siciliano', 'Café Gourmet'],
    price: 6.50,
    image: 'https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Trufas',
    description: 'Edição especial com sabores exclusivos e ingredientes premium'
  },
  {
    id: 4,
    name: 'Brigadeiro Gourmet',
    flavors: ['Tradicional', 'Beijinho', 'Morango', 'Oreo'],
    price: 4.00,
    image: 'https://receitadaboa.com.br/wp-content/uploads/2024/08/Imagem-ilustrativa-de-brigadeiro-gourmet.webp',
    category: 'Brigadeiros',
    description: 'Brigadeiros cremosos feitos com ingredientes selecionados'
  },
  {
    id: 5,
    name: 'Brigadeiro Premium',
    flavors: ['Paçoca', 'Ninho', 'Nutella', 'Doce de Leite'],
    price: 5.50,
    image: 'https://atelierdossabores.com.br/centro-tijuca/wp-content/uploads/sites/7/2020/07/DOCINHO-BRIGADEIRO-GOURMET-ATELIER-DOS-SABORES-2.jpg',
    category: 'Brigadeiros',
    description: 'Brigadeiros sofisticados com coberturas nobres'
  },
  {
    id: 6,
    name: 'Coxinha Trufada',
    flavors: ['Frango com Catupiry', 'Carne Seca', 'Camarão'],
    price: 8.00,
    image: 'https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Salgados',
    description: 'Coxinhas recheadas com massa trufada e ingredientes nobres'
  },
  {
    id: 7,
    name: 'Risole Trufado',
    flavors: ['Camarão', 'Queijo Brie', 'Cogumelos'],
    price: 7.50,
    image: 'https://images.pexels.com/photos/5638527/pexels-photo-5638527.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Salgados',
    description: 'Risoles crocantes com recheios cremosos e trufados'
  },
  {
    id: 8,
    name: 'Brownie Trufado',
    flavors: ['Chocolate Belga', 'Chocolate Branco', 'Cookies & Cream'],
    price: 12.00,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPEhWaQ9QMOJZFVjFzi7jezSE9qRyvqO-3gyS3OAPhdalM6rF4HfhENs6XZ8g6xVwXS5g&usqp=CAU',
    category: 'Brownies',
    description: 'Brownies úmidos e intensos com ganache trufado'
  },
  {
    id: 9,
    name: 'Brownie Recheado',
    flavors: ['Doce de Leite', 'Nutella', 'Morango'],
    price: 14.00,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTP7eNEI5BurRpDAFT-C6aJKL8OASiKv4rQ&s',
    category: 'Brownies',
    description: 'Brownies com recheios cremosos e irresistíveis'
  },
  {
    id: 10,
    name: 'Bolo no Pote',
    flavors: ['Prestígio', 'Churros', 'Ninho com Nutella', 'Paçoca'],
    price: 15.00,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Bolos',
    description: 'Bolos em camadas servidos em potes individuais'
  },
  {
    id: 11,
    name: 'Bolo Trufado',
    flavors: ['Chocolate', 'Morango', 'Limão', 'Maracujá'],
    price: 18.00,
    image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Bolos',
    description: 'Bolos fofos com cobertura trufada e recheios generosos'
  },
  {
    id: 12,
    name: 'Palha Italiana',
    flavors: ['Chocolate', 'Morango', 'Limão'],
    price: 10.00,
    image: 'https://s2-receitas.glbimg.com/nfUJPPyYVp4yFSj0uBesuqa35xc=/1280x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/Z/I/CKOjKFTDWHghhvRc7uoA/palha-italiana-receita.jpg',
    category: 'Sobremesas',
    description: 'Sobremesa cremosa em camadas servida em taça'
  }
];

let cart = [];
const categories = [...new Set(products.map(p => p.category))];

// Cache de elementos DOM para melhor performance
const domElements = {
  cartBadge: null,
  categoryNav: null,
  productsContainer: null,
  cartItems: null,
  cartFooter: null,
  cartSidebar: null,
  cartOverlay: null,
  categorySidebar: null,
  categoryOverlay: null,
  menuIcon: null,
  closeIcon: null,
  checkoutModal: null,
  checkoutOverlay: null,
  orderSummary: null,
  checkoutForm: null
};

function init() {
  // Inicializar cache de elementos DOM
  initializeDOMElements();
  
  if (!validateDOMElements()) {
    console.error('Elementos DOM essenciais não encontrados');
    return;
  }
  
  renderCategories();
  renderProducts();
  updateCartBadge();
}

function initializeDOMElements() {
  domElements.cartBadge = document.getElementById('cartBadge');
  domElements.categoryNav = document.getElementById('categoryNav');
  domElements.productsContainer = document.getElementById('productsContainer');
  domElements.cartItems = document.getElementById('cartItems');
  domElements.cartFooter = document.getElementById('cartFooter');
  domElements.cartSidebar = document.getElementById('cartSidebar');
  domElements.cartOverlay = document.getElementById('cartOverlay');
  domElements.categorySidebar = document.getElementById('categorySidebar');
  domElements.categoryOverlay = document.getElementById('categoryOverlay');
  domElements.menuIcon = document.getElementById('menuIcon');
  domElements.closeIcon = document.getElementById('closeIcon');
  domElements.checkoutModal = document.getElementById('checkoutModal');
  domElements.checkoutOverlay = document.getElementById('checkoutOverlay');
  domElements.orderSummary = document.getElementById('orderSummary');
  domElements.checkoutForm = document.getElementById('checkoutForm');
}

function validateDOMElements() {
  const requiredElements = [
    'cartBadge', 'categoryNav', 'productsContainer', 'cartItems',
    'cartFooter', 'cartSidebar', 'cartOverlay', 'categorySidebar',
    'categoryOverlay', 'menuIcon', 'closeIcon', 'checkoutModal',
    'checkoutOverlay', 'orderSummary', 'checkoutForm'
  ];
  
  return requiredElements.every(key => {
    const element = domElements[key];
    if (!element) {
      console.error(`Elemento não encontrado: ${key}`);
      return false;
    }
    return true;
  });
}

function renderCategories() {
  const { categoryNav } = domElements;
  if (!categoryNav) return;
  
  categoryNav.innerHTML = categories.map(category => `
    <button class="category-button" onclick="scrollToCategory('${category}')">
      ${category}
    </button>
  `).join('');
}

function renderProducts() {
  const { productsContainer } = domElements;
  if (!productsContainer) return;
  
  productsContainer.innerHTML = categories.map(category => {
    const categoryProducts = products.filter(p => p.category === category);
    
    if (categoryProducts.length === 0) return '';
    
    return `
      <div class="category-section" id="category-${category}">
        <h3 class="section-title">${category}</h3>
        <div class="products-grid">
          ${categoryProducts.map(product => createProductCard(product)).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function createProductCard(product) {
  if (!product || !product.id) {
    console.error('Produto inválido:', product);
    return '';
  }
  
  return `
    <div class="product-card">
      <div class="product-image-container">
        <img src="${product.image || ''}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/300x200?text=Imagem+Indisponível'">
        <div class="product-category-badge">${product.category}</div>
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="flavors-section">
          <p class="flavors-label">Sabores disponíveis:</p>
          <div class="flavors-container">
            ${(product.flavors || []).map(flavor => `
              <span class="flavor-tag">${flavor}</span>
            `).join('')}
          </div>
        </div>
        <div class="product-footer">
          <div>
            <p class="price-label">Preço</p>
            <p class="product-price">R$ ${(product.price || 0).toFixed(2)}</p>
          </div>
          <button class="add-to-cart-button" onclick="addToCart(${product.id})" aria-label="Adicionar ${product.name} ao carrinho">
            <svg class="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            Adicionar
          </button>
        </div>
      </div>
    </div>
  `;
}

function addToCart(productId) {
  if (!productId) {
    console.error('ID do produto não fornecido');
    return;
  }
  
  const product = products.find(p => p.id === productId);
  if (!product) {
    console.error(`Produto com ID ${productId} não encontrado`);
    return;
  }
  
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ 
      ...product, 
      quantity: 1 
    });
  }

  updateCartBadge();
  renderCart();
  
  // Feedback visual
  showAddToCartFeedback(product.name);
}

function showAddToCartFeedback(productName) {
  // Poderia implementar um toast notification aqui
  console.log(`✅ ${productName} adicionado ao carrinho!`);
}

function updateQuantity(productId, quantity) {
  if (!productId || quantity === undefined) {
    console.error('Parâmetros inválidos para updateQuantity');
    return;
  }
  
  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = quantity;
    renderCart();
    updateCartBadge();
  }
}

function removeFromCart(productId) {
  if (!productId) return;
  
  cart = cart.filter(item => item.id !== productId);
  renderCart();
  updateCartBadge();
}

function updateCartBadge() {
  const { cartBadge } = domElements;
  if (!cartBadge) return;
  
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
  cartBadge.textContent = totalItems;
  
  // Adicionar classe quando houver itens
  cartBadge.classList.toggle('has-items', totalItems > 0);
}

function renderCart() {
  const { cartItems, cartFooter } = domElements;
  if (!cartItems || !cartFooter) return;

  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="cart-empty">Seu carrinho está vazio</div>';
    cartFooter.innerHTML = '';
    return;
  }

  const total = cart.reduce((sum, item) => {
    const itemTotal = (item.price || 0) * (item.quantity || 0);
    return sum + itemTotal;
  }, 0);

  cartItems.innerHTML = `
    <div class="cart-items">
      ${cart.map(item => createCartItem(item)).join('')}
    </div>
  `;

  cartFooter.innerHTML = createCartFooter(total);
}

function createCartItem(item) {
  if (!item) return '';
  
  return `
    <div class="cart-item">
      <div class="cart-item-content">
        <img src="${item.image || ''}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/60x60?text=Imagem'">
        <div class="cart-item-info">
          <h3 class="cart-item-name">${item.name}</h3>
          <p class="cart-item-category">${item.category}</p>
          <p class="cart-item-price">R$ ${(item.price || 0).toFixed(2)}</p>
        </div>
      </div>
      <div class="cart-item-footer">
        <div class="quantity-control">
          <button class="quantity-button" onclick="updateQuantity(${item.id}, ${item.quantity - 1})" aria-label="Diminuir quantidade">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
            </svg>
          </button>
          <span class="quantity-value">${item.quantity}</span>
          <button class="quantity-button" onclick="updateQuantity(${item.id}, ${item.quantity + 1})" aria-label="Aumentar quantidade">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
        </div>
        <button class="remove-button" onclick="removeFromCart(${item.id})" aria-label="Remover item">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
        </button>
      </div>
    </div>
  `;
}

function createCartFooter(total) {
  return `
    <div class="cart-total">
      <span class="total-label">Total</span>
      <span class="total-value">R$ ${total.toFixed(2)}</span>
    </div>
    <button class="checkout-button" onclick="openCheckoutModal()">Finalizar Pedido</button>
  `;
}

function toggleCart() {
  const { cartSidebar, cartOverlay } = domElements;
  if (!cartSidebar || !cartOverlay) return;
  
  cartSidebar.classList.toggle('active');
  cartOverlay.classList.toggle('active');

  if (cartSidebar.classList.contains('active')) {
    renderCart();
  }
}

function toggleCategoryMenu() {
  const { categorySidebar, categoryOverlay, menuIcon, closeIcon } = domElements;
  if (!categorySidebar || !categoryOverlay || !menuIcon || !closeIcon) return;
  
  categorySidebar.classList.toggle('active');
  categoryOverlay.classList.toggle('active');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
}

function scrollToCategory(category) {
  if (!category) return;
  
  const element = document.getElementById(`category-${category}`);
  if (element) {
    const yOffset = -100;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    toggleCategoryMenu();
  }
}

function openCheckoutModal() {
  const { checkoutModal, checkoutOverlay, orderSummary } = domElements;
  if (!checkoutModal || !checkoutOverlay || !orderSummary) return;
  
  const total = cart.reduce((sum, item) => {
    const itemTotal = (item.price || 0) * (item.quantity || 0);
    return sum + itemTotal;
  }, 0);

  orderSummary.innerHTML = createOrderSummary(total);

  checkoutModal.classList.add('active');
  checkoutOverlay.classList.add('active');
  toggleCart();
}

function createOrderSummary(total) {
  return `
    <div class="summary-content">
      ${cart.map(item => `
        <div class="summary-item">
          <span class="summary-item-name">${item.quantity}x ${item.name}</span>
          <span class="summary-item-price">R$ ${((item.price || 0) * (item.quantity || 0)).toFixed(2)}</span>
        </div>
      `).join('')}
      <div class="summary-total">
        <span class="summary-total-label">Total</span>
        <span class="summary-total-value">R$ ${total.toFixed(2)}</span>
      </div>
    </div>
  `;
}

function closeCheckoutModal() {
  const { checkoutModal, checkoutOverlay, checkoutForm } = domElements;
  if (!checkoutModal || !checkoutOverlay || !checkoutForm) return;
  
  checkoutModal.classList.remove('active');
  checkoutOverlay.classList.remove('active');
  checkoutForm.reset();
}

function handleCheckoutSubmit(event) {
  event.preventDefault();

  const { checkoutForm } = domElements;
  if (!checkoutForm) return;

  const customerName = document.getElementById('customerName')?.value;
  const paymentMethod = document.getElementById('paymentMethod')?.value;
  
  if (!customerName || !paymentMethod) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  const total = cart.reduce((sum, item) => {
    const itemTotal = (item.price || 0) * (item.quantity || 0);
    return sum + itemTotal;
  }, 0);

  sendOrderToWhatsApp(customerName, paymentMethod, cart, total);

  // Limpar carrinho após envio
  cart = [];
  updateCartBadge();
  closeCheckoutModal();
  
  // Feedback ao usuário
  alert('Pedido enviado com sucesso! Você será redirecionado para o WhatsApp.');
}

function sendOrderToWhatsApp(customerName, paymentMethod, items, total) {
  const phoneNumber = '556182188478';

  let message = `*🎉 NOVO PEDIDO - Delícias da Mah*\n\n`;
  message += `👤 *Cliente:* ${customerName}\n`;
  message += `💳 *Forma de Pagamento:* ${paymentMethod}\n\n`;
  message += `*📋 Itens do Pedido:*\n`;

  items.forEach((item, index) => {
    message += `\n${index + 1}. *${item.name}*\n`;
    message += `   • Categoria: ${item.category}\n`;
    message += `   • Quantidade: ${item.quantity}\n`;
    message += `   • Valor Unitário: R$ ${(item.price || 0).toFixed(2)}\n`;
    message += `   • Subtotal: R$ ${((item.price || 0) * (item.quantity || 0)).toFixed(2)}\n`;
  });

  message += `\n━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 *TOTAL: R$ ${total.toFixed(2)}*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
}

// Adicionar event listeners para teclado
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeCheckoutModal();
    const { cartSidebar } = domElements;
    if (cartSidebar?.classList.contains('active')) {
      toggleCart();
    }
    if (domElements.categorySidebar?.classList.contains('active')) {
      toggleCategoryMenu();
    }
  }
});

window.onload = init;
