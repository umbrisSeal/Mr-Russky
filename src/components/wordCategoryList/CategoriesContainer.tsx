//import React from 'react'

import { useTranslation } from "react-i18next";
import type { SubGroupData } from "./categoryListTypes";
import { Box } from "@mui/material";
import CategoryList from "./CategoryList";

import { exampleNouns } from "../../data/words/inflected/nouns/initialNouns";

function CategoriesContainer() {
    const { t } = useTranslation();


    // For now, this is just a mock. It does not represent the total word database.
    const mockDatabaseInfoInflected : SubGroupData[] = [
        { subGroupName: `${t('global.wordTypes.inflected.nouns')}`, wordsInA: exampleNouns.length, wordsInB: 0, wordsInC: 0 },
        { subGroupName: `${t('global.wordTypes.inflected.verbs')}`, wordsInA: 0, wordsInB: 0, wordsInC: 0 },
        { subGroupName: `${t('global.wordTypes.inflected.numerals')}`, wordsInA: 0, wordsInB: 0, wordsInC: 0 },
        { subGroupName: `${t('global.wordTypes.inflected.adjectives')}`, wordsInA: 0, wordsInB: 0, wordsInC: 0 },
        { subGroupName: `${t('global.wordTypes.inflected.pronouns')}`, wordsInA: 8, wordsInB: 24, wordsInC: 48 },
        { subGroupName: `${t('global.wordTypes.inflected.gerunds')}`, wordsInA: 0, wordsInB: 0, wordsInC: 0 },
        { subGroupName: `${t('global.wordTypes.inflected.participles')}`, wordsInA: 0, wordsInB: 0, wordsInC: 0 },
    ];
    const mockDatabaseInfoInvariable : SubGroupData[] = [
        { subGroupName: `${t('global.wordTypes.invariable.prepositions')}`, wordsInA: 1, wordsInB: 2, wordsInC: 5 },
        { subGroupName: `${t('global.wordTypes.invariable.adverbs')}`, wordsInA: 1, wordsInB: 2, wordsInC: 5 },
        { subGroupName: `${t('global.wordTypes.invariable.conjunctions')}`, wordsInA: 1, wordsInB: 2, wordsInC: 5 },
        { subGroupName: `${t('global.wordTypes.invariable.interjections')}`, wordsInA: 1, wordsInB: 2, wordsInC: 5 },
        { subGroupName: `${t('global.wordTypes.invariable.particles')}`, wordsInA: 1, wordsInB: 2, wordsInC: 5 },
    ];



    return (
        <Box className='flex flex-wrap justify-center gap-10 p-2'>
            <CategoryList categoryName={t('global.wordTypes.inflected.categoryName')} subGroups={mockDatabaseInfoInflected} />
            <CategoryList categoryName={t('global.wordTypes.invariable.categoryName')} subGroups={mockDatabaseInfoInvariable} />
        </Box>
    )
}

export default CategoriesContainer;