import React, { useTransition } from 'react'

function AnswerInput() {
    const { t } = useTransition();

    return (
        <input
            type='text'
            placeholder='Your answer...' // Must be a translation message.
            className='
                bg-gray
                text-custom-black
                text-xl
                text-center
                font-bold
                w-[240px]
                px-2 py-0.5
                rounded-lg
                focus:outline-none
            '
        />
    )
}

export default AnswerInput;