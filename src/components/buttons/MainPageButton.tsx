import { Box, ButtonBase } from '@mui/material';

import type { ButtonProps } from './buttonTypes';

function MainPageButton({ buttonMessage = "Message not defined.", onClickFn = () => console.log("OnClick function not defined.") } : ButtonProps) {
    
    return (
        <Box className='w-[460px] bg-secondary rounded-xl shadow-md/20 border-2 border-secondary overflow-hidden'>
            <ButtonBase
                onClick={onClickFn}
                sx={{
                    width: '100%',
                    paddingY: 1.5,
                    paddingX: 3,
                    textAlign: 'center',
                }}
            >
                <p className='uppercase font-bold text-lg'> {buttonMessage} </p>
            </ButtonBase>
        </Box>
    )
}

export default MainPageButton;