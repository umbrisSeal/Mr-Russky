// import React from 'react'

import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import TagWord from "../tags/TagWord";

// AnwsersContainer Props
/*
    Correct/Incorrect:
    Array of initial words:
    function to add a word?
*/

type AnswersContainerProps = {
    containerCorrect: boolean;      // True if it storages correct anwsers, false otherwise.
    wordsArray: string[];           // String of initial words shown in this component.
};

function AnswersContainer({containerCorrect = false, wordsArray = []} : AnswersContainerProps ) {
    const { t } = useTranslation();

    return (
        <Box className='bg-purple-900 w-full h-[85%] p-1 rounded-xl border-secondary border-4'>
            {/* Answer Counter */}
            <Box className='text-center text-3xl font-semibold'>
                <p> {containerCorrect ? t('components.answersContainer.correct') : t('components.answersContainer.incorrect')}: </p>
                <p> 7 </p>
            </Box>

            {/* List of Answers */}
            <Box className='flex flex-wrap gap-1'>
                { wordsArray.map((word, index) => <TagWord key={index} word={word} tagStyleCorrect={containerCorrect} />) }
            </Box>

        </Box>
    )
}

export default AnswersContainer;