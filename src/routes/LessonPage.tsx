// import React from 'react'

import { Box } from "@mui/material";
import PageMotionWrapper from "../components/layout/PageMotionWrapper";
import AnswersContainer from "../components/answersContainer/AnswersContainer";
import LessonPanel from "../components/lessonPanel/LessonPanel";
import { useState } from "react";

import { exampleNouns } from "../data/words/inflected/nouns/school";
import type { Noun } from "../data/words/inflected/nouns/noun";

function LessonPage() {
    const [correctWords, setCorrectWords] = useState<string[]>([]);
    const [incorrectWords, setIncorrectWords] = useState<string[]>([]);
    const [currentExcerciceIndex, setCurrentExcerciceIndex] = useState<number>(0);
    const [showingAnswer, setShowingAnswer] = useState<boolean>(false);

    // This is a mock, real vocabulary must be choosen in a React Router loader function to obtain the real vocabulary for this particular lesson.
    const mockLessonVocabulary : Noun[] = exampleNouns;

    // handle boton ok y boton hint.
    /*
        Status: Showing response?
        Buttons: Hint y OK.
        Response Status: Array or object presented (charcater, isCorrect).
    */


    function handleHintButton() {
        console.log("You have pressed HINT");
    };

    function handleOkButton(userAnswer: string) {
        if(!showingAnswer) {
            // Evaluate answer, add the word to the correspoding list and show feedback to user.
            const answerCorrect = userAnswer.toLowerCase() === exampleNouns[currentExcerciceIndex].id.toLowerCase();
            if(answerCorrect) {
                setCorrectWords([...correctWords, exampleNouns[currentExcerciceIndex].id]);
            } else {
                setIncorrectWords([...incorrectWords, exampleNouns[currentExcerciceIndex].id]);
            }
            setShowingAnswer(!showingAnswer);

        } else {
            // Continue with next exercice.
            setShowingAnswer(!showingAnswer);
            setCurrentExcerciceIndex((prev) => Math.min(prev + 1, mockLessonVocabulary.length - 1));
            // Must handle finish lesson when there are no more exercices.
        }
    };



    return (
        <PageMotionWrapper>
            <Box className='flex [height:calc(100vh-60px)]'>

                {/* Answer Container (Correct Words) */}
                <Box className='p-1 flex-15 flex justify-center'>
                    <AnswersContainer containerCorrect={true} wordsArray={correctWords} />
                </Box>

                {/* Central Secction */}
                <Box className='bg-blue-700 p-2 flex-70 flex flex-col items-center'>
                    <Box className='bg-blue-900 w-full flex-1'>
                        <LessonPanel
                            wordType="Существительное"
                            currentExcerciceIndex={currentExcerciceIndex}
                            lessonVocabulary={mockLessonVocabulary}
                            hintButtonFn={handleHintButton}
                            okButtonFn={handleOkButton}
                            showingAnswer={showingAnswer}
                        />
                    </Box>
                    <p className="bg-blue-800 w-full h-[120px]"> Progress bar and virtual keyboard. </p>
                    <p className="bg-blue-950 w-full h-[60px]"> Exit button. </p>
                </Box>

                {/* Answer Container (Incorrect Words) */}
                <Box className='p-1 flex-15 flex justify-center'>
                    <AnswersContainer containerCorrect={false} wordsArray={incorrectWords} />
                </Box>

            </Box>
        </PageMotionWrapper>
    )
}

export default LessonPage;