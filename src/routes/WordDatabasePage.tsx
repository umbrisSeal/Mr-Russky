//import React from 'react'
import { Box } from "@mui/material";
import PageMotionWrapper from "../components/layout/PageMotionWrapper";
import TagTitle from "../components/tags/TagTitle";

function WordDatabasePage() {
    return (
        <PageMotionWrapper>
            <Box className=''>
                { /* Title and Tags */ }
                <Box className='flex flex-col items-center gap-6 p-6'>
                    <h1 className="font-bold text-accent text-3xl text-center">
                        Cantidad de Vocabulario por Categoria y Grupo
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