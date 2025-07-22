
export type TagProps = {
    tagGroup: "A" | "B" | "C" | "Total"
};


export type TagCounterProps = TagProps & {
    counter: number;
};