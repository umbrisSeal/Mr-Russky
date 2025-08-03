//import React from 'react'
import { useTranslation } from 'react-i18next';
import PrimaryOptionButton from '../components/buttons/PrimaryOptionButton';
import SecondaryOptionButton from '../components/buttons/SecondaryOptionButton';
import TertiaryOptionButton from '../components/buttons/TertiaryOptionButton';
import PageMotionWrapper from '../components/layout/PageMotionWrapper';
import { Box } from '@mui/material';
import { useLessonResultsStore } from '../hooks/lessonResults';
import { useNavigate } from 'react-router';


function ResultsPage() {
    const wrongAnswers = useLessonResultsStore((state) => state.wrongAnswers);
    const correctAnswers = useLessonResultsStore((state) => state.correctAnswers);
    const previousWrongAnswers = useLessonResultsStore((state) => state.previousWrongAnswers);
    const previousCorrectAnswers = useLessonResultsStore((state) => state.previousCorrectAnswers);
    const { t } = useTranslation();
    const navigateTo = useNavigate();

    const totalWords = wrongAnswers.length + correctAnswers.length;
    const vocabularyMastery = (correctAnswers.length / totalWords) * 100;


    function handleRepeatLesson() {
        navigateTo('/lesson?repeat=1');
    };

    function handleRepeatOnlyErrors() {
        navigateTo('/lesson?errors=1');
    };

    function handleGoHome() {
        navigateTo('/');
    };


    return(
        <PageMotionWrapper>
            <Box className='flex flex-col items-center py-4 gap-4'>
                <p className='text-4xl text-accent font-bold'> {t('pages.results.title')}: </p>

                <Box className='w-[70%] flex flex-col items-center gap-6'>
                    {/* Results Container */}
                    <Box
                        className='
                            bg-secondary-transparent
                            border-3 border-secondary
                            rounded-lg h-30 w-full text-center
                            flex items-center justify-around'
                    >
                        <Box className='text-green'>
                            <p className='font-bold text-5xl'> {correctAnswers.length} </p>
                            <p className='text-xl'> {t('pages.results.correctWords')} </p>
                        </Box>
                        <Box className='text-accent3'>
                            <p className='font-bold text-5xl'> {wrongAnswers.length} </p>
                            <p className='text-xl'> {t('pages.results.incorrectWords')} </p>
                        </Box>
                        <Box className='text-secondary'>
                            <p className='font-bold text-5xl'> 10 </p>
                            <p className='text-xl'> {t('pages.results.correctedWords')} </p>
                        </Box>
                    </Box>

                    {/* Total Words and Vocabulary Mastery */}
                    <Box className='w-full flex justify-between'>
                        <Box
                        className='
                            bg-secondary-transparent
                            border-3 border-secondary
                            rounded-lg h-30 w-[35%] text-center text-accent
                            flex items-center justify-center'
                        >
                            <Box className=''>
                                <p className='font-bold text-5xl'> {totalWords} </p>
                                <p className='text-xl'> {t('pages.results.totalWords')} </p>
                            </Box>
                        </Box>

                        <Box className=' text-accent pr-8 flex pt-4 justify-around items-center gap-8'>
                            <p className='text-xl'> {t('pages.results.vocabularyMastery')} </p>
                            <p className='text-7xl font-bold'> {`${vocabularyMastery.toFixed(2)} %`} </p>
                        </Box>
                    </Box>

                    {/* Messages */}
                    <Box className='text-center'>
                        <p className='text-lg text-green'>
                            ¡Genial! Mejoraste tu vocabulario en esta leccion un <span className='font-bold'>+6.02%</span> desde tu ultima sesion!
                        </p>
                        <p className='text-lg text-accent'> Deberias practicar aún mas este vocabulario. </p>
                    </Box>

                    {/* Buttons */}
                    <Box className='flex flex-col gap-2'>
                        <PrimaryOptionButton buttonMessage={t('components.buttons.options.repeatLesson')} onClickFn={handleRepeatLesson} />
                        <TertiaryOptionButton buttonMessage={t('components.buttons.options.practiceErrors')} onClickFn={handleRepeatOnlyErrors} />
                        <SecondaryOptionButton buttonMessage={t('components.buttons.options.returnHome')} onClickFn={handleGoHome} />
                    </Box>
                </Box>

            </Box>
        </PageMotionWrapper>
    )
}

export default ResultsPage;