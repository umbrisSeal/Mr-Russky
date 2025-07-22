
// Type for Noun words.

import type { BaseWord } from "../../baseWord";

// Names of all 6 russian gramatical cases
export type CaseName = 
    | "nominative"
    | "genitive"
    | "dative"
    | "accusative"
    | "instrumental"
    | "prepositional"
;

export type NounCases = {
    singular: Record<CaseName, string>;
    plural: Record<CaseName, string>;
};


export type Noun = BaseWord & {
    gender: "male" | "female" | "neutral";
    cases: NounCases;
};