//import React from 'react'
import { Box } from "@mui/material";
import PageMotionWrapper from "../components/layout/PageMotionWrapper";
import TagTitle from "../components/tags/TagTitle";
import { useTranslation } from "react-i18next";
import CategoriesContainer from "../components/wordCategoryList/CategoriesContainer";
import { useNavigate } from "react-router";
import MainPageButton from "../components/buttons/MainPageButton";

function WordDatabasePage() {
    const { t } = useTranslation();
    const navigateTo = useNavigate();

    function handleReturnButton() {
        navigateTo('/');
    }

    return (
        <PageMotionWrapper>
            {/* Change this in the future to use 100% of remaining space. */}
            <Box className='flex flex-col [height:calc(100vh-60px)]'>

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
                <Box className='flex-1 overflow-auto p-4'>
                    <CategoriesContainer />
                </Box>

                { /* Retrun Button */ }
                <Box className='flex flex-col items-center p-4'>
                    <MainPageButton buttonMessage={t('components.buttons.main.return')} onClickFn={handleReturnButton} />
                </Box>

            </Box>
        </PageMotionWrapper>
    )
}

export default WordDatabasePage;