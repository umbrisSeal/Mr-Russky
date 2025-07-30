//import React from 'react'
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import TagWord from "../tags/TagWord";
import type { AnswersContainerProps } from './answerContainerTypes.ts';


function AnswersContainer({containerCorrect = false, wordsArray = []} : AnswersContainerProps ) {
    const { t } = useTranslation();

    return (
        <Box className='w-full h-[85%] p-1 rounded-xl border-secondary border-4 flex flex-col gap-1 bg-secondary-transparent'>

            {/* Answer Counter */}
            <Box className={`font-semibold text-center text-3xl ${containerCorrect ? 'text-green' : 'text-accent3'}`}>
                <p> {containerCorrect ? t('components.answersContainer.correct') : t('components.answersContainer.incorrect')}: </p>
                <p> 7 </p>
            </Box>

            {/* List of Answers */}
            <Box className='flex-1 flex flex-wrap content-start gap-1 overflow-auto'>
                { wordsArray.map((word, index) => <TagWord key={index} word={word} tagStyleCorrect={containerCorrect} />) }
            </Box>

        </Box>
    )
}

export default AnswersContainer;