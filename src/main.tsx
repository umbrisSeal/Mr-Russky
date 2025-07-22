import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from './routes/router.tsx'

import './assets/styles/global/tailwind.css'
import './assets/styles/global/normalize.css'
import './assets/styles/global/global.css'

import './i18n/index.tsx'



createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
