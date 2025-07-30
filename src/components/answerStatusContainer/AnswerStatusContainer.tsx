//import React from 'react'
import { Box } from '@mui/material';
import type { AnswerStatusContainerProps } from './answerStatusContainerTypes';

function AnswerStatusContainer({userAnswer, correctAnswer, showResult} : AnswerStatusContainerProps) {

    type LetterFeedback = {
        character: string;
        isCorrect: boolean;
    };

    function evaluateAnswer(userAnswer: string, correctAnswer: string) : LetterFeedback[] {
        return Array.from(correctAnswer).map((correctCharacter, index) => {
            const userCharacter = userAnswer[index] ?? '';
            return {
                character: correctCharacter,
                isCorrect: correctCharacter === userCharacter
            };
        });
    };

    const evaluatedResponse = evaluateAnswer(userAnswer.toLowerCase(), correctAnswer.toLowerCase());
    const userAnswerCorrect = evaluatedResponse.every((letter) => letter.isCorrect);

    return (
        <Box className='text-center' style={{ visibility: showResult ? 'visible' : 'hidden' }}>
            <p className='capitalize text-xs italic'> cansado </p>

            {/* Correct Word generation: */}
            {
                evaluatedResponse.map((evaluatedCharacter, index) => 
                    <p
                        key={index}
                        className={`
                            text-4xl
                            ${userAnswerCorrect ? 'text-green' : 'text-accent3'}
                            ${evaluatedCharacter.isCorrect && !userAnswerCorrect ? 'font-extralight' : 'font-black'}
                            ${index == 0 ? 'capitalize' : ''}
                        `}
                        style={{ display: 'inline', marginRight: 2 }}   // To prevent new lines and sepatate characters horizontally.
                    >
                        {evaluatedCharacter.character}
                    </p>
                )
            }

        </Box>
    )
}

export default AnswerStatusContainer;