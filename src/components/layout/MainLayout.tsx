//import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import appLogo from '../../assets/img/logo.svg';

function MainLayout() {
    const navigateTo = useNavigate();
    const location = useLocation();

    function handleLogoClick() {
        // Maybe add a confirmation button in the future.
        navigateTo('/');
    };

    return (
        <div className='min-h-screen flex flex-col'>
            { /* shadow-md/20 for shadow */}
            <header className='w-full h-[60px] bg-primary flex items-center justify-center'>
                <img
                    src={appLogo}
                    alt="Mr-Russky Logo"
                    className='h-10 cursor-pointer'
                    onClick={handleLogoClick}
                />
            </header>
            <main className='flex-1'>
                <AnimatePresence mode='wait'>
                    <Outlet key={location.pathname} />
                </AnimatePresence>
            </main>
        </div>
    )
}

export default MainLayout;