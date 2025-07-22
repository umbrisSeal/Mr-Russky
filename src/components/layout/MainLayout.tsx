//import React from 'react'
import { Outlet, useNavigate } from 'react-router';

import appLogo from '../../assets/img/logo.svg';

function MainLayout() {
    const navigateTo = useNavigate();

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
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout;