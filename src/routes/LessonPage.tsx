// import React from 'react'

import { Box } from "@mui/material";
import PageMotionWrapper from "../components/layout/PageMotionWrapper";
import AnswersContainer from "../components/answersContainer/AnswersContainer";

function LessonPage() {

    const mockCorrectWords : string[] = ["собаки", "такси", "россия", "молоко", "План", "Вода", "яблоко"];
    const mockIncorrectWords : string[] = ["собаки", "такси", "россия", "молоко", "План", "Вода", "яблоко"];


    return (
        <PageMotionWrapper>
            <Box className='bg-amber-950 flex [height:calc(100vh-60px)]'>

                {/* Answer Container (Correct Words) */}
                <Box className='bg-blue-900 p-1 flex-15 flex justify-center'>
                    <AnswersContainer containerCorrect={true} wordsArray={mockCorrectWords} />
                </Box>

                {/* Central Secction */}
                <Box className='bg-blue-700 p-2 flex-70 flex flex-col items-center'>
                    <p> Central planel-secction here. </p>
                </Box>

                {/* Answer Container (Incorrect Words) */}
                <Box className='bg-blue-900 p-1 flex-15 flex justify-center'>
                    <AnswersContainer containerCorrect={false} wordsArray={mockIncorrectWords} />
                </Box>

            </Box>
        </PageMotionWrapper>
    )
}

export default LessonPage;