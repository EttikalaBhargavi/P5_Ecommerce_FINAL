import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Signin from './Signin.jsx'
import Signup from './Signup.jsx'
import Products from './Products.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Signin/>
    <Signup/>
    <Products/>
  </StrictMode>,
)



