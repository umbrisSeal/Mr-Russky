import React from 'react'

import { Box } from "@mui/material"

type SubGroupData = {
    subGroupName: string;
    wordsInA: number;
    wordsInB: number;
    wordsInC: number;
}

type CategoryListProps = {
    categoryName: string;
    subGroups: SubGroupData[];
};

function CategoryList({ categoryName = "Category name not defined.", subGroups } : CategoryListProps) {
    function formatNumberWithCommas(number: number): string {
        return number.toLocaleString('en-US');
    };

    return (
        <Box className='text-accent'>
            <h3 className="text-center text-lg font-bold"> {categoryName} </h3>
            <Box
                className={`grid [grid-template-columns:140px_30px_30px_30px_35px] gap-1`}
            >
                {
                    subGroups.map((row) => {
                        const totalWordsInRow = row.wordsInA + row.wordsInB + row.wordsInC;
                        return (
                            <React.Fragment>
                                <p className="text-left"> {row.subGroupName} </p>
                                <p className="rounded-md text-center font-bold bg-accent2"> {formatNumberWithCommas(row.wordsInA)} </p>
                                <p className="rounded-md text-center font-bold bg-accent3"> {formatNumberWithCommas(row.wordsInB)} </p>
                                <p className="rounded-md text-center font-bold bg-secondary"> {formatNumberWithCommas(row.wordsInC)} </p>
                                <p className="rounded-md text-center font-bold bg-accent text-accent3"> {formatNumberWithCommas(totalWordsInRow)} </p>
                            </React.Fragment>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default CategoryList;