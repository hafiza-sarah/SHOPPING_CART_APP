🛒 SHOPPING_CART_APP

📢 SHOPPING_CART_APP is a modern and scalable e-commerce web application. Built with Vite, Tailwind CSS, Express.js, Stripe, Google & GitHub Auth, Firebase, PostgreSQL, and Prisma, it provides a seamless shopping experience for users.

🚀 Live Demo: https://shopping-cart-app-sandy-seven.vercel.app/

📌 Features
✅ User Authentication (Google & GitHub Login)
✅ Product Listing & details
✅ Shopping Cart & Checkout
✅ Stripe Payment Integration 💳
✅ Responsive & Fast UI
✅ PostgreSQL Database with Prisma ORM

🛠️ Technologies Used

⚡ Vite	
🟢 Express.js	
🐘 PostgreSQL	
🔥 Firebase	
▲ Vercel
🎨 Tailwind CSS	
💳 Stripe API	
🌱 Prisma ORM	
🌍 Google & GitHub Auth	
🚀 Render
📁 Project Structure
bash
Copy
Edit
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
🚀 Installation
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/sarahmaheen/SHOPPING_CART_APP.git
cd SHOPPING_CART_APP
2️⃣ Install Dependencies
bash
Copy
Edit
# Frontend
cd client
npm install

# Backend
cd ../admin
npm install
3️⃣ Set Up Environment Variables
🔹 Create a .env file in both client/ and admin/ directories with necessary variables.
📌 Example:

ini
Copy
Edit
# Admin .env
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


# Client .env.local
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

4️⃣ Start Development Servers
bash
Copy
Edit
# Start Backend (Server)
cd server
npm run dev

# Start Frontend (Client)
cd ../client
npm run dev
🌐 App will run at: http://localhost:3000

🌍 Deployment
🚀 Deploy Frontend (Vercel)
Push latest code to GitHub

Connect repository to Vercel

Set root directory to client/

Configure:

Framework: Vite

Build Command: npm run build

Output Directory: dist

Add environment variables

Click Deploy

🚀 Deploy Backend (Render)
Push latest code to GitHub

Create a new web service in Render

Set root directory to server/

Configure:

Start Command: npm start

Environment Variables: Paste from .env

Click Deploy

🤝 Contributing
Want to contribute? Follow these steps:

Fork the repository

Clone it (git clone (https://github.com/sarahmaheen/SHOPPING_CART_APP))

Create a branch (git checkout -b feature-xyz)

Commit changes (git commit -m "Added XYZ feature")

Push to your branch (git push origin feature-xyz)

Open a Pull Request 🚀

📜 License
This project is licensed under the MIT License.

🎉 Acknowledgements
🔹 Beautifully created by Sarah Maheen 💖

