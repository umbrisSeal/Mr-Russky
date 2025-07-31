import { useEffect, useState } from 'react'

import { Box } from "@mui/material";
import type { LessonPanelProps } from "./lessonPanelTypes";
import AnswerInput from "../inputs/AnswerInput";
import HintButton from '../buttons/HintButton';
import { useTranslation } from 'react-i18next';
import OkButton from '../buttons/OkButton';
import AnswerStatusContainer from '../answerStatusContainer/AnswerStatusContainer';

function LessonPanel({wordType, currentExcerciceIndex, lessonVocabulary, showingAnswer, okButtonFn} : LessonPanelProps) {
    const { t, i18n } = useTranslation();
    const [userAnswer, setUserAnswer] = useState<string>('');

    const currentExcercice = lessonVocabulary[currentExcerciceIndex];

    const nextURLsArray = lessonVocabulary
        .slice(currentExcerciceIndex+1, currentExcerciceIndex+4)    // Get the next 3 urls
        .map((word) => word.image.imageUrl)
    ;

    // Pre-Load next images. (Storage in browser's cache).
    useEffect(() => {
        nextURLsArray.forEach((url) => {
            const img = new Image();
            img.src = url;
        });
    }, [nextURLsArray]);

    function handleOkButton() {
        if(userAnswer.trim() === '') return;    // Do not accept an empty answer.

        // Also, change input state if answer is shown. Refocus cursor in new exercice
        if(showingAnswer) setUserAnswer(''); // Next exercice, clear input.
        okButtonFn(userAnswer);   // Let parent component continue the lesson.
    };

    const translations = {
        es: currentExcercice.translation.es,
        en: currentExcercice.translation.en
    };

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if(event.key === 'Enter') {
                event.preventDefault(); // Avoid re-click.
                handleOkButton();
            };
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [userAnswer, showingAnswer]);


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
                            alt={`${t('pages.lesson.imageNotShown')}: ${i18n.language === 'es' ? translations.es : translations.en}`}
                            src={currentExcercice.image.imageUrl}
                        />
                    </Box>
                </Box>
                {/* Answer Container */}
                <AnswerStatusContainer correctAnswer={currentExcercice.id} userAnswer={userAnswer} showResult={showingAnswer} translations={translations} />
            </Box>

            {/* Controls Container */}
            <Box className='border-secondary border-3 border-top-only flex justify-center items-center gap-8 py-4'>
                <HintButton buttonMessage={t('components.buttons.lesson.hint')} />
                <AnswerInput value={userAnswer} setValue={setUserAnswer} blockInput={showingAnswer} />
                <OkButton buttonMessage={t('components.buttons.lesson.ok')} onClickFn={handleOkButton} />
            </Box>

        </Box>
    )
}

export default LessonPanel;