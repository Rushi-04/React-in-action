import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Jamun from './Rushi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Jamun />
 
  </StrictMode>,
)
