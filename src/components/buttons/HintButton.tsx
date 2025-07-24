//import React from 'react'

import { Box, ButtonBase } from "@mui/material";
import type { ButtonProps } from "./buttonTypes";

function HintButton({ buttonMessage = "Message not defined.", onClickFn = () => console.log("OnClick function not defined.") } : ButtonProps) {
    return (
        <Box className='bg-dark-gray text-accent w-[80px] rounded-lg overflow-hidden'>
            <ButtonBase
                onClick={onClickFn}
                sx={{ width: '100%', padding: 0.5, textAlign: 'center' }}
            >
                <p className="font-bold text-lg" > {buttonMessage} </p>
            </ButtonBase>
        </Box>
    )
}

export default HintButton;