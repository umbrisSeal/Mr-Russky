import React from 'react'
import { Box } from "@mui/material";
import PageMotionWrapper from "../components/layout/PageMotionWrapper";
import AnswersContainer from "../components/answersContainer/AnswersContainer";
import LessonPanel from "../components/lessonPanel/LessonPanel";
import { useState } from "react";

import { exampleNouns } from "../data/words/inflected/nouns/school";
import ProgressBar from "../components/progressBar/ProgressBar";
import VirtualKeyboard from "../components/virtualKeyboard/VirtualKeyboard";
import { useLoaderData, useNavigate } from "react-router";

function LessonPage() {
    const navigateTo = useNavigate();
    const lessonVocabulary = useLoaderData();
    const [correctWords, setCorrectWords] = useState<string[]>([]);
    const [incorrectWords, setIncorrectWords] = useState<string[]>([]);
    const [currentExcerciceIndex, setCurrentExcerciceIndex] = useState<number>(0);
    const [currentProgress, setCurrentProgress] = useState<number>(0);
    const [showingAnswer, setShowingAnswer] = useState<boolean>(false);

    // First of all, check if there is vocabulary to study. If recieve an empty string, return error.
    if(lessonVocabulary.length === 0) {
        navigateTo('/error');
        return <React.Fragment></React.Fragment>
    }

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
            setCurrentProgress(currentProgress + 1); // Increase bar progress when submiting an answer.

        } else {
            if(currentExcerciceIndex+1 >= lessonVocabulary.length) {
                // Lesson Finished
                navigateTo('/results');
            } else {
                // Continue with next exercice.
                setShowingAnswer(!showingAnswer);
                setCurrentExcerciceIndex(currentExcerciceIndex+1);
            }
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
                <Box className='p-2 flex-70 flex flex-col items-center'>
                    <Box className='w-full flex-1'>
                        <LessonPanel
                            wordType="Существительное"
                            currentExcerciceIndex={currentExcerciceIndex}
                            lessonVocabulary={lessonVocabulary}
                            hintButtonFn={handleHintButton}
                            okButtonFn={handleOkButton}
                            showingAnswer={showingAnswer}
                        />
                    </Box>
                    <Box className='w-full h-[180px] flex flex-col items-center'>
                        <ProgressBar progressValue={currentProgress} maxProgressValue={lessonVocabulary.length} />
                        <VirtualKeyboard />
                    </Box>
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