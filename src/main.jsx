import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/router'
import { ThemeProvider } from './Provider/ThemeContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>,
)
