import { StrictMode } from 'react'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createRoot } from 'react-dom/client'
import { theme } from "./theme";

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>
  </StrictMode>,
)
