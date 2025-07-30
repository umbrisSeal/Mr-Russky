import type { Noun } from "../../data/words/inflected/nouns/noun";

export type LessonPanelProps = {
    wordType: string;
    currentExcerciceIndex: number;
    showingAnswer: boolean;             // Indicates if LessonPanel should show the correct answer.
    hintButtonFn: () => void;
    okButtonFn: (userAnswer: string) => void;
    lessonVocabulary: Noun[];           // Must change in the future, not only Nouns are used.
}