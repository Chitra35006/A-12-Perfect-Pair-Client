import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/router'
import { ThemeProvider } from './Provider/ThemeContext'
import AuthProvider from './Provider/AuthProvider'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
    </AuthProvider>
    </ThemeProvider>
  </StrictMode>
)
