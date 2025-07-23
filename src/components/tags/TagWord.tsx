//import React from 'react'

import { Box } from "@mui/material";
import type { TagWordProps } from "./tagTypes";

function TagWord({ tagStyleCorrect, word } :TagWordProps) {
    return (
        <Box className={`${tagStyleCorrect ? 'bg-dark-green border-green' : 'bg-accent2 border-accent3'} border-3 rounded-xl`}>
            {/* Note: Unsure if using text-sm or text-md. */}
            <p className="capitalize text-sm text-accent font-semibold py-0.5 px-2">
                {word}
            </p>
        </Box>
    )
}

export default TagWord;