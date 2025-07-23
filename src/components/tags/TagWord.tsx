//import React from 'react'

import { Box } from "@mui/material";
import type { TagWordProps } from "./tagTypes";

function TagWord({ tagStyleCorrect, word } :TagWordProps) {
    return (
        <Box className={`${tagStyleCorrect ? 'bg-dark-green border-green' : 'bg-accent2 border-accent3'} border-3 rounded-xl`}>
            <p className="capitalize text-md text-accent font-semibold py-0.5 px-2">
                {word}
            </p>
        </Box>
    )
}

export default TagWord;