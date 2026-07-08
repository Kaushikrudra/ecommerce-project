# ⚜️ GUCCI ATELIER — Streetwear & Luxury E-Commerce

A premium, full-stack luxury e-commerce platform redesigned with a warm, dark chocolate and beige streetwear aesthetic. Built with a React frontend and Node.js/Express/MongoDB backend, it features a glassmorphic 3D background, category filtering, an editorial fashion lookbook, and interactive shopping cart workflows.

---

## 🎨 Design System & Visuals
* **Theme**: Timeless luxury Italian streetwear.
* **Palette**: Rich chocolate-mahogany backgrounds (`#0f0a08`), warm coffee cards (`#1c1410`), and rustic bronze borders (`#2c2018`).
* **Accents**: High-contrast warm champagne cream (`#fcfaf7`) buttons and text highlights.
* **Global 3D Background**: A pure-CSS atmospheric glow (`rgba(230, 200, 160, 0.25)`) featuring overlapping floating 3D pedestals that render responsively behind all pages.

---

## 🚀 Key Features

* **3D Glassmorphic Pedestals**: Reusable pure-CSS dark-geometric layout that renders floating 3D studio shapes behind the pages with zero image requests (highly optimized).
* **Live Product Filtering**: Dynamic query parameter filtering (`useSearchParams`) that lets you sort the original 13 Gucci catalog items (Apparel, Accessories, Home Decor) with interactive tabs.
* **Interactive Lookbook**: Editorial fashion walkthrough of seasonal designs (Look 01 to 04) with direct `"Shop the Look"` deep-links.
* **Stateful Cart & Badge Flow**: Announcements ticker, SVG navigation triggers, a real-time cart badge tracker, and interactive item removal.
* **Private Atelier Contact**: Secure communication console wired with responsive forms and custom toast alerts.
* **Robust Order Handling**: Fully responsive checkout billing page and order history logging connected to local contexts.

---

## 🛠️ Technology Stack

* **Frontend**: React (Create React App), Framer Motion, Vanilla CSS (Variables, Flexbox, CSS Grid), React Toastify, React Router 6.
* **Backend**: Node.js, Express.js.
* **Database**: MongoDB & Mongoose schemas.

---

## 📂 Project Structure

```bash
├── ecommerce-frontend/    # React SPA client application
│   ├── src/
│   │   ├── components/    # Navbar, Footer, PageWrapper layout
│   │   ├── context/       # CartContext, OrderContext global state
│   │   ├── pages/         # Home, Products, Lookbook, Contact, Cart, Checkout, Orders
│   │   ├── App.js         # Navigation routes mapping
│   │   └── index.css      # Design tokens, fonts, and 3D background styles
└── ecommerce-backend/     # Node/Express API server & MongoDB database
```

---

## 💻 Quick Start

### 1. Prerequisites
Ensure you have Node.js and MongoDB installed on your local machine.

### 2. Backend Server Setup
```bash
cd ecommerce-backend
npm install
npm start
```
*Runs at `http://localhost:5000`*

### 3. Frontend App Setup
```bash
cd ecommerce-frontend
npm install
npm start
```
*Runs at `http://localhost:3000`*

---

## ⚜️ Author & License
Developed as a premium bespoke design for **Gucci Atelier** streetwear concept. All rights reserved.
