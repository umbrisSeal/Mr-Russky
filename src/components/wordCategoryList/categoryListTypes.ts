
export type SubGroupData = {
    subGroupName: string;
    wordsInA: number;
    wordsInB: number;
    wordsInC: number;
};

export type CategoryListProps = {
    categoryName: string;
    subGroups: SubGroupData[];
};