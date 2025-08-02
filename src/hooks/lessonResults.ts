
import { create } from "zustand"
import type { Noun } from "../data/words/inflected/nouns/noun";

interface ResultsStore {
    wrongAnswers: Noun[],
    correctAnswers: Noun[],
    addWrongAnswer: (word: Noun) => void;
    addCorrectAnswer: (word: Noun) => void;
};

export const useLessonResultsStore = create<ResultsStore>((set) => ({
    wrongAnswers: [],
    correctAnswers: [],
    addWrongAnswer: (word) => set((state) => ({
        wrongAnswers: [...state.wrongAnswers, word],
    })),
    addCorrectAnswer: (word) => set((state) => ({
        correctAnswers: [...state.correctAnswers, word],
    }))
}));