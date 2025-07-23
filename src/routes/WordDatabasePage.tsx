//import React from 'react'
import { Box } from "@mui/material";
import PageMotionWrapper from "../components/layout/PageMotionWrapper";
import TagTitle from "../components/tags/TagTitle";
import { useTranslation } from "react-i18next";
import CategoryList from "../components/wordCategoryList/CategoryList";
import type { SubGroupData } from "../components/wordCategoryList/categoryListTypes";

function WordDatabasePage() {
    const { t } = useTranslation();

    // Move all this to the future component to generate all CategoryList elements for all our data.
    // For now, this is just a mock. It does not represent the total word database.
    const mockDatabaseInfoInflected : SubGroupData[] = [
        { subGroupName: `${t('global.wordTypes.inflected.nouns')}`, wordsInA: 3, wordsInB: 0, wordsInC: 0 },
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
        <PageMotionWrapper>
            <Box className=''>
                { /* Title and Tags */ }
                <Box className='flex flex-col items-center gap-6 p-6'>
                    <h1 className="font-bold text-accent text-3xl text-center">
                        {t('pages.wordDatabasePage.title')}
                    </h1>
                    <Box className='flex flex-wrap justify-center gap-4'>
                        <TagTitle tagGroup="A" />
                        <TagTitle tagGroup="B" />
                        <TagTitle tagGroup="C" />
                        <TagTitle tagGroup="Total" />
                    </Box>
                </Box>

                { /* Word Counters */ }
                { /* In future add another component to filter all data and generate all CategoryList components required. */}
                <Box className='flex flex-wrap justify-center gap-10 p-2'>
                    <CategoryList categoryName={t('global.wordTypes.inflected.categoryName')} subGroups={mockDatabaseInfoInflected} />
                    <CategoryList categoryName={t('global.wordTypes.invariable.categoryName')} subGroups={mockDatabaseInfoInvariable} />
                </Box>

                { /* Retrun Button */ }

            </Box>
        </PageMotionWrapper>
    )
}

export default WordDatabasePage;