import { Box, ButtonBase } from '@mui/material';

import type { ButtonProps } from './buttonTypes';

function TertiaryOptionButton({ buttonMessage = "Message not defined.", onClickFn = () => console.log("OnClick function not defined.") } : ButtonProps) {

    return (
        <Box className='w-full bg-accent2 rounded-xl shadow-md/20 border-2 border-accent2 overflow-hidden'>
            <ButtonBase
                onClick={onClickFn}
                sx={{
                    width: '100%',
                    paddingY: 1.5,
                    paddingX: 3,
                    textAlign: 'center'
                }}
            >
                <p className='uppercase font-bold text-lg text-accent'> {buttonMessage} </p>
            </ButtonBase>
        </Box>
    )
}

export default TertiaryOptionButton;