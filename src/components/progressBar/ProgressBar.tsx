import { Box, LinearProgress } from '@mui/material';
//import React from 'react'
import type { ProgressBarProps } from './progressBarTypes';

function ProgressBar({progressValue = 0, maxProgressValue = 100} : ProgressBarProps) {

    const progressPercent = (progressValue / maxProgressValue) * 100;
    const progress = Math.min(progressPercent, 100); // Cant be higher than 100%.

    return (
        <Box className='w-[80%] py-2 flex items-center gap-4'>
            <LinearProgress
                variant='determinate'
                color='success'
                value={progress}
                sx={{ height: 12, borderRadius: 20, flex: 1, mb: 0.5 }}
            />
            <p className='font-bold text-accent text-lg'> {progress.toFixed(0)}% </p>
        </Box>
    )
}

export default ProgressBar;