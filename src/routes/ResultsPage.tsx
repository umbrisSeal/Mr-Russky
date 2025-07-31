//import React from 'react'
import PrimaryOptionButton from '../components/buttons/PrimaryOptionButton';
import SecondaryOptionButton from '../components/buttons/SecondaryOptionButton';
import TertiaryOptionButton from '../components/buttons/TertiaryOptionButton';
import PageMotionWrapper from '../components/layout/PageMotionWrapper';
import { Box } from '@mui/material';

function ResultsPage() {
    return(
        <PageMotionWrapper>
            <Box className='flex flex-col items-center py-4 gap-4'>
                <p className='text-4xl text-accent font-bold'> Resultados de la leccion: </p>

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
                            <p className='font-bold text-5xl'> 58 </p>
                            <p className='text-xl'> Palabras Correctas </p>
                        </Box>
                        <Box className='text-accent3'>
                            <p className='font-bold text-5xl'> 12 </p>
                            <p className='text-xl'> Palabras Incorrectas </p>
                        </Box>
                        <Box className='text-secondary'>
                            <p className='font-bold text-5xl'> 10 </p>
                            <p className='text-xl'> Palabras Corregidas </p>
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
                                <p className='font-bold text-5xl'> 70 </p>
                                <p className='text-xl'> Palabras Totales </p>
                            </Box>
                        </Box>

                        <Box className=' text-accent pr-8 flex pt-4 justify-around items-center gap-8'>
                            <p className='text-xl'> Dominio de Vocabulario </p>
                            <p className='text-7xl font-bold'> 87.62 % </p>
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
                        <PrimaryOptionButton buttonMessage='Repetir leccion' />
                        <TertiaryOptionButton buttonMessage='Practicar solo errores' />
                        <SecondaryOptionButton buttonMessage='Regresar al inicio' />
                    </Box>
                </Box>

            </Box>
        </PageMotionWrapper>
    )
}

export default ResultsPage;