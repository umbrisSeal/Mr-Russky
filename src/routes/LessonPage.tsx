// import React from 'react'

import { Box } from "@mui/material";
import PageMotionWrapper from "../components/layout/PageMotionWrapper";
import AnswersContainer from "../components/answersContainer/AnswersContainer";
import LessonPanel from "../components/lessonPanel/LessonPanel";

function LessonPage() {

    const mockCorrectWords : string[] = ["собаки", "такси", "россия", "молоко", "План", "Вода", "яблоко"];
    const mockIncorrectWords : string[] = ["собаки", "такси", "россия", "молоко", "План", "Вода", "яблоко"];

    return (
        <PageMotionWrapper>
            <Box className='flex [height:calc(100vh-60px)]'>

                {/* Answer Container (Correct Words) */}
                <Box className='p-1 flex-15 flex justify-center'>
                    <AnswersContainer containerCorrect={true} wordsArray={mockCorrectWords} />
                </Box>

                {/* Central Secction */}
                <Box className='bg-blue-700 p-2 flex-70 flex flex-col items-center'>
                    {/* Construir el panel aqui mismo. Usar boxes internas para cada elemento? Probablemente. */}
                    <Box className='bg-blue-900 w-full flex-1'>
                        <LessonPanel wordType="Verb Sample" />
                    </Box>
                    <p className="bg-blue-800 w-full h-[120px]"> Progress bar and virtual keyboard. </p>
                    <p className="bg-blue-950 w-full h-[60px]"> Exit button. </p>
                </Box>

                {/* Answer Container (Incorrect Words) */}
                <Box className='p-1 flex-15 flex justify-center'>
                    <AnswersContainer containerCorrect={false} wordsArray={mockIncorrectWords} />
                </Box>

            </Box>
        </PageMotionWrapper>
    )
}

export default LessonPage;