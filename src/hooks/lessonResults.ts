
import { create } from "zustand"
import type { Noun } from "../data/words/inflected/nouns/noun";

interface ResultsStore {
    wrongAnswers: Noun[],
    correctAnswers: Noun[],
    previousCorrectAnswers: Noun[],
    previousWrongAnswers: Noun[],
    addWrongAnswer: (word: Noun) => void;
    addCorrectAnswer: (word: Noun) => void;
    resetResults: () => void;
    resetAllResults: () => void;
};

export const useLessonResultsStore = create<ResultsStore>((set) => ({
    wrongAnswers: [],
    correctAnswers: [],
    previousWrongAnswers: [],
    previousCorrectAnswers: [],
    addWrongAnswer: (word) => set((state) => ({
        wrongAnswers: [...state.wrongAnswers, word],
    })),
    addCorrectAnswer: (word) => set((state) => ({
        correctAnswers: [...state.correctAnswers, word],
    })),
    resetResults: () => set((state) => ({
        previousWrongAnswers: [...state.wrongAnswers],
        previousCorrectAnswers: [...state.correctAnswers],
        wrongAnswers: [],
        correctAnswers: [],
    })),
    resetAllResults: () => set(() => ({
        previousCorrectAnswers: [],
        previousWrongAnswers: [],
        correctAnswers: [],
        wrongAnswers: [],
    }))
}));