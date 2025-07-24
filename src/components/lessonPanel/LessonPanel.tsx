// import React from 'react'

import { Box } from "@mui/material";
import type { LessonPanelProps } from "./lessonPanelTypes";

function LessonPanel({wordType} : LessonPanelProps) {
    return (
        <Box className='bg-secondary-transparent border-secondary border-3 h-full flex flex-col'>

            {/* Word Type Title Container */}
            {/* h-[35px] */}
            <Box className='p-1'>
                <p className="capitalize font-bold text-2xl text-center text-accent"> {wordType} </p>
            </Box>

            {/* Main Content Container */}
            <Box className='flex-1 border-secondary border-3 border-top-only'>
                <p> Main Content Container </p>
            </Box>

            {/* Controls Container */}
            <Box className='border-secondary border-3 border-top-only'>
                <p> Controls Container </p>
            </Box>

        </Box>
    )
}

export default LessonPanel;