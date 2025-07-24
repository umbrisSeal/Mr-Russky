//import React from 'react'
import { useTranslation } from 'react-i18next';
import type { InputProps } from './inputTypes';

function AnswerInput({value, setValue} : InputProps) {
    const { t } = useTranslation();

    return (
        <input
            type='text'
            placeholder={t('components.inputs.answerPlaceholder')}
            value={value}
            onChange={(event) => setValue(event.target.value)}
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