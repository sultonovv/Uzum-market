import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './assets/scss/main.scss'
import CartProvider from './context/CartContext.jsx'
import SavedProvider from './context/SavedContext.jsx'

ReactDOM.createRoot(document.querySelector('.wrapper')).render(
  <BrowserRouter>
  <SavedProvider>
  <CartProvider>
    <App />
  </CartProvider>
  </SavedProvider>
  </BrowserRouter>
)
