// import React from 'react'

import { Box } from "@mui/material";

function LessonPanel() {
    return (
        <Box className='bg-secondary-transparent border-secondary border-3'>

            {/* Word Type Title Container */}
            <Box className=''>
                <p> Word Type Container </p>
            </Box>

            {/* Main Content Container */}
            <Box className='border-secondary border-3 border-top-only'>
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