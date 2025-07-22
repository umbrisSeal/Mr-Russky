//import React from 'react'
import { Box } from "@mui/material";
import PageMotionWrapper from "../components/layout/PageMotionWrapper";
import TagTitle from "../components/tags/TagTitle";
import { useTranslation } from "react-i18next";

function WordDatabasePage() {
    const { t } = useTranslation();

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

                { /* Retrun Button */ }

            </Box>
        </PageMotionWrapper>
    )
}

export default WordDatabasePage;