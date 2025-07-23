//import React from 'react'
import type { TagCounterProps } from './tagTypes';
import { formatNumberWithCommas } from '../../utils/functions/formatNumberWithCommas';

const classMap: Record<string, string> = {
    A: 'bg-accent2 text-accent',
    B: 'bg-accent3 text-accent',
    C: 'bg-secondary text-accent',
    Total: 'bg-accent text-accent3',
};

function TagCounter({tagGroup, counter} : TagCounterProps) {
    const cssClasses = classMap[tagGroup] || '';

    return (
        <p className={`pt-0.5 rounded-md text-center font-bold ${cssClasses}`}>
            {formatNumberWithCommas(counter)}
        </p>
    )
}

export default TagCounter;