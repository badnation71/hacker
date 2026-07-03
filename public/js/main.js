// StepStyle E-commerce Main JavaScript

const products = [
  {
    id: 1,
    name: 'Premium Running Shoes',
    category: 'running',
    price: 9999,
    originalPrice: 14999,
    rating: 4.5,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    colors: ['Black', 'White', 'Blue'],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    gender: 'male',
    inStock: true,
    discount: 33
  },
  {
    id: 2,
    name: 'Classic Sneakers',
    category: 'sneakers',
    price: 7999,
    originalPrice: 10999,
    rating: 4.8,
    reviews: 256,
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=400&fit=crop',
    colors: ['White', 'Black', 'Red'],
    sizes: ['5', '6', '7', '8', '9', '10', '11'],
    gender: 'unisex',
    inStock: true,
    discount: 27
  },
  {
    id: 3,
    name: 'Women\'s Casual Shoes',
    category: 'casual',
    price: 5999,
    originalPrice: 8999,
    rating: 4.6,
    reviews: 182,
    image: 'https://images.unsplash.com/photo-1543163521-9efcc06814d7?w=400&h=400&fit=crop',
    colors: ['Pink', 'White', 'Black'],
    sizes: ['4', '5', '6', '7', '8', '9'],
    gender: 'female',
    inStock: true,
    discount: 33
  },
  {
    id: 4,
    name: 'Formal Dress Shoes',
    category: 'formal',
    price: 12999,
    originalPrice: 16999,
    rating: 4.7,
    reviews: 94,
    image: 'https://images.unsplash.com/photo-1543163521-9efcc06814d7?w=400&h=400&fit=crop',
    colors: ['Black', 'Brown', 'Tan'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    gender: 'male',
    inStock: true,
    discount: 24
  },
  {
    id: 5,
    name: 'Kids Colorful Sneakers',
    category: 'kids',
    price: 3999,
    originalPrice: 5999,
    rating: 4.4,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1560343090-0dd3f0e51db9?w=400&h=400&fit=crop',
    colors: ['Rainbow', 'Blue', 'Pink'],
    sizes: ['1', '2', '3', '4', '5'],
    gender: 'kids',
    inStock: true,
    discount: 33
  },
  {
    id: 6,
    name: 'Sports Basketball Shoes',
    category: 'sports',
    price: 11999,
    originalPrice: 16999,
    rating: 4.9,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    colors: ['Black', 'Red', 'White'],
    sizes: ['7', '8', '9', '10', '11', '12', '13'],
    gender: 'unisex',
    inStock: true,
    discount: 29
  },
  {
    id: 7,
    name: 'Comfortable Sandals',
    category: 'sandals',
    price: 2999,
    originalPrice: 4999,
    rating: 4.3,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    colors: ['Brown', 'Black', 'Tan'],
    sizes: ['5', '6', '7', '8', '9', '10', '11'],
    gender: 'unisex',
    inStock: true,
    discount: 40
  },
  {
    id: 8,
    name: 'Winter Boots',
    category: 'boots',
    price: 13999,
    originalPrice: 19999,
    rating: 4.7,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    colors: ['Brown', 'Black', 'Tan'],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    gender: 'unisex',
    inStock: false,
    discount: 30
  }
];

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
  });

  if (localStorage.getItem('darkMode') === 'true') {
    document.documentElement.classList.add('dark');
  }
}

// Countdown Timer
function initCountdown() {
  const countdownElement = document.getElementById('countdown');
  if (!countdownElement) return;

  const setCountdown = () => {
    const now = new Date().getTime();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const distance = tomorrow.getTime() - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
      <div class="flex gap-4 justify-center">
        <div class="text-center">
          <div class="text-3xl font-bold text-red-600">${hours}</div>
          <div class="text-sm text-gray-700">Hours</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-red-600">${minutes}</div>
          <div class="text-sm text-gray-700">Minutes</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-red-600">${seconds}</div>
          <div class="text-sm text-gray-700">Seconds</div>
        </div>
      </div>
    `;
  };

  setCountdown();
  setInterval(setCountdown, 1000);
}

// Product Grid Rendering
function renderProducts(productsToRender = products, containerId = 'productGrid') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = productsToRender.map(product => `
    <div class="product-card bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
      <div class="relative overflow-hidden h-48 bg-gray-200 dark:bg-gray-700">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
        ${product.discount > 0 ? `<div class="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">-${product.discount}%</div>` : ''}
        ${!product.inStock ? `<div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"><span class="text-white font-bold">Out of Stock</span></div>` : ''}
      </div>
      <div class="p-4">
        <p class="text-xs text-gray-500 dark:text-gray-400 uppercase mb-2">${product.category}</p>
        <h3 class="font-semibold text-lg mb-2 line-clamp-2">${product.name}</h3>
        <div class="flex items-center gap-2 mb-3">
          <span class="text-yellow-500">★★★★★</span>
          <span class="text-sm text-gray-600 dark:text-gray-400">(${product.reviews})</span>
        </div>
        <div class="flex items-center gap-2 mb-4">
          <span class="text-xl font-bold text-green-600">TZS ${product.price.toLocaleString()}</span>
          <span class="text-sm text-gray-500 line-through">TZS ${product.originalPrice.toLocaleString()}</span>
        </div>
        <div class="flex gap-2">
          <button onclick="addToCart(${product.id})" class="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded transition font-semibold">Add Cart</button>
          <button onclick="viewProduct(${product.id})" class="flex-1 border-2 border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-gray-700 py-2 rounded transition font-semibold">Details</button>
        </div>
      </div>
    </div>
  `).join('');
}

// View Product Details
function viewProduct(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('productModal');
  const modalContent = document.getElementById('modalContent');
  
  modalContent.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <img src="${product.image}" alt="${product.name}" class="w-full rounded-lg mb-4">
      </div>
      <div>
        <h2 class="text-2xl font-bold mb-2">${product.name}</h2>
        <div class="flex items-center gap-2 mb-4">
          <span class="text-yellow-500">★★★★★</span>
          <span class="text-gray-600 dark:text-gray-400">(${product.reviews} reviews)</span>
        </div>
        <div class="text-2xl font-bold text-green-600 mb-4">TZS ${product.price.toLocaleString()}</div>
        <p class="text-gray-700 dark:text-gray-300 mb-4">Premium quality footwear designed for comfort and style.</p>
        <div class="mb-4">
          <label class="block text-sm font-semibold mb-2">Select Size:</label>
          <select class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded">
            ${product.sizes.map(size => `<option value="${size}">Size ${size}</option>`).join('')}
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-semibold mb-2">Quantity:</label>
          <input type="number" min="1" max="10" value="1" id="quantityInput" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded">
        </div>
        <button onclick="addToCart(${product.id}, document.getElementById('quantityInput').value)" class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold mb-2 transition">Add to Cart</button>
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
}

// Close Modal
function closeModal() {
  const modal = document.getElementById('productModal');
  modal.classList.add('hidden');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products.slice(0, 4), 'productGrid');
  renderProducts(products.slice(0, 4), 'bestSellersGrid');
  initCountdown();
});