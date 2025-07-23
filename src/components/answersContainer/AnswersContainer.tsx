//import React from 'react'
import { useState } from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import TagWord from "../tags/TagWord";

type AnswersContainerProps = {
    containerCorrect: boolean;      // True if it storages correct anwsers, false otherwise.
    wordsArray: string[];           // String of initial words shown in this component.
};

function AnswersContainer({containerCorrect = false, wordsArray = []} : AnswersContainerProps ) {
    const [words, setWords] = useState([...wordsArray]);
    const { t } = useTranslation();

    // Add a function in the future or a prop function to allow add new words with setWords.

    return (
        <Box className='w-full h-[85%] p-1 rounded-xl border-secondary border-4 flex flex-col gap-1 bg-secondary-transparent'>

            {/* Answer Counter */}
            <Box className={`font-semibold text-center text-3xl ${containerCorrect ? 'text-green' : 'text-accent3'}`}>
                <p> {containerCorrect ? t('components.answersContainer.correct') : t('components.answersContainer.incorrect')}: </p>
                <p> 7 </p>
            </Box>

            {/* List of Answers */}
            <Box className='flex-1 flex flex-wrap content-start gap-1 overflow-auto'>
                { words.map((word, index) => <TagWord key={index} word={word} tagStyleCorrect={containerCorrect} />) }
            </Box>

        </Box>
    )
}

export default AnswersContainer;