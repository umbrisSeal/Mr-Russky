import type { Noun } from "../data/words/inflected/nouns/noun"
import { create } from 'zustand';

interface VocabularyStore {
    lessonVocabulary: Noun[],
    setLessonVocabulary: (vocabulary: Noun[]) => void;
};

export const useLessonVocabularyStore = create<VocabularyStore>((set) => ({
    lessonVocabulary: [],
    setLessonVocabulary: (vocabulary) => set({ lessonVocabulary: vocabulary })
}));