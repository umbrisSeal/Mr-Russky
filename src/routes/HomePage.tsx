//import React from 'react'
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import appLogo from '../assets/img/logo.svg';
import PrimaryOptionButton from '../components/buttons/PrimaryOptionButton';
import SecondaryOptionButton from '../components/buttons/SecondaryOptionButton';
import PageMotionWrapper from '../components/layout/PageMotionWrapper';

function HomePage() {
    const { t, i18n } = useTranslation();
    const navigateTo = useNavigate();

    function handleVocabularyButton() {
        navigateTo('/vocabulary');
    };

    function handleSwitchLanguage() {
        const newLanguage = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLanguage);
    };

    function handleStudyAll() {
        navigateTo('/lesson?studyAll=1');
    };

    function handleStartLesson() {
        navigateTo('/lesson?studyAll=0');
    };

    return (
        <PageMotionWrapper>
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
                    {/*
                    <SecondaryOptionButton buttonMessage={t('components.buttons.options.topNouns')} />
                    <SecondaryOptionButton buttonMessage={t('components.buttons.options.topVerbs')} />
                    <SecondaryOptionButton buttonMessage={t('components.buttons.options.topWords')} />
                    // Start Lesson
                    // Study Full Vocabulary
                    // Vocabulary DB
                    // Swap Language.
                    */}
                    <PrimaryOptionButton buttonMessage={t('components.buttons.options.startLesson')} onClickFn={handleStartLesson} />
                    <SecondaryOptionButton buttonMessage={t('components.buttons.options.studyAll')} onClickFn={handleStudyAll} />
                    <SecondaryOptionButton buttonMessage={t('components.buttons.options.vocabularyDB')} onClickFn={handleVocabularyButton} />
                    <SecondaryOptionButton buttonMessage={t('components.buttons.options.swapLanguage')} onClickFn={handleSwitchLanguage} />
                </Box>

            </Box>
        </PageMotionWrapper>
    );
}

export default HomePage;