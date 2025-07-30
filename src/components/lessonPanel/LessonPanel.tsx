import { useEffect, useState } from 'react'

import { Box } from "@mui/material";
import type { LessonPanelProps } from "./lessonPanelTypes";
import AnswerInput from "../inputs/AnswerInput";
import HintButton from '../buttons/HintButton';
import { useTranslation } from 'react-i18next';
import OkButton from '../buttons/OkButton';
import AnswerStatusContainer from '../answerStatusContainer/AnswerStatusContainer';

/*
    WE NEED TO RESTRUCTURE THE WORD DATABASE TO ITS FINAL FORM BEFORE WE CAN CONTINUE.
    Some considerations:
        - Add an origin from the image (Wikipedia Commons or other)
        - Attribution, required to be presented when we show the image to the user.
        - Category array, for future development in categories. ['animals', 'fruits', 'food', ] etc.
        - Group value, for A, B or C.
        - Do not add a top value, we will do custom lists for that.
*/

function LessonPanel({wordType, currentExcerciceIndex, showingAnswer, okButtonFn} : LessonPanelProps) {
    const { t } = useTranslation();
    const [userAnswer, setUserAnswer] = useState('');

    // Do not add typing to this element because its just a mock. We must recieve as prop the real data in the future.
    const mockLessonWords = [
        { id: "вода", translation: "agua", urlWiki: "https://believe.earth/wp-content/uploads/2018/10/economia-agua-pixabay-believe-earth-1024x683.jpg" },
        { id: "вода1", translation: "agua2", urlWiki: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Bonfire_in_Kladow_17.04.2011_20-41-54.JPG" },
        { id: "вода2", translation: "agua3", urlWiki: "https://cdn.prod.website-files.com/6643a82fc46ca462b5ef9921/6643a82fc46ca462b5efa2f9_56-Las-X-casas-mas-iconicas-de-la-CDMX-que-puedes-visitar-en-estas-vacaciones-de-semana-santa.webp" },
        { id: "вода3", translation: "agua4", urlWiki: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Labrador_Retriever_%281210559%29.jpg/960px-Labrador_Retriever_%281210559%29.jpg" },
        { id: "вода4", translation: "agua5", urlWiki: "https://www.recetasnestle.co.mx/sites/default/files/inline-images/tipos-de-manzana-royal-gala.jpg" }
    ];

    const currentExcercice = mockLessonWords[currentExcerciceIndex];

    const nextURLsArray = mockLessonWords
        .slice(currentExcerciceIndex+1, currentExcerciceIndex+4)    // Get the next 3 urls
        .map((exercice) => exercice.urlWiki)
    ;

    // Pre-Load next images. (Storage in browser's cache).
    useEffect(() => {
        nextURLsArray.forEach((url) => {
            const img = new Image();
            img.src = url;
        });
    }, [nextURLsArray]);

    function handleOkButton() {
        if(showingAnswer) setUserAnswer(''); // Next exercice, clear input.
        okButtonFn(userAnswer);   // Let parent component continue the lesson.
    };


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
                            alt={`${t('pages.lesson.imageNotShown')}: ${currentExcercice.translation}`} // Add translation here if image does not load.
                            src={currentExcercice.urlWiki}
                        />
                    </Box>
                </Box>
                {/* Answer Container */}
                <AnswerStatusContainer correctAnswer={currentExcercice.id} userAnswer={userAnswer} showResult={showingAnswer} />
            </Box>

            {/* Controls Container */}
            <Box className='border-secondary border-3 border-top-only flex justify-center items-center gap-8 py-4'>
                <HintButton buttonMessage={t('components.buttons.lesson.hint')} />
                <AnswerInput value={userAnswer} setValue={setUserAnswer} />
                <OkButton buttonMessage={t('components.buttons.lesson.ok')} onClickFn={handleOkButton} />
            </Box>

        </Box>
    )
}

export default LessonPanel;