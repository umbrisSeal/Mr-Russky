import type { Noun } from "../../data/words/inflected/nouns/noun";

export type LessonPanelProps = {
    wordType: string;
    currentExcerciceIndex: number;
    hintButtonFn: () => void;
    okButtonFn: () => void;
    lessonVocabulary: Noun[];           // Must change in the future, not only Nouns are used.
}