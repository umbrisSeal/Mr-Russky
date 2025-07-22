import React from 'react'
import { Box } from '@mui/material';

import appLogo from '../assets/img/logo.svg';

function HomePage() {
    return (
        <Box className='min-h-screen flex flex-col items-center justify-center space-y-8'>
            <img
                src={appLogo}
                alt='Mr-Russky Logo'
                className='w-140'
            />

            <Box className='text-center'>
                <h1 className='text-3xl font-bold text-accent'> ¡Bienvenido a Mr. Russky! </h1>
                <p className='text-accent'> Practica y aprende nuevo vocabulario ruso. </p>
            </Box>

            <Box>
                <p> Button 1 </p>
                <p> Button 2 </p>
                <p> Button 3 </p>
            </Box>


        </Box>
    );
}

export default HomePage;