import { useState } from 'react'

import { Box } from "@mui/material";
import type { LessonPanelProps } from "./lessonPanelTypes";
import AnswerInput from "../inputs/AnswerInput";
import HintButton from '../buttons/HintButton';
import { useTranslation } from 'react-i18next';
import OkButton from '../buttons/OkButton';

function LessonPanel({wordType} : LessonPanelProps) {
    const { t } = useTranslation();
    const [userAnswer, setUserAnswer] = useState('');


    return (
        <Box className='bg-secondary-transparent border-secondary border-3 h-full flex flex-col'>

            {/* Word Type Title Container */}
            <Box className='p-1'>
                <p className="capitalize font-bold text-2xl text-center text-accent"> {wordType} </p>
            </Box>

            {/* Main Content Container */}
            <Box className='flex-1 border-secondary border-3 border-top-only'>
                <p> Main Content Container </p>
            </Box>

            {/* Controls Container */}
            <Box className='border-secondary border-3 border-top-only flex justify-center items-center gap-8 py-4'>
                <HintButton buttonMessage='Hint' />
                <AnswerInput value={userAnswer} setValue={setUserAnswer} />
                <OkButton buttonMessage='OK' />
            </Box>

        </Box>
    )
}

export default LessonPanel;