import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/styles/global/tailwind.css'
import './assets/styles/global/normalize.css'
import './assets/styles/global/global.css'


import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
