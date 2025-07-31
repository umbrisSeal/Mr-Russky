import { Box, LinearProgress } from '@mui/material';
import React from 'react'

// <LinearProgressWithLabel value={progress} />
// <LinearProgress variant="determinate" value={progress} />

function ProgressBar() {

    const progress = 20;

    return (
        <Box className='w-[80%] py-4 flex items-center gap-4'>
            <LinearProgress variant='determinate' value={progress} sx={{ height: 12, borderRadius: 20, flex: 1, mb: 0.5 }} />
            <p className='font-bold text-accent text-lg'> {progress}% </p>
        </Box>
    )
}

export default ProgressBar;