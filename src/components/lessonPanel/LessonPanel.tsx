import { useState } from 'react'

import { Box } from "@mui/material";
import type { LessonPanelProps } from "./lessonPanelTypes";
import AnswerInput from "../inputs/AnswerInput";
import HintButton from '../buttons/HintButton';
import { useTranslation } from 'react-i18next';
import OkButton from '../buttons/OkButton';
import AnswerStatusContainer from '../answerStatusContainer/AnswerStatusContainer';

function LessonPanel({wordType} : LessonPanelProps) {
    const { t } = useTranslation();
    const [userAnswer, setUserAnswer] = useState('');

    const mockCorrectWord = 'едифисо';
    const mockUserAnswer = 'здание';

    // Issue a problem in this component. Using <Box> with image background is not a proper solution.

    return (
        <Box className='bg-secondary-transparent border-secondary border-3 h-full flex flex-col'>

            {/* Word Type Title Container */}
            <Box className='p-1'>
                <p className="capitalize font-bold text-2xl text-center text-accent"> {wordType} </p>
            </Box>

            {/* Main Content Container */}
            <Box className='flex-1 border-secondary border-3 border-top-only flex flex-col'>
                {/* Image Container */}
                {/* MAKE AN ISSUE FOR THIS PART! */}
                <Box className='bg-pink-700 px-10 py-4 flex justify-center h-full'>
                    <Box
                        className='bg-gray-600 w-full max-w-[740px] [height:calc(50vh-60px)] flex justify-center items-center'
                    >
                        <img
                            className="h-full w-auto object-fill"
                            alt="Imagen de Wikipedia Commons"
                            src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
                        />
                    </Box>
                </Box>
                {/* Answer Container */}
                <AnswerStatusContainer correctAnswer={mockCorrectWord} userAnswer={mockUserAnswer} />
            </Box>

            {/* Controls Container */}
            <Box className='border-secondary border-3 border-top-only flex justify-center items-center gap-8 py-4'>
                <HintButton buttonMessage={t('components.buttons.lesson.hint')} />
                <AnswerInput value={userAnswer} setValue={setUserAnswer} />
                <OkButton buttonMessage={t('components.buttons.lesson.ok')} />
            </Box>

        </Box>
    )
}

export default LessonPanel;