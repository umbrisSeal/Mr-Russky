//import React from 'react'
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import appLogo from '../assets/img/logo.svg';
import PrimaryOptionButton from '../components/buttons/PrimaryOptionButton';
import SecondaryOptionButton from '../components/buttons/SecondaryOptionButton';

function HomePage() {
    const { t } = useTranslation();

    return (
        <Box className='min-h-screen flex flex-col items-center justify-center space-y-8'>
            <img
                src={appLogo}
                alt='Mr-Russky Logo'
                className='w-100'
            />

            <Box className='text-center'>
                <h1 className='text-3xl font-bold text-accent'> {t('pages.homePage.welcomeMessage')} </h1>
                <p className='text-accent'> {t('pages.homePage.title')} </p>
            </Box>

            <Box className='flex flex-col gap-3 items-center'>
                <PrimaryOptionButton buttonMessage={t('components.buttons.options.customLesson')} />
                <SecondaryOptionButton buttonMessage={t('components.buttons.options.topNouns')} />
                <SecondaryOptionButton buttonMessage={t('components.buttons.options.topVerbs')} />
                <SecondaryOptionButton buttonMessage={t('components.buttons.options.topWords')} />
                <SecondaryOptionButton buttonMessage={t('components.buttons.options.vocabularyDB')} />
            </Box>

        </Box>
    );
}

export default HomePage;