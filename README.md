# SHOPPING_CART_APP 🛒

## 🚀 Overview
SHOPPING_CART_APP is a modern and scalable e-commerce web application built with Vite, Tailwind CSS, Express.js, Stripe, Google & GitHub Auth, Firebase, PostgreSQL, and Prisma. It provides a seamless shopping experience for users with secure authentication, smooth UI, and integrated payment solutions.

## ✨ Features
- ✅ **User Authentication** (Google & GitHub Login)
- ✅ **Product Listing & Details**
- ✅ **Shopping Cart & Checkout**
- ✅ **Stripe Payment Integration 💳**
- ✅ **Responsive & Fast UI**
- ✅ **PostgreSQL Database with Prisma ORM**

## 🛠️ Technologies Used
- ⚡ Vite (Frontend)
- 🟢 Express.js (Backend)
- 🐘 PostgreSQL (Database)
- 🔥 Firebase (Authentication & Storage)
- ▲ Vercel (Frontend Deployment)
- 🎨 Tailwind CSS (Styling)
- 💳 Stripe API (Payments)
- 🌱 Prisma ORM (Database Management)
- 🌍 Google & GitHub Auth (OAuth Authentication)
- 🚀 Render (Backend Deployment)

## 📁 Project Structure
```
SHOPPING_CART_APP/
├── client/           # Frontend with Vite + React
│   ├── public/       # Static assets
│   ├── src/          # Components & pages
│   ├── .env          # Frontend environment variables
│   ├── package.json  # Frontend dependencies
│   └── vite.config.js
├── admin/           # Backend with Express & Prisma
│   ├── prisma/       # Database schema & migrations
│   ├── src/          # API routes & controllers
│   ├── .env          # Backend environment variables
│   ├── package.json  # Backend dependencies
│   └── index.js
├── README.md         # Project documentation
└── LICENSE           # Project license
```

## 📥 Installation & Setup
To run this project locally, follow these steps:

### 1️⃣ Clone the repository
```bash
git clone https://github.com/sarahmaheen/SHOPPING_CART_APP.git
cd SHOPPING_CART_APP
```

### 2️⃣ Install dependencies
```bash
# Frontend
cd client
npm install

# Backend
cd ../admin
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in both `client/` and `admin/` directories with the necessary variables.

#### **📂 Admin `.env` (Backend)**
```ini
# Server Port
PORT=8000

# Database Configuration (PostgreSQL)
DATABASE_URL=your_database_url

# CORS Settings
ORIGIN=http://localhost:5173  # Update this after deploying the frontend

# Stripe API Key (For Payment Gateway)
STRIPE_SECRET_KEY=your_stripe_secret_key

# Email Service (Brevo API)
BREVO_API_KEY=your_brevo_api_key
SENDER_EMAIL=your_email@yourdomain.com
```

#### **📂 Client `.env` (Frontend)**
```ini
# Backend API URL
VITE_PUBLIC_URL=your_backend_api_url

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id

# Firebase Authentication Provider
VITE_FIREBASE_AUTH_PROVIDER="google"

# Enable Firestore (If using Firestore database)
VITE_FIREBASE_FIRESTORE=true

# Enable Firebase Storage (If using file storage)
VITE_FIREBASE_STORAGE=true

# GitHub Authentication
VITE_GITHUB_CLIENT_ID=your_github_client_id
VITE_GITHUB_CLIENT_SECRET=your_github_client_secret
```

### 4️⃣ Start Development Servers
```bash
# Start Backend (Server)
cd server
npm run dev

# Start Frontend (Client)
cd ../client
npm run dev
```
🌐 App will run at: [http://localhost:3000](http://localhost:3000)

---

## 🌍 Deployment

### 🚀 **Deploy Frontend (Vercel)**
1. Push the latest code to GitHub
2. Connect the repository to **Vercel**
3. Set the root directory to `client/`
4. Configure:
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Add environment variables
6. Click **Deploy**

### 🚀 **Deploy Backend (Render)**
1. Push the latest code to GitHub
2. Create a **new web service** in **Render**
3. Set the root directory to `server/`
4. Configure:
   - **Start Command:** `npm start`
   - **Environment Variables:** Paste from `.env`
5. Click **Deploy**

---

## 🤝 Contributing
Want to contribute? Follow these steps:
1. **Fork** the repository
2. **Clone** it:
   ```bash
   git clone https://github.com/sarahmaheen/SHOPPING_CART_APP.git
   ```
3. **Create a new branch**:
   ```bash
   git checkout -b feature-xyz
   ```
4. **Commit changes**:
   ```bash
   git commit -m "Added XYZ feature"
   ```
5. **Push to your branch**:
   ```bash
   git push origin feature-xyz
   ```
6. **Open a Pull Request** 🚀

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🎉 Acknowledgements
🔹 Beautifully created by **Sarah Maheen** 💖

