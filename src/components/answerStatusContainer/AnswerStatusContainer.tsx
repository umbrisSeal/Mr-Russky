//import React from 'react'
import { Box } from '@mui/material';

function AnswerStatusContainer() {

    /*
        Required props:
        user Answer
        correct Answer (Probably extracting from word object in the future.)
        -----------
        Check letter by letter to detect wrong letters.

        What should we detect?
        -
    */

    return (
        <Box className='bg-purple-800 capitalize'>
            <p className='text-xs italic'> cansado </p>
            <p className='text-4xl font-extrabold'> Подамен </p>
        </Box>
    )
}

export default AnswerStatusContainer;