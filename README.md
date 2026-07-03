# StepStyle E-Commerce Platform

## Premium Footwear Brand Website

A modern, fully responsive e-commerce platform for StepStyle - a premium footwear brand specializing in men's, women's, and children's shoes.

### Features

✅ **Modern UI Design**
- Black, white, and green color palette
- Minimalist and elegant design
- Smooth animations and transitions
- Fully responsive (desktop, tablet, mobile)

✅ **Product Management**
- 8+ shoe categories (sneakers, running, casual, formal, sandals, boots, slippers, sports)
- Advanced filtering (brand, size, color, price, gender, rating)
- Multiple sorting options
- Product details with zoom functionality
- Customer reviews and ratings

✅ **Shopping Features**
- Shopping cart with quantity management
- Wishlist functionality
- Product comparison
- Recently viewed products
- Flash sales with countdown timer

✅ **Payment Integration**
- M-Pesa STK Push (Safaricom Daraja API)
- Card payments (Visa/Mastercard)
- Cash on Delivery option
- Secure transaction logging

✅ **User Management**
- Secure JWT authentication
- User registration and login
- Password recovery
- Order history
- Saved delivery addresses
- Profile management

✅ **Admin Dashboard**
- Product management (CRUD)
- Inventory tracking
- Order management
- Customer management
- M-Pesa transaction monitoring
- Promotional discounts and coupons
- Sales reports and analytics

✅ **Additional Features**
- AI-powered product recommendations
- Live chat support
- Order tracking
- Multi-language support (English & Swahili)
- Multi-currency support (TZS & KES)
- Dark mode option
- SEO optimization
- WCAG accessibility compliance

---

## Tech Stack

**Frontend:**
- HTML5, JavaScript, Tailwind CSS
- Responsive design
- Dark mode support

**Backend:**
- Node.js with Express.js
- JWT Authentication
- RESTful API

**Database:**
- PostgreSQL

**Payments:**
- Safaricom Daraja API (M-Pesa)
- Stripe (Card payments)

---

## Installation & Setup

### Prerequisites
- Node.js v14+
- PostgreSQL v12+
- npm or yarn

### Steps

1. **Clone repository:**
```bash
git clone https://github.com/badnation71/hacker.git
cd hacker
```

2. **Install dependencies:**
```bash
npm install
```

3. **Setup environment:**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Setup database:**
```bash
psql -U postgres -f database/schema.sql
```

5. **Start server:**
```bash
npm run dev
```

Visit: http://localhost:3000

---

## API Documentation

Base URL: `http://localhost:3000/api`

### Auth Endpoints
- POST `/auth/register` - Register new user
- POST `/auth/login` - User login
- POST `/auth/forgot-password` - Password recovery
- POST `/auth/reset-password` - Reset password

### Products
- GET `/products` - Get all products
- GET `/products/:id` - Get product details
- GET `/categories` - Get categories

### Cart
- GET `/cart` - Get cart items
- POST `/cart/add` - Add to cart
- PUT `/cart/update/:id` - Update quantity
- DELETE `/cart/remove/:id` - Remove item

### Orders
- POST `/orders` - Create order
- GET `/orders` - Get user orders
- GET `/orders/:id` - Get order details

### Payments
- POST `/payments/mpesa-stk` - M-Pesa STK Push
- GET `/payments/:id/status` - Payment status
- POST `/payments/stripe` - Card payment

---

## Project Structure

```
stepstyle-ecommerce/
├── public/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   ├── cart.js
│   │   └── api.js
│   └── images/
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   └── server.js
├── database/
│   └── schema.sql
├── package.json
├── .env
└── README.md
```

---

## Browser Support

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers

---

## License

MIT License

---

## Support

Email: support@stepstyle.com
Phone: +255 123 456 789

---

**Built with ❤️ by StepStyle Team**