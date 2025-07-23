import React from 'react'

import { Box } from "@mui/material"
import type { CategoryListProps } from './categoryListTypes';
import TagCounter from '../tags/TagCounter';


function CategoryList({ categoryName = "Category name not defined.", subGroups } : CategoryListProps) {
    return (
        <Box className='text-accent'>
            <h3 className="text-center text-lg font-bold"> {categoryName} </h3>
            <Box
                className={`grid [grid-template-columns:140px_30px_30px_30px_35px] gap-1`}
            >
                {
                    subGroups.map((row, index) => {
                        const totalWordsInRow = row.wordsInA + row.wordsInB + row.wordsInC;
                        return (
                            <React.Fragment key={row.subGroupName + index}>
                                <p className="text-left"> {row.subGroupName} </p>
                                <TagCounter tagGroup='A' counter={row.wordsInA} />
                                <TagCounter tagGroup='B' counter={row.wordsInB} />
                                <TagCounter tagGroup='C' counter={row.wordsInC} />
                                <TagCounter tagGroup='Total' counter={totalWordsInRow} />
                            </React.Fragment>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default CategoryList;