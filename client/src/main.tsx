// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.tsx";
// import { createBrowserRouter, RouterProvider } from "react-router";
// import RootLayout from "./components/RootLayout.tsx";
// import Product from "./pages/Product.tsx";
// import Cart from "./pages/Cart.tsx";
// import Orders from "./pages/Orders.tsx";
// import NotFound from "./pages/NotFound.tsx";
// import { productsData } from "./api/index.ts";
// import Shop from "./pages/Shop.tsx";
// import Login from "./pages/Login.tsx";
// import Profile from "./pages/Profile.tsx";
// import Success from "./pages/Success.tsx";
// import Favorites from "./pages/Favorites.tsx";
// import Categories from "./pages/Categories.tsx";
// import Blog from "./pages/Blog.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       {
//         path: "/",
//         element: <App />,
//         loader: productsData,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/shop",
//         element: <Shop />,
//         loader: productsData,
//       },
//       {
//         path: "/product/:id",
//         element: <Product />,
//       },
//       {
//         path: "/favorites",
//         element: <Favorites />,
//       },
//       {
//         path: "/cart",
//         element: <Cart />,
//       },
//       {
//         path: "/orders",
//         element: <Orders />,
//       },
//       {
//         path: "/profile",
//         element: <Profile />,
//       },
//       {
//         path: "/success",
//         element: <Success />,
//       },
//       {
//         path: "/categories",
//         element: <Categories />,
//       },
//       {
//         path: "/blog",
//         element: <Blog />,
//       },
//       {
//         path: "*",
//         element: <NotFound />,
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );



































import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.tsx";
import RootLayout from "./components/RootLayout.tsx";
import Product from "./pages/Product.tsx";
import Cart from "./pages/Cart.tsx";
import Orders from "./pages/Orders.tsx";
import NotFound from "./pages/NotFound.tsx";
import { productsData } from "./api/index.ts";
import Shop from "./pages/Shop.tsx";
import Login from "./pages/Login.tsx";
import Profile from "./pages/Profile.tsx";
import Success from "./pages/Success.tsx";
import Favorites from "./pages/Favorites.tsx";
import Categories from "./pages/Categories.tsx";
import Blog from "./pages/Blog.tsx";
import Dashboard from "./admin-dashboard/pages/Dashboard.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <App />, loader: productsData },
      { path: "/login", element: <Login /> },
      { path: "/shop", element: <Shop />, loader: productsData },
      { path: "/products/:id", element: <Product /> },
      { path: "/favorites", element: <Favorites /> },
      { path: "/cart", element: <Cart /> },
      { path: "/orders", element: <Orders /> },
      { path: "/profile", element: <Profile /> },
      { path: "/success", element: <Success /> },
      { path: "/categories", element: <Categories /> },
      { path: "/blog", element: <Blog /> },
      { path: "/dashboard", element: <Dashboard /> }, // Dashboard Route Added
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
