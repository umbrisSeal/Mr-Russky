import { useState } from 'react'

import { Box } from "@mui/material";
import type { LessonPanelProps } from "./lessonPanelTypes";
import AnswerInput from "../inputs/AnswerInput";

function LessonPanel({wordType} : LessonPanelProps) {
    const [userAnswer, setUserAnswer] = useState('');


    return (
        <Box className='bg-secondary-transparent border-secondary border-3 h-full flex flex-col'>

            {/* Word Type Title Container */}
            {/* h-[35px] */}
            <Box className='p-1'>
                <p className="capitalize font-bold text-2xl text-center text-accent"> {wordType} </p>
            </Box>

            {/* Main Content Container */}
            <Box className='flex-1 border-secondary border-3 border-top-only'>
                <p> Main Content Container </p>
            </Box>

            {/* Controls Container */}
            <Box className='border-secondary border-3 border-top-only flex justify-center items-center gap-8 py-4'>
                <p> Hint button </p>
                <AnswerInput value={userAnswer} setValue={setUserAnswer} />
                <p> OK Button </p>
            </Box>

        </Box>
    )
}

export default LessonPanel;