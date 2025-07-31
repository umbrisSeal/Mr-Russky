// import React from 'react'

import { Box } from "@mui/material";

function VirtualKeyboard() {
    const keyRows = [
        ['Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ'],
        ['Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э'],
        ['Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю']
    ];

    return (
        <Box className='inline-block'>
            {
                keyRows.map((keyRow, indexRow) => {
                    return <Box key={indexRow} className='mb-0.5 flex justify-center gap-1'>
                        {
                            keyRow.map((key, indexKey) => {
                                return <Box
                                    key={indexKey}
                                    className='
                                        bg-accent2
                                        w-6 h-6 pt-1 mb-0.5
                                        shadow-md
                                        rounded-lg
                                        text-lg text-accent
                                        font-bold
                                        flex items-center justify-center'
                                    >
                                    {key}
                                </Box>
                            })
                        }
                    </Box>
                })
            }
        </Box>
    )
}

export default VirtualKeyboard;

/*
In the future, we will need to detect event.code instead of event.key to allow users use their regular keyboard configuration to write russian.
We will need to map all required keys.
const keyMap = {
    KeyF: 'А',
    KeyD: 'В',
    // etc.
}
*/