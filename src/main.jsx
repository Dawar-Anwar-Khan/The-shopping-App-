import {createBrowserRouter,RouterProvider,} from "react-router-dom"; 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import './index.css'
import App from './App.jsx'
import HomePage from "./assets/components/HomePage.jsx";
import ProductDetailPage from "./assets/components/productD/ProductDetailPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/productdetails",
        element: <ProductDetailPage />
      },
    ]
  },
]);

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

