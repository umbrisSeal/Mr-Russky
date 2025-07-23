// import React from 'react'

import { Box } from "@mui/material";
import PageMotionWrapper from "../components/layout/PageMotionWrapper";

function LessonPage() {
    return (
        <PageMotionWrapper>
            <Box className='bg-amber-950 flex [height:calc(100vh-60px)]'>

                {/* Answer Container (Correct Words) */}
                <Box className='bg-blue-900 p-2 flex-15 flex justify-center'>
                    <p> Answer Container here. </p>
                </Box>

                {/* Central Secction */}
                <Box className='bg-blue-700 p-2 flex-70 flex flex-col items-center'>
                    <p> Central planel-secction here. </p>
                </Box>

                {/* Answer Container (Incorrect Words) */}
                <Box className='bg-blue-900 p-2 flex-15 flex justify-center'>
                    <p> Answer Container here. </p>
                </Box>

            </Box>
        </PageMotionWrapper>
    )
}

export default LessonPage;

// AnwsersContainer Props
/*
    Correct/Incorrect:
    Array of initial words:
    function to add a word?
*/