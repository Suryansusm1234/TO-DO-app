import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter , Routes, Route} from "react"

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename = "/TO-DO-app">
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>,
  <StrictMode>
    <App />
  </StrictMode>,
)
