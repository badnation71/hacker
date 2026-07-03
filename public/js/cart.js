// Shopping Cart Functionality

class ShoppingCart {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    this.updateCartCount();
  }

  addItem(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = this.cart.find(item => item.id === productId);
    
    if (existingItem) {
      existingItem.quantity += parseInt(quantity);
    } else {
      this.cart.push({
        ...product,
        quantity: parseInt(quantity),
        addedAt: new Date().toISOString()
      });
    }

    this.save();
    this.showNotification(`Added ${product.name} to cart!`);
  }

  removeItem(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.save();
  }

  updateQuantity(productId, quantity) {
    const item = this.cart.find(item => item.id === productId);
    if (item) {
      item.quantity = parseInt(quantity);
      if (item.quantity <= 0) {
        this.removeItem(productId);
      } else {
        this.save();
      }
    }
  }

  getCart() {
    return this.cart;
  }

  getTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getItemCount() {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }

  save() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.updateCartCount();
  }

  updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
      cartCount.textContent = this.getItemCount();
    }
  }

  clear() {
    this.cart = [];
    this.save();
  }

  showNotification(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
}

const cart = new ShoppingCart();

function addToCart(productId, quantity = 1) {
  cart.addItem(productId, quantity);
}

function removeFromCart(productId) {
  cart.removeItem(productId);
}