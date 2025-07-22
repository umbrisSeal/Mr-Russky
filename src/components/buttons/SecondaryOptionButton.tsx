import { Box, ButtonBase } from '@mui/material';

import type { ButtonProps } from './buttonTypes';

function SecondaryOptionButton({ buttonMessage = "Message not defined.", onClickFn = () => console.log("OnClick function not defined.") } : ButtonProps) {

    return (
        <Box className='w-full bg-primary rounded-xl shadow-md/20 border-2 border-secondary overflow-hidden'>
            <ButtonBase
                onClick={onClickFn}
                sx={{
                    width: '100%',
                    paddingY: 1.5,
                    paddingX: 3,
                    textAlign: 'center'
                }}
            >
                <p className='uppercase font-bold text-lg text-secondary'> {buttonMessage} </p>
            </ButtonBase>
        </Box>
    )
}

export default SecondaryOptionButton;