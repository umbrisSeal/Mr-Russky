import React from 'react'
import type { TagProps } from './TagTypes'
import { Box } from '@mui/material';

const classMap: Record<string, string> = {
    A: 'bg-accent2',
    B: 'bg-accent3',
    C: 'bg-secondary',
    Total: 'bg-accent text-accent3'
};

function TagTitle({tagGroup} : TagProps) {
    const bgColor = classMap[tagGroup] || 'Total';     // Fallback for unexpected values.

    return (
        <Box className={`${bgColor} w-[120px] rounded-md py-0.5`}>
            <p className='font-bold text-xl text-center'>
                {tagGroup === 'Total' ? `Total` : `Grupo ${tagGroup}`}
            </p>
        </Box>
    )
}

export default TagTitle;