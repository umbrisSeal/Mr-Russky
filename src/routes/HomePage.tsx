//import React from 'react'
import { Box } from '@mui/material';

import appLogo from '../assets/img/logo.svg';
import PrimaryOptionButton from '../components/buttons/PrimaryOptionButton';
import SecondaryOptionButton from '../components/buttons/SecondaryOptionButton';

function HomePage() {
    return (
        <Box className='min-h-screen flex flex-col items-center justify-center space-y-8'>
            <img
                src={appLogo}
                alt='Mr-Russky Logo'
                className='w-100'
            />

            <Box className='text-center'>
                <h1 className='text-3xl font-bold text-accent'> ¡Bienvenido a Mr. Russky! </h1>
                <p className='text-accent'> Practica y aprende nuevo vocabulario ruso. </p>
            </Box>

            <Box className='flex flex-col gap-3 items-center'>
                <PrimaryOptionButton buttonMessage='Practica Personalizada' />
                <SecondaryOptionButton buttonMessage='Top 500 Sustantivos' />
                <SecondaryOptionButton buttonMessage='Top 500 Verbos' />
                <SecondaryOptionButton buttonMessage='Top 1,000 Palabras' />
                <SecondaryOptionButton buttonMessage='Cantidad de Vocabulario' />
            </Box>
            
        </Box>
    );
}

export default HomePage;