
export type TagProps = {
    tagGroup: "A" | "B" | "C" | "Total"
};

export type TagWordProps = {
    word: string;
    tagStyleCorrect: boolean;
};


export type TagCounterProps = TagProps & {
    counter: number;
};